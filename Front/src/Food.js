import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios";
import Footer from "./Footer";

const Food = () => {
    const params = useParams();
    const navigate = useNavigate();
    const auth = localStorage.getItem('auth');
    const visit = localStorage.getItem('visit');
    const admin = localStorage.getItem('admin-login');
    const [alert, setAlert] = useState(true);
    const [food, setFood] = useState([]);
    const [spring, setSpring] = useState(true);

    const getFoodHandler = async () => {
        let result = await axios.get(`${window.location.origin}/api/v3/thali/find`);
        const id = params.id;
        if (id) {
            result = result?.data?.filter((data) => (((data.name.toLowerCase()).indexOf((id.toLowerCase())) > -1))
            )
            setFood(result);
            setSpring(false);
        } else {
            setFood(result?.data);
            setSpring(false);
        }
        console.log(food)
    }
    useEffect(() => {
        getFoodHandler();
        if (!(auth || visit)) {
            navigate('/user');
        }
    }, [])

    const removeAlert = () => {
        localStorage.removeItem('action');
        setAlert(false)
    }
    return (
        <>
            {
                spring ? <div className="spinner-grow d-flex justify-content-center mx-auto" role="status" style={{ marginTop: '100px' }}>
                    <span class="visually-hidden" >Loading...</span>
                </div> :
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

                            <h3 className="text-center">FOOD LIST</h3>
                            {
                                admin ? <Nav.Link href={`/add-thali`} className="d-inline mx-2 fs-5">
                                    <button className="btn btn-dark fw-bold my-1 fs-6 text-light">New +</button>
                                </Nav.Link> : ""

                            }
                            <div className="container-fluid">
                                <div className="row d-flex justify-content-center flex-wrap">
                                    {
                                        food.length > 0 ? food?.map((data, index) => (
                                            <>
                                                <div className="col-12 col-md-6 mb-3 h-25">
                                                    <div className="card" key={index}>
                                                        <img src={`${data.image}`} className="card-img-top " alt="..." style={{ maxHeight: '400px', minHeight: '400px' }} />
                                                        <div className="card-body">
                                                            <h5 className="card-title d-inline-block me-2">Name : </h5>
                                                            <p className="card-text d-inline-block">
                                                                {data.name}       </p>
                                                            <h6></h6>
                                                            <h5 className="card-title d-inline-block me-2">Price : </h5>
                                                            <p className="card-text d-inline-block">
                                                                <i className="fa-solid fa-indian-rupee-sign"></i>  {data.price}       </p>
                                                            <h5></h5>
                                                            <h5 className="card-title d-inline-block me-2">Qty : </h5>
                                                            <p className="card-text d-inline-block">
                                                                {data.qty}       </p>
                                                            <h5 className="card-title me-2">Discription: </h5>
                                                            <p className="card-text">
                                                                {data.discription}        </p>
                                                            <p className="card-text text-end">
                                                                <small className="text-muted me-3">Last updated 3 mins ago</small>
                                                                {
                                                                    admin ? <small className="text-right">
                                                                        <Nav.Link href={`/edit-thali/${data?._id}`} className="d-inline mx-2 fs-5"><i className="fa-solid fa-pen-to-square"></i></Nav.Link>
                                                                        <Nav.Link href={`/delete-thali/${data?._id}`} className="d-inline fs-5"><i className="fa-solid fa-trash-can"></i></Nav.Link>
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
                                                </div>
                                            </>
                                        )) : <h6 className="ms-5">No data ...............................</h6>
                                    }
                                </div>
                            </div>
                        </div>
                        {admin ? "" : <Footer />}
                    </>
            }
        </>
    )
}
export default Food;