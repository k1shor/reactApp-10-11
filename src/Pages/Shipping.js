import React, { useEffect, useState } from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import Checkout_progress from '../Components/Checkout_progress'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
// import SAVE


import {countries} from 'countries-list'
import { saveShippingInfo } from '../reducer/cartActions'

const Shipping = () => {
    const dispatch = useDispatch()
    const [shippingAddress, setShippingAddress] = useState({
        street1:'',
        street2:'',
        city:'',
        country:'',
        phone:''
    })
    const ref = useRef()

    const {street1,street2, city, country, phone} = shippingAddress


    const countriesList = Object.values(countries)
    const { cart_items } = useSelector(state => state.cart)


    useEffect(()=>{
        if(localStorage.getItem('shipping_info')){
            let {shipping_info} = JSON.parse(localStorage.getItem('shipping_info'))
            console.log(shippingAddress)
            setShippingAddress({street1:shipping_info.street1,street2:shipping_info.street2, city:shipping_info.city, phone: shipping_info.phone})
            ref.current.value = shipping_info.country
        }
        console.log(shippingAddress)
    },[])


    const calculate_item = () => {
        let quantity_array = cart_items.map(item => item.quantity)
        let total_quantity = quantity_array.reduce((acc, cur) => (acc + cur))
        return total_quantity
    }

    const calculate_total_price = () => {
        let prices = cart_items.map(item => item.quantity * item.product_price)
        let total_price = prices.reduce((acc, cur) => acc + cur)
        return total_price
    }

    const saveShippingInfoHandler = () => {
        sessionStorage.setItem('orderInfo', JSON.stringify(calculate_total_price()))
        return dispatch(saveShippingInfo(shippingAddress))
    }

    const handleChange = name => e =>{
        setShippingAddress({...shippingAddress, [name]:e.target.value})
    }



    return (
        <>
            <div className='row'>
                <div className='col-md-9 p-5'>
                    <Checkout_progress confirmOrder Shipping />
                    <div className='container mx-auto my-3 p-5'>
                        <label>Address1</label><br/>
                        <label htmlFor='street1'>Shipping Address 1:</label>
                        <input type={'text'} className='form-control' placeholder='eg: Jamal,Kantipath' id='street1' onChange={handleChange('street1')} value={street1}/>
                        <label htmlFor='street2'>Shipping Address 2:</label>
                        <input type={'text'} className='form-control' placeholder='eg: Jamal,Kantipath' id='street2' onChange={handleChange('street2')} value={street2}/>
                        <label htmlFor='city'>City:</label>
                        <input type={'text'} className='form-control' placeholder='eg: Kathmandu' id='city' onChange={handleChange('city')} value={city}/>
                        <label htmlFor='country'>Country:</label>
                        <select id='country' className='form-control' onChange={handleChange('country')} ref={ref}>
                            {
                                countriesList.map((item, i) => {
                                    return <option value={item.name} key={i}>{item.name}</option>
                                })
                            }
                        </select>


                        <label htmlFor='phone'>Phone Number:</label>
                        <input type={'number'} id='phone' className='form-control' onChange={handleChange('phone')} value={phone}/>

{
    localStorage.getItem('shipping_info') ? 
<button className='btn btn-warning' onClick={saveShippingInfoHandler}>Update Shipping info</button>
:
<button className='btn btn-warning' onClick={saveShippingInfoHandler}>Save Shipping info</button>
}
                        
                        




                    </div>
                </div>
                <div className='col-md-3 p-5'>
                    <div className=' m-3 shadow-lg p-3'>
                        <h4>
                            No. of items in Cart:
                            <b>
                                {calculate_item()}
                            </b>
                        </h4>
                        <h4>
                            Total Price:
                            <b>
                                {calculate_total_price()}
                            </b>
                        </h4>
                        <hr className='my-3' />
                        <Link to='/payment'>
                            <button className='btn btn-warning'>Proceed to Payment</button>
                        </Link>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Shipping