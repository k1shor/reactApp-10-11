import axios from "axios"
import {API} from '../config'
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstants"

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`${API}/productdetail/${id}`)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_image:  data.product_image,
            count_In_Stock: data.count_In_Stock,
            product_description: data.product_description,

            quantity: quantity
        }
    })

    localStorage.setItem('cart_items',JSON.stringify(getState().cart.cart_items))

}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    // console.log(id)
    const {data} = await axios.get(`${API}/productdetail/${id}`)
    // console.log(data)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            product: data._id
        }
    })
    localStorage.setItem('cart_items',JSON.stringify(getState().cart.cart_items))
}