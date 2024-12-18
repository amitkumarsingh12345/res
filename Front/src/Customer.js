import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const Customer = () => {
    const navigate = useNavigate();
    const [allcustomer, setAllcustomer] = useState();

    const custHandler = async () => {
        const dt = await axios.get(`${window.location.origin}/api/v1/user/find`);
        setAllcustomer(dt?.data);
        console.log(allcustomer);
    }
    useEffect(() => {
        custHandler();
    }, []);

    return (
        <>
            <div className="container-fluid" style={{ marginTop: '100px' }}>
                <div className="row d-flex flex-wrap justify-content-center mx-auto px-auto">
                    <div className="col-12 text-center d-none d-lg-inline-block">
                        <h3>ALL CUSTOMERS</h3>
                    </div>
                    <div className="col-12 col-md-10 ">
                        {
                            allcustomer?.length > 0 ? <>
                                <table class="table table-transparent d-flex flex-wrap table-transparent justify-content-center d-none d-lg-table" style={{ overflow: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Full name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allcustomer?.map((data, index, arr) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.phone}</td>
                                                    <td>{data.address}</td>
                                                    <td><img src="icons8-user-50.png" alt="" style={{ height: '30px', width: '30px' }} /></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>


                                {
                                    allcustomer?.map((data, index) => (
                                        <Card
                                            bg=""
                                            key={index}
                                            text=""
                                            className="my-2 d-block mx-auto d-lg-none w-100 fs-4"
                                        >
                                            <Card.Body>
                                                <Card.Title> S.No </Card.Title>
                                                <Card.Text>
                                                    {index + 1}
                                                </Card.Text>
                                                <Card.Title> Full Name </Card.Title>
                                                <Card.Text>
                                                    {data.name}
                                                </Card.Text>
                                                <Card.Title> Phone </Card.Title>
                                                <Card.Text>
                                                    {data.phone}
                                                </Card.Text>
                                                <Card.Title> Address </Card.Title>
                                                <Card.Text>
                                                    {data.address}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))
                                }

                            </> : <pre><h6></h6>Add customer....</pre>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Customer;