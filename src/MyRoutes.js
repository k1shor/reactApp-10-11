
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

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/f' element={<First />} />
                <Route path="/s" element={<Second />} />
                <Route path='/' element={<App/>}/> */}


                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/email/confirmation/:token' element={<Confirm />} />

                <Route path='/' element={<AdminRoute />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />} />


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

        </Router>
    )
}


export default MyRoutes
