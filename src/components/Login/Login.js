import React from "react";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import './login.css';
import { Link } from "react-router-dom";
//1:
const initialValues = {
   email: '',
   password: '',
};
//2:
   const onSubmit = (values) => {
      console.log(values);
};
//3:
const validationSchema = Yup.object({

   email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

   password: Yup.string()
      .required('Password is required')
});


const  LoginForm = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });

   return (
      <div className="formContainer">
         <form onSubmit={formik.handleSubmit}>
            <Input label="Email" name="email" formik={formik} type="email" />
            <Input label="Password" name="password" formik={formik} type='password' />
         <button style={{width: '100%'}} type="submit" disabled={!formik.isValid} className="btn primary">Login</button>
         <Link  to='/signup'>
            <p style={{marginTop:'15px'}}>Not sign up yet!</p>
         </Link>
         </form>
      </div>
   );
};

export default LoginForm;
