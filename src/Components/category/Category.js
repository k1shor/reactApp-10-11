import React, {useState, useEffect} from 'react'
import { isAuthenticated } from '../auth'
import Footer from '../Footer'
import Navbar from '../Navbar'
import AdminSidebar from '../AdminSidebar'
import { getAllCategories } from './categoryApi'

const Category = () => {
    const { user } = isAuthenticated()

    const [categories, setCategories] = useState([])

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
                        <h3 className='my-3 text-center'>Categories</h3>
                        <div className='container'>
                            <table className='table'>
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
                                                <button className='btn btn-warning'>EDIT</button>
                                                <button className='btn btn-danger'>DELETE</button>
                                            </td>
                                        </tr>
                                        )
                                        ) 
                                        
                                    }
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