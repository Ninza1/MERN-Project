import axios from 'axios'
import React,{useState} from 'react'

export const Contact = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target 

        setMessage ({
            ...message, [name] : value
        })
    }

    const sendMessage = (event) =>{
        event.preventDefault()

        const {name, email, message} = message
        if(name && email && message) {
            axios.post('http://localhost:8080/register',message)
            .then((res) =>{
                alert(res.data)
            })
        }
    }

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className='display-6 text-center mb-4'>Have some <b>Questions?</b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contact.png" className="col-10" alt="" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <form>
                                    <div className="form-group">
                                        {/* for="exampleFormControlInput1" can put it at label element */}
                                        <label >Name</label>
                                        <input type="text" name = "name" value = {message.name} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Type name here" />
                                    </div>
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" name = "email" value = {message.value} onChange = {handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>


                                    <div className="form-group">
                                        <label>Your Message</label>
                                        <textarea className="form-control" name = "message" value = {message.value} onChange = {handleChange} id="exampleFormControlTextarea1" placeholder='Type your text here' rows="5"></textarea>
                                    </div>
                                    <button type='submit' className='btn btn-outline-primary rounded-pill px-4 mt-2' onClick={sendMessage} >Send Message <i className='fa fa-paper-plane ms-2'></i> </button>
                                </form>
                            </form>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}
