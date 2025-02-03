import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import  "./RegisterForm.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Обов’язкове поле"),
  email: Yup.string().email("Невірний формат email").required("Обов’язкове поле"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов’язкове поле"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <label>
          Username
          <Field type="text" name="name" className="input" />
          <ErrorMessage name="name" component="div" className="error" />
        </label>
        <label>
          Email
          <Field type="email" name="email" className="input" />
          <ErrorMessage name="email" component="div" className="error" />
        </label>
        <label>
          Password
          <Field type="password" name="password" className="input" />
          <ErrorMessage name="password" component="div" className="error" />
        </label>
        <button type="submit" className="button">Register</button>
      </Form>
    </Formik>
  );
};
