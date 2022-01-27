import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import './signup.css'
import {Formik, ErrorMessage, Field, Form} from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    return (
        <>
            <Navbar />
            <Formik 
            initialValues={{
                first_name:"",
                last_name:"",
                email:"",
                password:"",
                cpassword:""
            }}
            validationSchema={Yup.object({
                first_name:Yup.string()
                .required("First name is required.")
                .min(2,"First name must be at least 2 characters.")
                .max(30,"First name must not be more than 30 characters."),

                last_name:Yup.string()
                .required("Last name is required.")
                .min(2,"Last name must be at least 2 characters.")
                .max(30,"Last name must not be more than 30 characters."),

                email:Yup.string()
                .required("Email is required")
                .email("Invalid email format. example: example@gmail.com"),

                password:Yup.string()
                .required("Password is required")
                .matches(/([?=.*a-zA-Z])(?=.*\d)(?=.*[\!\@\#\_\-\$\%\^\&\*])/,"Password must contain one lowercase, one uppercase, one number and one special character ")
                .min(8,"and must be at least 8 characters")
                .max(30,"and must be at most 30 characters."),

                cpassword:Yup.string()
                .required("Confirmation Password is required")
                .oneOf([Yup.ref("password")],"Password and confirm password does not match.")
            })}
           >

            <div className='container-sm w-50  mx-auto my-5 shadow-lg p-5'>
                <main className="form-signin">
                    <Form>
                        <div className='text-center'>
                            <img className="mb-4" src="logo192.png" alt="" width="72" height="72" />
                        </div>
                        <h1 className="h3 mb-3 fw-normal">Register</h1>

                        <div className="form-floating mb-2">
                            <Field type="text" className="form-control" id="floatingfirstname" placeholder="first name here" name="first_name"/>
                            <label htmlFor="floatingfirstname">First name</label>
                            <ErrorMessage name="first_name">
                                {msg=><div style={{color:"red"}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-floating">
                            <Field type="text" className="form-control" id="floatinglastname" placeholder="last name here" name="last_name" />
                            <label htmlFor="floatinglastname">Last name</label>
                            <ErrorMessage name="last_name">
                                {msg=><div style={{color:"red"}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingdate" placeholder="date of birth here" />
                            <label htmlFor="floatingdate">Date of Birth</label>
                        </div>

                        <label className='form-control form-floating'>Gender:
                            <div className='d-flex'>
                                <div className="form-check ms-5">
                                    <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label ms-3" for="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                    <label className="form-check-label" for="flexRadioDefault3">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </label>



                        <div className="form-floating">
                            <Field type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                            <label htmlFor="floatingInput">Email address</label>
                            <ErrorMessage name="email">
                                {msg=><div style={{color:"red"}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-floating">
                            <Field type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                            <label htmlFor="floatingPassword">Password</label>
                            <ErrorMessage name="password">
                                {msg=><div style={{color:"red"}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-floating">
                            <Field type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password" name="cpassword" />
                            <label htmlFor="floatingCPassword">Confirm Password</label>
                            <ErrorMessage name="cpassword">
                                {msg=><div style={{color:"red"}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> I accept the terms the conditions.
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        Already have an account? <Link to='/signin'>Sign in</Link>

                        <p className="mt-5 mb-3 text-muted">&copy; 2017 – 2021</p>
                    </Form>
                </main>
            </div>
            </Formik>
            <Footer />
        </>
    )
}

export default Signup
