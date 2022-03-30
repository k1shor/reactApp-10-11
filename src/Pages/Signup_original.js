import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import './signup.css'
import { Formik, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { API } from '../config'

import { signup } from '../Components/auth'


const Signup = () => {
    // to store values for sending in adduser
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "",
        email: "",
        password: "",
        error: "",
        success: false,
    })
    // destructing 
    const { first_name, last_name, date_of_birth, gender, email, password, error, success } = values



    // handle change function to store values in useState
    const handleChanges = name => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
        // console.log(name + ": " + event.target.value)
    }

    // submit form
    const handleSubmit = event =>{
        event.preventDefault();
        setValues({...values, error:'false'})
        signup({first_name, last_name, date_of_birth, gender,email, password })
        .then(data=>{
            if(data.error){
                // console.log(data.error)
                setValues({...values, error:data.error, success:false})
                console.log(error)
            }
            else{
                setValues({...values, first_name:'',last_name:'',date_of_birth:'',gender:',', email:'', password:'',error:'',success:true})
            }
        })
        .catch(error=>console.log("database error"))
    }
    
    // display:  error?'block':'none'
    // error? if there is error
    // if condition is true, display:'block'
    // if condition is false, display: 'none'

    // to show error
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
        // else{
        //     return <div className='alert alert-danger' style={{display:'none'}}></div>
        // }
        // return <div className='alert alert-danger' style={{display:error ? '' : 'none'}}>{error}</div>
    }

    // to show success/ user is added
    const showSuccess = () =>{
        if(success){
            return  <div className='alert alert-success'>New user added. Please verify your account.</div>
        }
            
    }
    

    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}
            <Formik
                initialValues={{
                    v_first_name: "",
                    v_last_name: "",
                    v_email: "",
                    v_password: "",
                    v_cpassword: ""
                }}
                validationSchema={Yup.object({
                    v_first_name: Yup.string()
                        .required("First name is required.")
                        .min(2, "First name must be at least 2 characters.")
                        .max(30, "First name must not be more than 30 characters."),

                    v_last_name: Yup.string()
                        .required("Last name is required.")
                        .min(2, "Last name must be at least 2 characters.")
                        .max(30, "Last name must not be more than 30 characters."),

                    v_email: Yup.string()
                        .required("Email is required")
                        .email("Invalid email format. example: example@gmail.com"),

                    v_password: Yup.string()
                        .required("Password is required")
                        .matches(/([?=.*a-zA-Z])(?=.*\d)(?=.*[\!\@\#\_\-\$\%\^\&\*])/, "Password must contain one lowercase, one uppercase, one number and one special character ")
                        .min(8, "and must be at least 8 characters")
                        .max(30, "and must be at most 30 characters."),

                    v_cpassword: Yup.string()
                        .required("Confirmation Password is required")
                        .oneOf([Yup.ref("password")], "Password and confirm password does not match.")
                })}
            >

                <div className='container-sm w-50  mx-auto my-5 shadow-lg p-5'>
                    <main className="form-signin">
                            <form>
                                <div className='text-center'>
                                    <img className="mb-4" src="logo192.png" alt="" width="72" height="72" />
                                </div>
                                <h1 className="h3 mb-3 fw-normal">Register</h1>

                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="floatingfirstname" placeholder="first name here" name="v_first_name" value={first_name} onChange={handleChanges('first_name')} />
                                    <label htmlFor="floatingfirstname">First name</label>
                                    <ErrorMessage name="v_first_name">
                                        {msg => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatinglastname" placeholder="last name here" name="v_last_name" onChange={handleChanges('last_name')} value={last_name} />
                                    <label htmlFor="floatinglastname">Last name</label>
                                    <ErrorMessage name="v_last_name">
                                        {msg => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-floating">
                                    <input type="date" className="form-control" id="floatingdate" placeholder="date of birth here" onChange={handleChanges('date_of_birth')} value={date_of_birth} />
                                    <label htmlFor="floatingdate">Date of Birth</label>
                                </div>

                                <label className='form-control form-floating'>Gender:
                                    <div className='d-flex'>
                                        <div className="form-check ms-5">
                                            <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChanges('gender')} value='Male' />
                                            <label className="form-check-label ms-3" for="flexRadioDefault1">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleChanges('gender')} value='Female' />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={handleChanges('gender')} value='Other' />
                                            <label className="form-check-label" for="flexRadioDefault3">
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </label>



                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="v_email" onChange={handleChanges('email')} value={email} />
                                    <label htmlFor="floatingInput">Email address</label>
                                    <ErrorMessage name="v_email">
                                        {msg => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="v_password" onChange={handleChanges('password')} value={password} />
                                    <label htmlFor="floatingPassword">Password</label>
                                    <ErrorMessage name="v_password">
                                        {msg => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password" name="v_cpassword" />
                                    <label htmlFor="floatingCPassword">Confirm Password</label>
                                    <ErrorMessage name="v_cpassword">
                                        {msg => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> I accept the terms the conditions.
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
                                Already have an account? <Link to='/signin'>Sign in</Link>

                                <p className="mt-5 mb-3 text-muted">&copy; 2017 – 2021</p>
                            </form>
                        
                    </main>
                </div>
            </Formik>
            <Footer />
        </>
    )
}

export default Signup
