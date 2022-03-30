import { API } from "../../config";

//  api-  http://localhost:5000/api

//for signup
export const signup = (user) => {
    console.log(user)
    return fetch(`http://localhost:5000/api/addUser`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
} 