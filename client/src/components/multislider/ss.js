

import React, { useEffect, useState } from 'react'
import './style.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default () => {
    const [render, setRender] = useState(false);
    useEffect(() => {
        setTimeout(()=>{

            setRender(true);
        },5000)
    }, []);
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
    };
    return (
        <div id="team" className="mb-2 container-fluid gtco-testimonials">
            <h2>Our Team</h2>
            {render &&
                <OwlCarousel loop className="slider-items owl-theme" {...options}>
                    <div className="item">
                        <div className="card text-center"><img className="card-img-top" src={require("../../assets/img/SARMAD ALI KHOKAR.JPG")} alt="" />
                            <div className="card-body">
                                <h5>Ronne Galle <br />
                                    <span> Project Manager </span></h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat ” </p>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            }
        </div>
    )
}