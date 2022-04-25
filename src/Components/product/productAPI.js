import { API } from "../../config";

// to add new product
export const addProduct = (product) => {
    console.log(product)
    return fetch(`${API}/addproduct`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            // "Content-Type": 'application/json'
        },
        body: product
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}


// to get products from backend
export const getAllProducts = () => {
    return fetch(`${API}/showProducts`,{
        method:"GET",
        headers:{
            Accept:'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}