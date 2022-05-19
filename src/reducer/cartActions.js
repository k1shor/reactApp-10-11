import axios from "axios"
import {API} from '../config'
import { ADD_TO_CART } from "./cartConstants"

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`${API}/productdetail/${id}`)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_image:  data.product_image,
            count_in_stock: data.count_in_stock,
            product_description: data.product_description,

            quantity: quantity
        }
    })

    localStorage.setItem('cart_items',JSON.stringify(getState().cart.cart_items))

}