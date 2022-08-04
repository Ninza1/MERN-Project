import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-around " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">MERN Project</NavLink>

     <NavLink to = "/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill" > <i className='fa fa-sign-in me-2'></i> Login</NavLink>
     <NavLink to = "/register" className="btn btn-outline-primary my-2 ms-2 px-4 rounded-pill" > <i className='fa fa-user plus me-2'></i>Register</NavLink>
     <NavLink to = "/dashboard/:id" className="btn btn-outline-primary my-2 ms-2 px-4 rounded-pill" > <i className='fa fa-user plus me-2'></i>Dashboard</NavLink>
   
    </div>
  </nav>
  )
}
