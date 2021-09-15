

import React, { useEffect, useState,useRef } from 'react'
import './style.css'
import Loader from "../Loader/Loader"
// import { titleCase } from "title-case";

import LazyImage from '../LazyImage/LazyImage'
// import useIntersectionObserver from "../../hooks/use-intersection-observer";
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"


export default ({renders,setRenders,images}) => {

    useEffect(() => {
        if(renders===images?.length) {
              loader.current.style.display='none'
                display.current.classList.remove("init")
          
            let slider = tns({
                "container": ".slider",
    
    
                "autoplay": true,
                //   autoplayButton:"stopitt",
    
                autoplayButtonOutput: false,
                // rewind:true,
                // gutter:5,
                "autoplayTimeout": 1000,
                controls: false,
               
                navContainer: ".naving",
                // autoWidth: true,
                // navPosition:'bottom',
                "swipeAngle": false,
               autoWidth:true,
                "speed": 400,
                items: 3,
                // autoWidth:true,
                responsive: {
         
                    1000: {
                       
                        gutter:100,
                    }
                },
    
            });
        }
     

    }, [renders]);
    const display=useRef();
    const loader=useRef();
 
   
    return (
        <div id="team" className="mb-2 container-fluid gtco-testimonials">
            <h2>Our Team</h2>
            <>
            <div ref={loader}>
                <Loader />
            </div>
            <div ref={display}  className={`slider init`}>
                {images?.map((image, ind) => {
                    return (
                        <div key={ind} className="item">
                            {/* <img className="card-img-top" src={image} alt="" /> */}
                            <div className="card text-center"><LazyImage set={setRenders} src={image} />
                                <div className="card-body">
                                    <h5>{image.substr(image.lastIndexOf("/")+1).slice(0,-4).toUpperCase()}<br />
                                        {/* <span> Project Manager </span> */}
                                        </h5>
                                    {/* <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat ” </p> */}
                                </div>
                            </div>
                        </div>
                    )
                })



                }
       
            </div>
            <div className="naving">
                {
                    images.map((image,i)=>{
                        return <button key={i}></button>
                    })
                }
               

            </div>
</>



        </div >

    )
}