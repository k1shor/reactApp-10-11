import React from 'react'
import AdminSidebar from '../AdminSidebar'
import Navbar from '../Navbar'

const CategoryUpdate = () => {
    return (
        <div>
            <Navbar />
            <div className='container-fluid custom-row'>
                <div className='row '>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='my-3 text-center'>Categories</h3>
                        <div className='container'>
                        <div className='form-floating'>
                                <input type={'text'} className='form-control disabled' placeholder='category_name' />
                                <label>Previous Category Name</label>
                            </div>
                            <div className='form-floating'>
                                <input type={'text'} className='form-control' placeholder='enter category_name' />
                                <label>New Category Name</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryUpdate