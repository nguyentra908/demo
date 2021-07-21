import React from 'react'
import { Formik, Form, Field } from 'formik';
import history from '../../history';
import './FormRegister.css';

export const FormikRegister = () => {
  const validateName = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  }

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if ((new RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$").test(value))) {
      error = 'Invalid password';
    }
    return error;
  }
  const onRedirectToLogin = () => {
    window.scrollTo(0, 0)
    history.push('/login');
  }

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  const validateConfirmPassword = (e, value) => {
    let error;
    if (!e) {
      error = 'Required';
    } else if (e !== value.password) {
      error = 'Invalid password';
    }
    return error;
  }

  const validatePhoneNumber = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!(new RegExp("^[0-9]*$").test(value))) {
      error = 'Invalid phone';
    }
    return error;
  }

  return (
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPass: '', phoneNumber: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          alert("Sign Up successful");
         
        }}  
      >
        {({
          values,
          errors,
          touched,
          handleSubmit
        }) => (
            <div className="register_container" style={{ paddingTop: "15%" }}>
              <div className="register-page">
                <div className="register" >
                  <div className="register-header-text">Register here</div>
                  <Form className="form_register" onSubmit={handleSubmit} >
                    <div className="form-group" style={{ marginTop: '1rem' }} />
                    <Field  className="form-control" name="name" validate={validateName} placeholder="Enter name" />
                    {errors.name && touched.name && errors.name && 
                      <span className="text-danger pl-1">{errors.name}</span>}

                    <div className="form-group" style={{ marginTop: '1rem' }} />
                    <Field className="form-control"  name="email" validate={validateEmail} placeholder="Enter Email" />
                    {errors.email && touched.email && errors.email && 
                      <span className="text-danger pl-1">{errors.email}</span>}

                    <div className="form-group" style={{ marginTop: '1rem' }} />
                    <Field type="password" className="form-control" name="password" validate={validatePassword} placeholder="Enter Password" />
                    {errors.password && touched.password && errors.password && 
                      <span className="text-danger pl-1">{errors.password}</span>}

                    <div className="form-group" style={{ marginTop: '1rem' }} />
                    <Field type="password" className="form-control" name="confirmPass" validate={(e) => validateConfirmPassword(e, values)} placeholder="Confirm Password" />
                    {errors.confirmPass && touched.confirmPass && errors.confirmPass && 
                      <span className="text-danger pl-1">{errors.confirmPass}</span>}

                    <div className="form-group" style={{ marginTop: '1rem' }} />
                    <Field className="form-control" name="phoneNumber" validate={validatePhoneNumber} placeholder="Enter Phone number" />
                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber && 
                      <span className="text-danger pl-1">{errors.phoneNumber}</span>}

                    <div className="form-group" style={{ marginTop: '1rem' }} >
                      <input id="btnsubmit" type="submit" className="form-control" value="Register" />
                    </div>

                    <div className="form-group" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                      <span style={{ opacity: 0.8 }}>
                        You already have an account? &nbsp;</span>
                      <span onClick={onRedirectToLogin} style={{ color: 'orange' }}>Sign In</span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
      </Formik>
  )
};
