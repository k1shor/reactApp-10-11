import React, { useEffect } from 'react'
import { isAuthenticated } from '../Components/auth'
import UserSidebar from '../Components/UserSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, myOrders } from '../reducer/orderActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import {Link} from 'react-router-dom'

const UserDashboard = () => {
  const { user } = isAuthenticated()

  const dispatch = useDispatch()
  const { orders, error } = useSelector(state => state.myOrder)

  useEffect(() => {
    dispatch(myOrders())
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
  }, [])


  return (
    <>
      {/* <Navbar /> */}
      <ToastContainer theme='colored'/>
      <div className='container-fluid custom-row'>
        <div className='row '>
          <div className='col-md-3'>
            <UserSidebar />
          </div>
          <div className='col-md-9'>
            <table className='table'>
              <thead>
                <tr>
                  <th>No. of Items</th>
                  <th>Details</th>
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => {
                  return <tr>
                    <td>{item.OrderItems.length}</td>
                    <td>
                      {item.OrderItems.map(individual_item => { return individual_item.product.product_name })}
                    </td>
                    <td>Rs. {item.totalPrice}</td>
                    <td>{item.status}</td>
                    <td><Link to = {`/orderdetails/${item._id}`}>View Details</Link></td>
                  </tr>
                })}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>

  )
}

export default UserDashboard