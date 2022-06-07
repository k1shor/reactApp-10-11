import axios from 'axios'
import { API } from '../config'
import { isAuthenticated } from '../Components/auth'
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDER_REQUEST,
    MY_ORDER_SUCCESS,
    MY_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS
} from './orderConstants'

export const createOrder=(order)=> async(dispatch, getState) =>{
    const {token} = isAuthenticated()
    try{
        dispatch({type:CREATE_ORDER_REQUEST})

        console.log(order)
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        console.log(order)
        const {data} = await axios.post(`${API}/postorder`,order, config)

        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:error.error
        })
    }
}

export const myOrders=()=>async(dispatch)=>{
    const {user,token} = isAuthenticated()
    try{
        dispatch({type:MY_ORDER_REQUEST})
        const config={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        // const {data} = await axios.get(`${API}/order/userorder/${user._id}`)
        dispatch({
            type:MY_ORDER_SUCCESS,
            // payload:data
        })
    }
    catch(error){
        dispatch({
            type:MY_ORDER_FAIL,
            payload:error.error
        })
    }
}

//clear Errors
export const clearErrors=()=>async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}

export const orderDetails=(id)=> async(dispatch) =>{
    const {token} = isAuthenticated()
    try{
        dispatch({type:ORDER_DETAILS_REQUEST})

        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            }

        }
        // const {data} = await axios.post(`${API}/order/orderdetails/${id}`,config)

        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            // payload:data
        })
    }
    catch(error){
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload:error.error
        })
    }
}