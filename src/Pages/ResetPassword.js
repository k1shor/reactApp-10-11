import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetpassword } from '../Components/auth'

const ResetPassword = () => {
    const params = useParams()
    const token = params.token
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const [email, setEmail] = useState('')
    const [new_password, setNewPassword] = useState('')
    // console.log(token)


    const passwordReset = e => {
        setError('')
        setSuccess(false)
        e.preventDefault()
        resetpassword(token, email, new_password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(true)
                }
            })
            .catch(err => console.log(err))
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>
                Password has been reset successfully.
            </div>
        }

    }

    return (
        <>
            {showError()}
            {showSuccess()}
            <div className='container w-50 my-5'>
                {
                    !success &&
                    <>
                        <h3>
                            ResetPassword
                        </h3>
                        <label>Email:</label>
                        <input type={'text'} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        <label>New Password:</label>
                        <input type={'text'} className='form-control' onChange={(e) => setNewPassword(e.target.value)} />
                        <button className='btn btn-warning' onClick={passwordReset}>Reset Password</button>
                    </>
                }
            </div>

        </>
    )
}

export default ResetPassword