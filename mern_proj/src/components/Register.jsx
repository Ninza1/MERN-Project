import React,{useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

export const Register = () => {  
    const [user, setUser] = useState({
        name:"",
        email: "",
        password: "",
        policy: false,
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setUser(
            {...user, [name]: value}
            
        )
      
    }   
    
     const checkOut = (e)=>{
        const name = e.target.name
        const value = e.target.checked
        // console.log(name,value)
        setUser({
            ...user, [name] : value
        })
     }
    
     //save user and navigating 

     const switchtoLog = useNavigate();

     const addUser  = (event) =>{
        event.preventDefault()
       const {name, email, password,policy } = user
        
       if(name && email && password && policy ===true ) {
        axios.post('http://localhost:8080/register',user)
        .then((res)=>{
            // console.log(res.data)
            alert(res.data)
            if(res.data === "😊Sussessfull Registered"){
                switchtoLog( "/login") 
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
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello, Dear </h1>
                        <p className="lead text-center">Enter your Details </p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Register</h1>
                        <form>
                        {console.log(user)}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Username</label>
                                <input type="text" name = "name" value = {user.name} onChange={handleChange} className="form-control"  required id="name"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Email</label>
                                <input type="email" name= "email" value = {user.email} onChange={handleChange}   className="form-control" id="emil" required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name = "password" value = {user.password} onChange={handleChange}  className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox"onChange={checkOut} value = {user.policy} name = "policy"  className="form-check-input" id="exampleCheck1"  />
                                    <label className="form-check-label" htmlFor="exampleCheck1" required> I Accept Our Provicy Policy</label>
                            </div>
                            
                            <button type="submit" onClick={addUser} className="btn btn-primary w-100 mt-4 rounded-pill" >Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

