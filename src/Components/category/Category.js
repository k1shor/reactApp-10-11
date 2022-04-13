import React, {useState, useEffect} from 'react'
import { isAuthenticated } from '../auth'
import Footer from '../Footer'
import Navbar from '../Navbar'
import AdminSidebar from '../AdminSidebar'
import { addCategory, deleteCategory, getAllCategories } from './categoryApi'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const {token} = isAuthenticated()
    const { user } = isAuthenticated()

    const [category_name, setCategoryName] = useState('')
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('')
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        getAllCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                // console.log(data)
                setCategories(data)
            }
        })
        .catch(err=>console.log(err))
    },[success])

    const addcategory = () =>{
        setSuccess('')
        // e.preventDefault()
        addCategory({category_name},token)
        .then(data=>{
            if(data.error){
                setSuccess('')
                setError(data.error)
            }
            else{
                setError('')
                setSuccess('Category added successfully')
                setCategoryName('')
            }
        })
        .catch(err=>console.log(err))
    }

    const deletecategory = (id) =>{
        setSuccess('')
        // e.preventDefault()
        deleteCategory(id, token)
        .then(data=>{
            if(data.error){
                setSuccess('')
                setError(data.error)
            }
            else{
                setError('')
                setSuccess('Category Deleted successfully')
                
            }
        })
        .catch(err=>console.log(err))
    }

    // to show error
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    // to show success
    const showSuccess = () =>{
        if(success){
            return  <div className='alert alert-success'>{success}</div>
        }     
    }


    return (
        <>
            <Navbar />
            <div className='container-fluid custom-row'>
                <div className='row '>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='my-3 text-center'>Categories</h3>
                        <div className='container'>
                            {showError()}
                            {showSuccess()}
                            <table className='table text-center'>
                                <thead>
                                    <tr>
                                        <td>S.No.</td>
                                        <td>Category Name</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        categories.map((item,i)=>(
                                            <tr key={i}>
                                            <td>{i+1}</td>
                                            {/* console.log(item.category_name) */}
                                            <td>{item.category_name}</td>
                                            <td>
                                                <button className='btn btn-warning' onClick={()=>navigate(`/admin/categoryupdate/${item._id}`)}>EDIT</button>
                                                <button className='btn btn-danger' onClick={()=>deletecategory(item._id)}>DELETE</button>
                                            </td>
                                        </tr>
                                        )
                                        ) 
                                        
                                    }

                                    <tr>
                                        <td colSpan={2}><input className='form-control' type={'text'} placeholder='input category name' onChange={(e)=>{
                                            setCategoryName(e.target.value)
                                        }} value={category_name}/></td>
                                        <td><button className='btn btn-warning' onClick={
                                            addcategory
                                        }>Add</button></td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Category