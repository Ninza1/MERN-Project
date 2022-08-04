import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export const Blog = () => {
    const [blog, setBlog] = useState([])
    const [value, setValue] = useState()

    const fetchData = async () => {

        let data = await axios.get("http://localhost:8080")
        //  console.log(data)
        setBlog(data.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    const showBlog = (index, i) => {
        const value = blog[index].userData[i]
        setValue(
            <div className="card m-2 h-50 overflow-auto" style={{width:50+"vw",position: "sticky",top:"0px"}}  >
                <div >
                    <img className="card-img-top mb-0 " src={value.img} style={{height:"50vh"}} alt="Card image cap" />
                    <h4 className='card-body mb-0'>{value.title}</h4>
                    <div className="card-body mt-0">
                        <p className="card-text mt-0">{value.discription}</p>
                    </div>
                </div>
            </div>
        )


    }

    return (
        <div className='d-flex'>
            <div className='d-flex flex-wrap'>
            {
                blog.map((e, index) => {
                    if (e.userData.length >= 1) {
                        return e.userData.map((item, i) => (
                            <div className="card m-4 h-4" key={i} id="blogCard">
                                <div id="blogCard">
                                    <img className="card-img-top w-40 mb-0 " src={item.img} alt="Card image cap" />
                                    <h4 className='card-body mb-0'>{item.title}</h4>
                                    <div className="card-body mt-0">
                                        <p className="card-text mt-0">{item.discription}</p>
                                    </div>
                                </div>
                                <span className='text-primary' onClick={() => showBlog(index, i)}>Read more...</span>
                            </div>
                        ))
                    }
                })
            }
            </div>
            <div style={{width:"fit-content"}}>
                {value}
            </div>
        </div>

    )
}


