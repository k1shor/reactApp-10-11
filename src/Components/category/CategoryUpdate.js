import React, {useState, useEffect} from 'react'
import AdminSidebar from '../AdminSidebar'
import Navbar from '../Navbar'
import { findCategory } from './categoryApi'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../auth'

const CategoryUpdate = () => {
    const params = useParams()
    const {token} = isAuthenticated()

    const [old_category,setOLDCategory] = useState('')
    const [new_category,setNEWCategory] = useState('')

    useEffect(()=>{
        findCategory(params.id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setOLDCategory(data.category_name)
            }
        })
        .catch(error=>console.log(error))
    },[])

    const update = (e) =>{
        e.preventDefault()

    }



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
                                <input type={'text'} className='form-control disabled' value={old_category} readOnly/>
                                <label>Previous Category Name</label>
                            </div>
                            <div className='form-floating'>
                                <input type={'text'} className='form-control' placeholder='enter category_name' onChange={(e)=>setNEWCategory(e.target.value)}/>
                                <label>New Category Name</label>
                            </div>

                            <button className='btn btn-warning' onClick={(e)=>update(e)}>UPDATE</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryUpdate