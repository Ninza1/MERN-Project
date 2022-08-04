import React from 'react'

export const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about2.jpg" className='col-12' alt="" />

                    </div>
                    <div className="col-md-6">
                        <h3 className='fs-5 mb-0'>About Us</h3>
                        <h2 className='display-6 mb-2'>Who <b>We</b> are</h2>
                        <hr className='w-50'/>
                        <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique 
                            veniam beatae excepturi maiores reprehenderit necessitatibus. Similique ipsam blanditiis qui velit iste maxime quibusdam beatae non quos commodi, rem sint voluptate animi, recusandae consequatur voluptatibus sed tempore officiis facere earum sit impedit quis? Eaque deserunt similique, totam ipsum cumque tempora laboriosam.</p>
                            <button className='btn btn-primary rounded-pill px-4 py-2'>Get Start</button>
                            <button className='btn btn-outline-primary rounded-pill px-4 ms-2'>Contact Us</button>
                           
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}
