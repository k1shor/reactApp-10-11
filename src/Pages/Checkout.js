import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import Checkout_progress from '../Components/Checkout_progress'

const Checkout = () => {
    const { cart_items } = useSelector(state => state.cart)

    return (
        <>
            <div className='row'>
                <div className='col-md-9 p-5'>
                    <Checkout_progress confirmOrder />
                    <div className='container mx-auto'>
                        <table className="table table-striped table-hover mytable text-center">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Product Image</th>
                                    <th>Product Details</th>
                                    <th>No. of items</th>
                                    <th>Price</th>
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
                                                <p>{item.product_description}</p>
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>
                                                {item.product_price * item.quantity}
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-md-3 p-5'>
                    <div className=' m-3 shadow-lg p-3'>
                        <h4>
                            No. of items in Cart:
                            <b>

                            </b>
                        </h4>
                        <h4>
                            Total Price:
                            <b>

                            </b>
                        </h4>
                        <hr className='my-3' />
                        <button className='btn btn-warning'>Proceed to Shipping</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Checkout