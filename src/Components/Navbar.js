import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='row py-2 bg-dark'>
                <div className='col-md-3'>
                    <Link className="navbar-brand fs-3 text-warning text-end" to="#" >My Store</Link>
                </div>
                <div className='col-md-6'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
                <div className='col-md-3 d-flex justify-content-evenly'>
                    <i className="bi bi-person-plus-fill fs-3 text-warning"></i>
                    <Link to='/signin'><i className="bi bi-box-arrow-in-right fs-3 text-warning"></i></Link>
                    <i className="bi bi-cart fs-3 text-warning"></i>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary fs-5 ">
                <div className="container-fluid position-relative">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="#">Deals</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="#">Customer Service</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="">Disabled</Link>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
