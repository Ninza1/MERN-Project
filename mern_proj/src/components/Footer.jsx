import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className=" footer text-white">

                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fa fa-facebook-square fs-4"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fa fa-twitter fs-4"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fa fa-google fs-4"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fa fa-instagram fs-4"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fa fa-linkedin fs-4"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fa fa-github fs-4"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fa fa-home me-3 fs-5"></i> Lucknow, UP, India</p>
                                <p>
                                    <i className="fa fa-envelope me-3 fs-5"></i>
                                    info@example.com
                                </p>
                                <p><i className="fa fa-phone me-3 fs-5"></i> + 91 99995 99999</p>
                                <p><i className="fa fa-print me-3 fs-5"></i> + 91 99995 99999</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="">freecoding.com</a>
                </div>

            </footer>

        </div>
    )
}
