import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { orderDetails } from '../reducer/orderActions'

const OrderDetails = () => {
    const params = useParams()
    const orderId = params.order_id
    const {order, error} = useSelector(state=>state.orderDetails)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(orderDetails(orderId))
        console.log(order)

    },[])
  return (
    <>
    <h4>Order Details</h4>
    <hr/>
    <h5>No. of Items: {order.OrderItems.length}</h5>
    <h5>Order Items:</h5>
    {
        order.OrderItems.map((item,i)=>{
            return <>
                <img src={`http://localhost:5000/${item.product.product_image}`} height="150px"/>
                <h6>{item.product.product_name}-{item.quantity}</h6>
            </>
        })
    }
    
    <h6>Total Price: {order.totalPrice}</h6>
    <h6>Status : {order.status}</h6>
    </>
  )
}

export default OrderDetails