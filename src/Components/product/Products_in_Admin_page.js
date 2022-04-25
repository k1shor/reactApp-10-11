import React from 'react'
import { useEffect, useState } from 'react'
import { API } from '../../config'
import AdminSidebar from '../AdminSidebar'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { getAllProducts } from './productAPI'

const Products_in_Admin_page = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProducts(data)
                console.log(data)
            }
        })
        .catch(error=>console.log(error))
    },[])

    return (
        <>
                <Navbar />

                <div className='container-fluid custom-row'>
                    <div className='row '>
                        <div className='col-md-3'>
                            <AdminSidebar />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='my-3 text-center'>Products</h3>
                            <hr />
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Image</th>
                                        <th>Product Details</th>
                                        <th>Count in Stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((item,i)=>{
                                            return <tr key={item._id}>
                                            <td>{i+1}</td>
                                            <td>
                                                <img src = {`http://localhost:5000/${item.product_image}`} alt={item.product_name} style={{height:"150px"}}/>
                                            </td>
                                            <td>
                                                <h3>{item.product_name}</h3>
                                                <h4>{item.product_price}</h4>
                                                <p>{item.description}</p>

                                            </td>
                                            <td>{item.count_In_Stock}</td>
                                            <td><button className='btn btn-warning'>View Details</button></td>
                                        </tr>
                                        }

                                            
                                        
                                            )
                                    }

                                </tbody>
                            </table>





                        </div>
                    </div>
                </div>

                <Footer />
        </>
    )
}

export default Products_in_Admin_page