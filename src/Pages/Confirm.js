import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Confirm = () => {
    let url_parameters = useParams() // to get parameters from url

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/api/confirmation/${url_parameters.token}`,{
            method:"POST",
        })
        .then(data=>{
            if(data.error){
                return setError(data.error)
            }
            else{
                return setSuccess(true)
            }
        })
        .catch(error=>console.log(error))
    }, [url_parameters])
    


    // console.log(url_parameters.token)
  return (
    <div>Confirm</div>
  )
}

export default Confirm