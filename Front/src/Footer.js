import React from 'react'
import NavLink from 'react-bootstrap/esm/NavLink';

const Footer = () => {
    return (
        <>
            <footer
                className="text-center text-lg-start text-white bg-dark"
                style={{ backgroundColor: "#ECEFF1" }}
            >

                <section
                    className="d-flex justify-content-between p-4 text-dark bg-light m-0"
                >

                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div className='d-flex'>
                        <NavLink href="https://youtu.be" className="text-dark me-4" target='_blank'>
                            <i className="fa-brands fa-youtube"></i>
                        </NavLink>
                        <NavLink href="https://in.indeed.com/" target='_blank' className="text-dark me-4">
                            <img width="16" height="16" src="https://img.icons8.com/windows/32/indeed.png" alt="indeed" />
                        </NavLink>

                        <NavLink href="https://www.linkedin.com/" target='_blank' className="text-dark me-4">
                            <i className="fab fa-linkedin"></i>
                        </NavLink>
                        <NavLink href="https://www.google.com/" className="text-dark me-4" target='_blank'>
                            <i className="fa-brands fa-chrome"></i>
                        </NavLink>
                        <NavLink href="https://github.com/" className="text-dark me-4" target='_blank'>
                            <i className="fab fa-github"></i>
                        </NavLink>

                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">


                            <div className="col-md-2 col-lg-4 col-xl-4 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">ABOUT METRO DELICIOUS</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    Metro's deli section offers a variety of cold cuts, terrines, rillettes, mousses, and foie gras.
                                    <br />
                                    <p className='d-none d-lg-inline-block'> Metro also has a My Health My Choices program that includes vegetarian recipes. The program's FAQ can help you learn more about the program, its products, and their attributes.</p>
                                </p>

                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="https://github.com/amitkumarsingh12345" className="text-white" target='_blank'>Github</a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/in/amit-kumar-singh-56551b292" target='_blank' className="text-white">Linkedin</a>
                                </p>
                                <p>
                                    <a href="https://in.indeed.com/" target='_blank' className="text-white">Indeed</a>
                                </p>
                                <p>
                                    <a href="https://youtu.be/aztcef6mrPg?si=G5ekR6UKr0893Es1" target='_blank' className="text-white">Youtube</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p><i className="fas fa-home mr-3"></i> George Town, Prayagraj 211002, Uttar Pradesh</p>
                                <p><i className="fas fa-envelope mr-3"></i> metrodelicious@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 94 552 033 17</p>
                                <p><i className="fas fa-print mr-3"></i> + 94 552 033 17</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >

                    <NavLink className="text-white fw-bold" href="#"
                        target='_blank'
                    >METRO DELICIOUS</NavLink>
                </div>

            </footer>

        </>
    )
}

export default Footer