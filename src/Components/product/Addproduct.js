import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AdminSidebar from '../AdminSidebar'
import { getAllCategories } from '../category/categoryApi'
import { addProduct } from './productAPI'

const Addproduct = () => {
    const file_ref = useRef()
    const select_ref = useRef()
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
        count_In_Stock: '',
        category: '',
        formData:''
    })
    const { product_name, product_price, product_description, product_image, count_In_Stock, category, formData } = product

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                    setProduct({...product,formData:new FormData})
                }
            })
            .catch(err => console.log(err))
    }, [success])

    const handleChange = name => event => {
        if (name === 'product_image') {
            setProduct({ ...product, [name]: event.target.files[0] })
            formData.set(name, event.target.files[0])
        }
        else {
            setProduct({ ...product, [name]: event.target.value })
            formData.set(name, event.target.value)
        }
        console.log(product)
    }

    const clickSubmit = event => {
        setError('')
        setSuccess(false)
        // console.log(formData)
        event.preventDefault()
        addProduct(formData)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                }
                else {
                    setProduct({
                        product_name: '',
                        product_price: '',
                        product_description: '',
                        product_image: '',
                        count_In_Stock: '',
                        category: '',
                        // formData: '',
                    })
                    file_ref.current.value = ''
                    select_ref.current.value = ''
                    setSuccess(true)
                    
                }
            })
            .catch(err => console.log(err))
    }

    // to show error
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    // to show success
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>New Product added successfully.</div>
        }
    }
        return (
            <>
                
                <div className='container-fluid custom-row'>
                    <div className='row '>
                        <div className='col-md-3'>
                            <AdminSidebar />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='my-3 text-center'>Add Product</h3>
                            <hr />
{showError()}
{showSuccess()}
                            <div className='container p-5'>
                                <label htmlFor='product_name'>Product Name:</label>
                                <input className='form-control mb-2' type={'text'} id='product_name' onChange={handleChange('product_name')} value={product_name} />

                                <label htmlFor='product_price'>Product Price:</label>
                                <input className='form-control mb-2' type='number' id='product_price' onChange={handleChange('product_price')} value={product_price} />

                                <label htmlFor='product_description'>Product Description:</label>
                                <textarea rows={5} className='form-control mb-2' id='product_description' onChange={handleChange('product_description')} value={product_description} />

                                <label htmlFor='count_In_Stock'>Count in Stock:</label>
                                <input className='form-control mb-2' type={'number'} id='count_In_Stock' onChange={handleChange('count_In_Stock')} value={count_In_Stock} />

                                <label htmlFor='category'>Category</label>
                                <select id='category' className='form-control mb-2' onChange={handleChange('category')} ref={select_ref}>
                                    <option>Choose category</option>
                                    {
                                        categories.map(category => <option key={category._id} value={category._id}>{category.category_name}</option>)
                                    }

                                </select>

                                <label htmlFor='product_image'>Image</label>
                                <input type={'file'} id='product_image' accept="image/*" className='form-control mb-2' ref={file_ref}
                                onChange={handleChange('product_image')}
                                // onChange={event => 
                                //     setProduct({ ...product, ['product_image']: event.target.files[0] })
                                // }
                                ></input>

                                <button className='btn btn-warning form-control' onClick={clickSubmit}>ADD</button>





                            </div>



                        </div>
                    </div>
                </div>

            </>
        )
    }

    export default Addproduct