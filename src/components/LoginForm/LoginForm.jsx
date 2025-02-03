import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logIn } from '../../redux/auth/operations';
import * as Yup from "yup";
import './LoginForm.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Невірний формат email").required("Обов’язкове поле"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов’язкове поле"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <label>
          Email
          <Field type="email" name="email" className="input "/>
          <ErrorMessage name="email" component="div" className="error" />
        </label>
        <label>
          Password
          <Field type="password" name="password" className="input" />
          <ErrorMessage name="password" component="div" className="error" />
        </label>
        <button type="submit" className="button">Log In</button>
      </Form>
    </Formik>
  );
};
