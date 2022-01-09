
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import First from "./Pages/First";
import Second from "./Pages/Second"
import App from "./App"
import Home from './Pages/Home';

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/f' element={<First />} />
                <Route path="/s" element={<Second />} />
                <Route path='/' element={<App/>}/> */}


                <Route path="/" element={<Home/>} />
            </Routes>

        </Router>
    )
}


export default MyRoutes
