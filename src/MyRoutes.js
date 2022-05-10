
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import First from "./Pages/First";
import Second from "./Pages/Second"
import App from "./App"
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart'
import Data from './hooks/Data';
import FetchData from './hooks/FetchData';
import Main from './hooks/Main';
import Confirm from './Pages/Confirm';
import AdminDashboard from './Pages/AdminDashboard';
import AdminRoute from './Components/Routes/AdminRoute';
import PrivateRoute from './Components/Routes/PrivateRoute';
import UserDashboard from './Pages/UserDashboard';
import Category from './Components/category/Category';
import CategoryUpdate from './Components/category/CategoryUpdate';
import Addproduct from './Components/product/Addproduct';
import Products_in_Admin_page from './Components/product/Products_in_Admin_page';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Product_Details from './Components/product/Product_Details';
import Deals from './Pages/Deals';
import ForgetPassword from './Pages/ForgetPassword';

const MyRoutes = () => {
    return (
    
        <Router>
        <Navbar/>
            <Routes>
                {/* <Route path='/f' element={<First />} />
                <Route path="/s" element={<Second />} />
                <Route path='/' element={<App/>}/> */}


                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/email/confirmation/:token' element={<Confirm />} />
                <Route path= '/product/details/:id' element={<Product_Details/>}/>

                <Route path='/deals' element={<Deals/>}/>

                <Route path='/forgetpassword' element={<ForgetPassword/>}/>

                <Route path='/' element={<AdminRoute />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    <Route path='/admin/category' element={<Category/>}/>
                    <Route path='/admin/categoryupdate/:id' element={<CategoryUpdate/>}/>
                    <Route path='/admin/product/add' element={<Addproduct/>}/>
                    <Route path='/admin/products' element={<Products_in_Admin_page/>}/>



                </Route>

                <Route path='/' element={<PrivateRoute />}>
                    <Route path='/user/profile' element={<UserDashboard />} />
                    <Route path='/cart' element={<Cart />} />


                </Route>



                {/* hooks */}
                <Route path='/showdata' element={<Data />} />
                <Route path='/fetchdata' element={<FetchData />} />
                <Route path="/text" element={<Main />} />
            </Routes>

        <Footer/>
        </Router>
        
    )
}


export default MyRoutes
