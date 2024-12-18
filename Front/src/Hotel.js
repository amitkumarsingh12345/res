import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "./User";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import Footer from "./Footer";

const Hotel = () => {
    const params = useParams();
    const navigate = useNavigate();
    const admin = localStorage.getItem('admin-login');
    const [hotal, setHotal] = useState([]);
    const [alert, setAlert] = useState(true);

    const getFoodHandler = async () => {
        let result = await axios.get(`${window.location.origin}/api/v4/hotal/find`);
        const id = params.id;
        if (id) {
            result = result?.data?.filter((data) => (((data.name.toLowerCase()).indexOf((id.toLowerCase())) > -1))
            )
            setHotal(result);
        } else {
            setHotal(result?.data);
        }
    }
    useEffect(() => {
        getFoodHandler();
    }, [])

    const removeAlert = () => {
        localStorage.removeItem('action');
        setAlert(false)
    }

    return (
        <>
            {
                JSON.parse(localStorage.getItem('action')) && alert ? <div className="alert alert-primary" role="alert"
                    style={{
                        marginTop: '65px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <span>{JSON.parse(localStorage.getItem('action'))}</span>
                    <span onClick={removeAlert} className="me-2"><i className="fa-solid fa-xmark"></i></span>
                </div> : ""
            }
            <div className="mx-2 mx-md-5 mb-3" style={{ marginTop: '100px' }}>

                <h3 className="text-center">HOTAL LIST</h3>
                {
                    admin ? <Nav.Link href={`/add-hotal`} className="d-inline mx-2 fs-5">
                        <button className="btn btn-dark fw-bold my-1 fs-6 text-light">New +</button>
                    </Nav.Link> : ""

                }
                {
                    hotal.length > 0 ? hotal?.map((data, index) => (
                        <>
                            <div className="card mb-3" key={index}>
                                <img src={`${data.image}`} className="card-img-top " alt="..." style={{ maxHeight: '400px' }} />
                                <div className="card-body">
                                    <h5 className="card-title d-inline-block me-2">Name : </h5>
                                    <p className="card-text d-inline-block">
                                        {data.name}       </p>
                                    <h6></h6>
                                    <h5 className="card-title d-inline-block me-2">Location : </h5>
                                    <p className="card-text d-inline-block">
                                        {data.location}       </p>
                                    <h5></h5>
                                    <h5 className="card-title me-2">Discription: </h5>
                                    <p className="card-text">
                                        {data.discription}        </p>
                                    <p className="card-text text-end">
                                        <small className="text-muted me-3">Last updated 3 mins ago</small>
                                        {
                                            admin ? <small className="text-right">
                                                <Nav.Link href={`/edit-hotal/${data?._id}`} className="d-inline mx-2 fs-5"><i className="fa-solid fa-pen-to-square"></i></Nav.Link>
                                                <Nav.Link href={`/delete-hotal/${data?._id}`} className="d-inline fs-5"><i className="fa-solid fa-trash-can"></i></Nav.Link>
                                            </small> : ""
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className='bg-dark text-light position-fixed end-0 bottom-0 ' style={{
                                borderRadius: '50%',
                                boxShadow: '0px 0px 2px black',
                                zIndex: 1,
                                cursor: 'pointer'
                            }} onClick={() => window.scrollTo(100, 0)}>
                                <i class="fa-solid fa-angle-up p-3 fs-4"></i>
                            </div>
                        </>
                    )) : <h6 className="ms-5">No data ...............................</h6>
                }
            </div>
            <Footer />
        </>
    )
}
export default Hotel;