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
        // headers:{
        //     Accept:'application/json'
        // }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to get sorted products
export const getSortedProducts =(sortBy,order,limit) => {
    return fetch(`${API}/showProducts?sortBy=${sortBy}&order=${order}&limit=${limit}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// to get product details
export const getProductDetails = (id) => {
    return fetch(`${API}/productdetail/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// to get related products
export const getRelatedProducts = (id) => {
    return fetch(`${API}/getrelatedProducts/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// to get filtered products
export const getFilteredProducts = (sortBy, order, limit, skip, {filters})=>{
    let data = {skip, filters}
    // console.log(data)
    return fetch(`${API}/getFilteredProducts`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}