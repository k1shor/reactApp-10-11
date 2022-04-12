import { API } from "../../config"

// to get all categories from backend
export const getAllCategories = () => {
    // console.log("fetching data")
    return fetch(`http://localhost:5000/api/categories`, {
        method: "GET"
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

// to add new category
export const addCategory = (category_name) => {
    console.log(category_name)
    return fetch(`http://localhost:5000/api/addcategory`, {
        method: "POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            // Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(category_name)
    }
    )
    .then(res=>res.json())
    .catch(err=>console.log(err))
}