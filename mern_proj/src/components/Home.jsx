import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
import { Services } from './Services'
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5 text-white">
                        <h1 className="display-4 fw-bolder mb-4 text-center ">
                        This is a little project.
                        </h1>
                        <p className="lead text-center fs-4 mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, molestias. Voluptate molestias ex quos delectus earum eveniet voluptatum tempora perspiciatis non! Dolorum aut consequatur impedit enim. Assumenda sapiente eius nisi delectus. Minima dolores laboriosam facere, ab deleniti impedit! Cupiditate sequi, magnam corrupti accusamus non similique. ipsum dolor sit amet consectetur adipisicing elit. Eos incidunt omnis ab.

                        </p>
                        <div className="buttons d-flex jsutify-content-center">

                            <NavLink to = "/contact" className="btn btn-light me-4 rounded pill px-4 py-2">Get Quote</NavLink>
                            <NavLink  to= "/services" className="btn btn-outline-light  rounded pill px-4 py-2">Our Services</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}
