import React, { Component } from "react";
import Slider from "react-slick";
import './recommendation.css'

export default class Recommendation extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:true,
           
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container slick_container mx-auto mt-5">

                <Slider {...settings}>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img1.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img2.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img1.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img2.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img1.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img2.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img1.jfif" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <div className="slick-img-container">
                            <img src="./image/img2.jfif" alt=""></img>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}