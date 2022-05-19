import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './cart.css'
import { useSelector } from 'react-redux'
import { API } from '../config'

const Cart = () => {
    const { cart_items } = useSelector(state => state.cart)

    // console.log(cart_items)

    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <table className="table table-striped table-hover mytable text-center">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart_items.map((item, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>
                                        <img src={`http://localhost:5000/${item.product_image}`} alt="" height={'100px'} />
                                    </td>
                                    <td>
                                        <h4>{item.product_name}</h4>
                                        <h5>{item.product_price}</h5>
                                        <p>{item.product_description}</p>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning me-2'>-</button>
                                        <input type={'text'} value={item.quantity} className='text-center'/>
                                        <button className='btn btn-warning me-2'>+</button>
                                        <button className='btn btn-warning'>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <Footer />

        </>
    )
}

export default Cart