import { useState } from 'react'
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import './ContactForm.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Required")
      .matches(/^[0-9\-]+$/, "Number can only contain digits and dashes"),
  });

  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="contact-form">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            className="form-input"
          />
          <ErrorMessage name="name" component="div" className="form-error" />

          <label htmlFor="number" className="form-label">
            Number
          </label>
          <Field
            type="text"
            id="number"
            name="number"
            placeholder="Enter number"
            className="form-input"
          />
          <ErrorMessage name="number" component="div" className="form-error" />

          <button type="submit" className="form-submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};


export default ContactForm;