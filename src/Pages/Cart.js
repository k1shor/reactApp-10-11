import React from 'react'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItemsToCart, removeItemFromCart } from '../reducer/cartActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart_items } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const removeFromCart = (id, name) => {
        
        dispatch(removeItemFromCart(id))
        toast.success(`${name} has been removed from cart.`)
    }

    const increaseInCart = (id, quantity, count)=>{
        const new_quantity = quantity+1
        if(new_quantity> count){
            return;
        }
        dispatch(addItemsToCart(id, new_quantity))
        toast.success(`count has been updated`)
    }

    const reduceFromCart = (id, quantity) => {
        const new_quantity = quantity - 1
        if(new_quantity == 0){
            return;
        }
        dispatch(addItemsToCart(id, new_quantity))
        toast.success(`count has been decreased`)
    }

    // console.log(cart_items)

    return (
        <>
        <ToastContainer theme='colored'/>
            <div className='container mx-auto'>
                <table className="table table-striped table-hover mytable text-center">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Details</th>
                            <th scope="col" colSpan={2}>Action</th>
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
                                        <h5>{item.product_price}</h5>
                                        <p>{item.product_description}</p>
                                    </td>
                                    <td>
                                        <div className='row w-50 mx-auto'>
                                            <button className='col btn btn-danger' onClick={()=>reduceFromCart(item.product,item.quantity)}>-</button>
                                            <input type={'text'} value={item.quantity} className='col text-center' disabled={true} />
                                            <button className='col btn btn-success' onClick={()=>increaseInCart(item.product, item.quantity, item.count_In_Stock)}>+</button>
                                        </div>
                                    </td><td>
                                        <button className='btn btn-warning' onClick={()=>removeFromCart(item.product, item.product_name)}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                        <td><Link to = '/checkout'><button className='btn btn-warning'>Proceed to Checkout</button></Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Cart