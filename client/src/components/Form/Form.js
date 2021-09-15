
import React, { useState } from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css'
export default () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            subject: "",
            email:"",
            message:""
        },
        onSubmit: async(values)=>{
            const form = document.getElementById("contact-form"); 
            let mail = new FormData(form);
            await fetch('/email',{method:'post',body:mail}).then(async (response) => {
                response= await response.text();
               
                setRes(response)
         
                return response;
              }).catch((err)=>{
                  console.log(err)
                  setRes(err)
                  return err
              })
        },
         validationSchema: Yup.object().shape({
            name: Yup.string().required('This field is required.'), 
            message: Yup.string().required('This field is required.'), 
            email: Yup.string().email().required('This field is required.'),
            subject:Yup.string().required('This field is required.'),
            phone_no:Yup.string().required('This field is required.'), 
        })
    });

    const [response,setRes]=useState("");

    // const handleSubmit=async (e)=>{
    //     e.preventDefault()
    //     const form = document.getElementById("contact-form"); 
    //     let mail = new FormData(form);
    //     await fetch('/email',{method:'post',body:mail}).then(async (response) => {
    //         response= await response.text();
           
    //         setRes(response)
     
    //         return response;
    //       }).catch((err)=>{
    //           console.log(err)
    //           setRes(err)
    //           return err
    //       })
    // }
    const content=(<>
       <h1>
                Contact Us
            </h1>
       
        <form onSubmit={formik.handleSubmit} id="contact-form" action="#">
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input onChange={formik.handleChange} type="email" className="form-control" placeholder="Enter email" id="email" name="email" />
                {
                    formik.errors.email? 
                        <div style={{color: "red"}}>{formik.errors.email}</div>:
                        null
                }
            </div>
            <div className="form-group">
            <label htmlFor="name">Name: </label>
                <input onChange={formik.handleChange} type="text" className="form-control" placeholder="Enter name" id="name" name="name" />
                {
                    formik.errors.name? 
                        <div style={{color: "red"}}>{formik.errors.name}</div>:
                        null
                }
            </div>
            <div className="form-group">
            <label  htmlFor="subject">Subject: </label>
                <input onChange={formik.handleChange} type="text" className="form-control" placeholder="Enter subject" id="subject" name="subject" />
                {
                    formik.errors.subject? 
                        <div style={{color: "red"}}>{formik.errors.subject}</div>:
                        null
                }
            </div>
            <div className="form-group">
            <label  htmlFor="phone_no">Phone Number: </label>
                <input onChange={formik.handleChange} type="text" className="form-control" placeholder="Enter Phone Number" id="phone_no" name="phone_no" />
                {
                    formik.errors.phone_no? 
                        <div style={{color: "red"}}>{formik.errors.phone_no}</div>:
                        null
                }
            </div>
            <div className="form-group">
            <label htmlFor="message">Message: </label>
            <textarea onChange={formik.handleChange} className="form-control" rows="5" id="message" name="message"></textarea>
            {
                    formik.errors.message? 
                        <div style={{color: "red"}}>{formik.errors.message}</div>:
                        null
                }
            </div>
    
            <button type="submit" className="btn gdcolor btn-primary">Submit</button>
          
        </form>
    </>)
    return (
        <div className="browncolor container p-5 mb-2" id="contact-us">
         
 
                {response?<h3>{response}</h3>:content}
           
        </div>
    )
}