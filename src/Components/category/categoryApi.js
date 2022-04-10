import { API } from "../../config"

// to get all categories from backend
export const getAllCategories = () =>{
    // console.log("fetching data")
    return fetch(`http://localhost:5000/api/categories`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}