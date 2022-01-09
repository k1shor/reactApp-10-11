import React from 'react'
import './products.css'

const Products = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 mt-5 w-75 mx-auto">
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='card-image'>
                            <img src="./image/img1.jfif" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className='text-center'>
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className='card-image'>
                            <img src="./image/img2.jfif" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className='text-center'>
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className='card-image'>
                            <img src="./image/img3.jfif" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className='text-center'>
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className='card-image'>
                            <img src="./image/img4.jfif" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className='text-center'>
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
