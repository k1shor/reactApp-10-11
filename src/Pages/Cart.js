import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './cart.css'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <table className="table table-striped table-hover mytable">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <img src="./image/img1.jfif" alt="" height={'100px'}/>
                            </td>
                            <td>
                                <h4>Macbook Air</h4>
                                <p>I7 processor, 8Gb Ram, Rs. 210,000</p>
                            </td>
                            <td>
                                <button className='btn btn-warning me-2'>Update</button>
                                <button className='btn btn-warning'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>
                                <img src="./image/img2.jfif" alt="" height={'100px'} />
                            </td>
                            <td>
                                <h4>Acer Laptop</h4>
                                <p>I7 processor, 8Gb Ram, Rs. 109,000</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-warning'>Remove</button>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>
                                <img src="./image/img1.jfif" alt="" height={'100px'}/>
                            </td>
                            <td>
                                <h4>Macbook Air</h4>
                                <p>I7 processor, 8Gb Ram, Rs. 210,000</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-warning'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>
                                <img src="./image/img2.jfif" alt="" height={'100px'} />
                            </td>
                            <td>
                                <h4>Acer Laptop</h4>
                                <p>I7 processor, 8Gb Ram, Rs. 109,000</p>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-warning'>Remove</button>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
           
        </>
    )
}

export default Cart