import React, { useState } from "react";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import './signup.css';
import { Link } from "react-router-dom";
import { signupUSer } from "../../services/signupService";


const initialValues = {
   name: '',
   email: '',
   phoneNumber: '',
   password: '',
   passwordConfirm: '',
};
   //2

      //3
const validationSchema = Yup.object({
   name: Yup.string()
      .required('Name is required')
      .min(6, 'name length is not valid'),

   email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

   phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]{11}$/, 'Invalid phone number')
      .nullable(),

   password: Yup.string()
      .required('Password is required')
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),

   passwordConfirm: Yup.string()
      .required('Password confirmation is required')
      // @ts-ignore
      .oneOf([Yup.ref('password'), null], "Password must match"),
});


const SignupForm = () => {
   const [error, setError] = useState(null);

   const onSubmit = async (values) => {
      const { name, email, phoneNumber, password } = values;
      const userData = {
         name,
         email,
         phoneNumber,
         password,
      };
      try {
         const { data } = await signupUSer(userData)
      } catch (error) {
         if (error.response && error.response.data.message)
            setError(error.response.data.message);
      }
};


   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });

   return (
      <div className="formContainer">
         <form onSubmit={formik.handleSubmit}>
            <Input label="Name" name="name" formik={formik} />
            <Input label="Email" name="email" formik={formik} type="email" />
            <Input label="Phone Number" name="phoneNumber" formik={formik} type="tel" />
            <Input label="Password" name="password" formik={formik} type='password' />
            <Input label="Password Confirmation" name="passwordConfirm" formik={formik} type='password' />
            <button style={{ width: '100%' }} type="submit" disabled={!formik.isValid} className="btn primary">Sign Up</button>
            {error && <p style={{ color: 'red'}}>{ error}</p>}
            <Link  to='/login'>
               <p style={{marginTop:'15px'}}>Already Login ?</p>
            </Link>
         </form>
      </div>
   );
};

export default SignupForm;
