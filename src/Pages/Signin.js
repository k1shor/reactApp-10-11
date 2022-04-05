import React, {useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../Components/auth'

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [redirect, setRedirect] = useState(false)

    const navigate = useNavigate()
    const path = useLocation()
    const {user} = isAuthenticated()

    // console.log(user.user.role)

// // handle change function to store values in useState
// const handleChanges = name => (event) => {
//     setValues({ ...values, error: false, [name]: event.target.value })
//     // console.log(name + ": " + event.target.value)
// }

    const clickSubmit = e => {
        e.preventDefault()
        signin({email,password})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                // console.log(data)
                authenticate(data,()=> setRedirect(true))
                
            }
        })
        .catch(error=>console.log(error))
    }

    // to show error
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    // to redirect if successful login
    const redirectToPage = () => {
        if(redirect){
            // console.log(user)
            if(user && user.role === 1){
                navigate('/admin/dashboard')
            }
            if(user && user.role === 0){
                navigate('/')
            }
                // return false;
        }
    }

    return (
        <>
            <Navbar />
            {showError()}
            {redirectToPage()}
            <div className='container-sm w-50  mx-auto my-5 shadow-lg p-5'>
                <main className="form-signin">
                    <form>
                        <div className='text-center'>
                            <img className="mb-4" src="logo192.png" alt="" width="72" height="72" />
                        </div>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>Sign in</button>
                        Do not have an account? <Link to='/signup'>Register</Link>

                        <p className="mt-5 mb-3 text-muted">&copy; 2017 – 2021</p>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Signin
