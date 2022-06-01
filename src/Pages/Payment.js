import React from 'react'
import { useSelector } from 'react-redux'
import Checkout_progress from '../Components/Checkout_progress'
import { Link } from 'react-router-dom'
import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'

const Payment = () => {
    let options = {}
    let orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
    const { cart_items, shipping_info } = useSelector(state => state.cart)

    const shipping = shipping_info.shipping_info
    const calculate_total_price = () => {
        let prices = cart_items.map(item => item.quantity * item.product_price)
        let total_price = prices.reduce((acc, cur) => acc + cur)
        return total_price
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-9 p-5'>
                    <Checkout_progress confirmOrder Shipping Payment />

<h3>Order Information</h3>
                    <div className='container mx-auto'>
                        <table className="table table-striped table-hover mytable text-center">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col" >No. of items</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart_items.map((item, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={`http://localhost:5000/${item.product_image}`} alt="" height={'100px'} />
                                            </td>
                                            <td>
                                                <h4>{item.product_name}</h4>
                                                <h5>{item.product_price}</h5>
                                                <p>{item.product_description}</p>
                                            </td>
                                            <td>
                                            <h4>{item.quantity}</h4>
                                            </td>
                                            <td><h5>Rs. {item.quantity*item.product_price}</h5></td>
                                        </tr>

                                    ))
                                }
                                <tr className='text-end'>
                                    <td colSpan={5}>
                                        <h4>
                                    Total Amount: Rs. {calculate_total_price()}
                                    </h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='container mx-auto my-3 p-5'>
                    <h3>Shipping Information:</h3>
                        <label className='h4 mt-3'><u>Address1</u></label><br />
                        <label htmlFor='street1'>Shipping Address :</label>
                        <span className='h4'>{shipping.street1}</span>
                        <br/>
                        <label htmlFor='street2'>Shipping Address 2:</label>
                        <span className='h4'>{shipping.street2}</span>
                        <br/>
                        
                        <label htmlFor='city'>City:</label>
                        <span className='h4'>{shipping.city}</span>
                        <br/>
                        
                        
                        <label htmlFor='country'>Country:</label>
                        <span className='h4'>{shipping.country}</span>
                        <br/>


                        <label htmlFor='phone'>Phone Number:</label>
                        <span className='h4'>{shipping.phone}</span>
                        <br/>

                        
                    </div>
                </div>
                <div className='col-md-3 p-5'>
                    <div className=' m-3 shadow-lg p-3'>
                                <h3>Card Information:</h3>
                                <div>
                                    <label htmlFor='card-number'>Card Number</label>
                                    <CardNumberElement type='text' className='form-control' id='card-number' options={options}/>
                                </div>
                                <div>
                                    <label htmlFor='card-expirty'>Card Expiry</label>
                                    <CardExpiryElement type='text' className='form-control' id='card-expiry' options={options}/>
                                </div>
                                <div>
                                    <label htmlFor='card-cvc'>CVC</label>
                                    <CardCvcElement type='text' className='form-control' id='card-cvc' options={options}/>
                                </div>
                        
                            <button className='btn btn-warning form-control' id='pay_btn'>Pay Now</button>
                                            </div>
                </div>
            </div>

        </>
    )
}

export default Payment