import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Admin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({
        name: "",
        password: ""
    });

    useEffect(() => {
        localStorage.removeItem('action');
    }, []);

    const userHandler = (event) => {
        const { name, value } = event.target;
        setAdmin((prevAdmin) => ({
            ...prevAdmin,
            [name]: value
        }));
    };

    const loginHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${window.location.origin}/api/v2/admin/login`, admin);
        if (response?.data?.data?.name) {
            localStorage.setItem('action', JSON.stringify(`Welcome '${response?.data?.data?.name.toUpperCase()}', Yor are successfully login`));             
            localStorage.setItem('admin-login', JSON.stringify(response?.data?.data?.name));
            navigate('/');
        }
    };

    return (
        <>
            <div className=' container-fluid p-3 p-md-4' style={{
                borderRadius: '5px',
                marginTop: '100px',
                maxWidth: '500px'
            }}>
                <div className='d-flex justify-content-center'>
                    <img src="/metro-logo.jpg" alt="..." style={{ maxHeight: '200px', maxWidth: '200px' }} />
                </div>
                <div className='d-flex justify-content-center'>
                    <span>Admin Panel</span>
                </div>
                <div className='container w-sm-75 w-lg-50 p-3' style={{ boxShadow: '0px 0px 2px warning' }}>
                    <form onSubmit={loginHandler}>
                        <div className='row'>
                            <div className="col-12">
                                <label htmlFor="yourName" className="form-label">User name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={admin.name}
                                    onChange={userHandler}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-12">
                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={admin.password}
                                    onChange={userHandler}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12'>
                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="dark">
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Admin;
