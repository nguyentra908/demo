import React from 'react'
import { Formik, Form, Field } from 'formik';
import history from '../../history';
import './FormLogin.css';

export const FormikLogin = () => {
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
    const onRedirectToRegister = () => {
        window.scrollTo(0, 0)
        history.push('/register');
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', confirmPass: '', phoneNumber: '' }}
            onSubmit={(values, { setSubmitting }) => {
                alert("Sign In successful");
            }}
        >
            {({
                errors,
                touched,
                handleSubmit
            }) => (
                    <div className="login_container" style={{ paddingTop: "15%" }}>
                        <div className="login-page">
                            <div className="register" >
                                <div className="login-header-text">Sign In here</div>
                                <Form className="form_login" onSubmit={handleSubmit} >
                                    <div className="form-group"  />
                                    <Field className="form-control" name="name" validate={validateName} placeholder="Enter name" />
                                    {errors.name && touched.name && errors.name &&
                                        <span className="text-danger pl-1">{errors.name}</span>}

                                    <div className="form-group" />
                                    <Field type="password" className="form-control" name="password" validate={validatePassword} placeholder="Enter Password" />
                                    {errors.password && touched.password && errors.password &&
                                        <span className="text-danger pl-1">{errors.password}</span>}

                                    <div className="form-group" style={{ marginTop: '1rem' }} >
                                        <input id="btnsubmit" type="submit" className="form-control" value="Sign In" />
                                    </div>

                                    <div className="form-group" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                                        <span style={{ opacity: 0.8 }}>Do not have an account? &nbsp;</span>
                                        <span onClick={onRedirectToRegister} style={{ color: 'orange' }}>Sign Up</span>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )}
        </Formik>
    )
};
