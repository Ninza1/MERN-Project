import React, { useState } from 'react'
import {NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const [userLog, setUserLog] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        // console.log(e.target)
        const {name,value} = e.target
        // console.log(name, "  value::", value)

        setUserLog ({
            ...userLog, [name] : value
        })
    }
    const navigate = useNavigate()
    const subLogin = (e) => {
        e.preventDefault()
        const {email, password} = userLog;

        if(email && password ){
            
            axios.post('http://localhost:8080/login',userLog)
            .then ((res) =>{
                alert(res.data.message)
                console.log(res)
                if(res.data.message == "Login Successfully"){
                    navigate(`/dashboard/${res.data.data[0]._id}`)
                }
            })
        }
        else {
            alert("Required all field")
           }


    }


    return (

        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center">
                        <h1 className="display-4 fw-bolder">Welcome Back </h1>
                        <p className="lead text-center">Enter your Crendentails to Login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LogIn</h1>
                        <form>
                            {/* {console.log(userLog)}     */}
                            <div className="mb-3">
                                <label className="form-label" >Email </label>
                                <input type="email" name = "email"  onChange = {handleChange} value = {userLog.email} className="form-control"  aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name = "password"  onChange = {handleChange} value = {userLog.password} className="form-control" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"  id="exampleCheck1" />
                                <label className="form-check-label" >Keep Login</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 rounded-pill mt-4" onClick = {subLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
