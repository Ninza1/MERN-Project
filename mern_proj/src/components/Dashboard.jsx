import React, { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Dashboard = () => {


    //show / hide State
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(0)

    // for data fetch
    const [data, setData] = useState({
        name: '',
        email: "",
        userData: []
    })
    //for from state
    let obj = {
        title: "",
        img: "",
        discription: ""
    }
    const [addBlog, setAddBlog] = useState(obj)


    //Navitage >>>>>>>>>
    const navigate = useNavigate()

    // fetch data from api
    let id = useParams()
    const fetch = async () => {
        let response = await axios.post("http://localhost:8080/filter", id)
        let result = await response.data
        setData(result)
    }

    useEffect(() => {
        fetch()
    }, [])


    // get input data from post blog
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, "  value::", value)
        setAddBlog({
            ...addBlog, [name]: value
        })
    }

    const postBlog = (e) => {
        e.preventDefault()
        const { title, img, discription } = addBlog;

        if (title && img && discription) {
            axios.put(`http://localhost:8080/addBlog/${data._id}`, addBlog)
                .then((res) => {
                    alert(res.data)
                    fetch()
                    if (res.data = "Posted Succesfully") {
                        setAddBlog(obj)
                    }
                })
        }
        else {
            alert("Required all field")

        }

    }

    // Delete functionaltiy >>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const trash = (i) => {
        const storeArr = []
        const array = data.userData
        console.log(array)
        for (var j = 0; j < array.length; j++) {
            if (j !== i) {

                storeArr.push(array[j])
            }
        }
        axios.put(`http://localhost:8080/addBlog/${data._id}`, storeArr)
            .then((res) => {
                alert(res.data)
                fetch()
            })
    }
    // Show Hide Function; 
    const [edit, setEdit] = useState(obj)

    const editShow = (i) => {
        setShow(!show)
        setEdit(data.userData[i])
        setIndex(i)
    }


    // Update>>>>>>>>>>>>>>>>>>
    const editInputChange = (e) => {
        const { name, value } = e.target
        setEdit({
            ...edit, [name]: value
        })
    }
    const editChange = (event) => {
        event.preventDefault()
        // console.log(x)
        const result = data.userData
        console.log(result)
        const array = []
        for (var k = 0; k < result.length; k++) {
            if (k !== index) {
                array.push(result[k])
                console.log(result[k])
            }
        }
        array.push(edit)
        axios.put(`http://localhost:8080/addBlog/${data._id}`, array)
            .then((res) => {
                alert("Updated")
                fetch()
                setShow(!show)
            })
    }


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center">
                        <h1 className="display-4 fw-bolder">Welcome Back </h1>
                        <h1 className="text-center">{data.name}</h1>
                        <h5 className='mb-4'>{data.email}</h5>

                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Add Blogs Here</h1>
                        <form>
                            <div className="mb-3">
                                <label className="form-label" >Title </label>
                                <input type="text" name="title" onChange={handleChange} value={addBlog.title} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Image </label>
                                <input type="text" name="img" onChange={handleChange} value={addBlog.img} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Discription</label>
                                <textarea type="text" name="discription" onChange={handleChange} value={addBlog.discription} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 rounded-pill mt-4" onClick={postBlog}>Post Blog</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {
                    data.userData ? data.userData.map((item, i) => (
                        <div className="card m-4 h-4" key={i} id="blogCard">
                            <div id="blogCard">
                                <img className="card-img-top w-40 mb-0 " src={item.img} alt="Card image cap" />
                                <h4 className='card-body mb-0'>{item.title}</h4>
                                <div className="card-body mt-0">
                                    <p className="card-text mt-0"> {item.discription}</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between bg-transparent position-absolute bottom-0 w-100' >
                                <span ><i className="fa fa-edit text-primary fs-2" onClick={() => editShow(i)} ></i></span>
                                <i className="fa fa-trash text-danger fs-2 " onClick={() => trash(i)}></i>
                            </div>
                        </div>
                    )) : null
                }
            </div>

            {/* Edit form div >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div >
                {show ?

                    <div className='d-flex align-items-center justify-content-center fixed-top w-100 h-100'>
                        <div className="col-md-6 p-5 border border-primary h-fit-content bg-primary text-white" >
                            <div className="d-flex justify-content-end"><i className="fa fa-times fs-3" aria-hidden="true" onClick={() => setShow(!show)}></i></div>
                            <h1 className="display-6 fw-bolder mb-5">Add Blogs Here</h1>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" >Title </label>
                                    <input type="text" name="title" value={edit.title} onChange={editInputChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Image </label>
                                    <input type="text" name="img" value={edit.img} onChange={editInputChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Discription</label>
                                    <textarea type="text" name="discription" value={edit.discription} onChange={editInputChange} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary border border-white w-100 rounded-pill mt-4" onClick={editChange} >Update Blog</button>
                            </form>
                        </div>
                    </div>
                    : null}
            </div>

        </div>


    )
}
