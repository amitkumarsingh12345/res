import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState();
    const location = useLocation();
    console.log(location.pathname)
    const navigate = useNavigate();
    const admin = localStorage.getItem('admin-login');

    const logout = () => {
        localStorage.removeItem('admin-login');
        navigate('/');
    }

    return (
        <>
            {['sm'].map((expand) => (
                <Navbar bg="primary" data-bs-theme="dark" key={expand} expand={expand} className="bg-body-tertiary px-0 mx-0 mb-3 position-fixed top-0 w-100"
                    style={{ zIndex: 1 }}>
                    <Container fluid>
                        <Nav.Link href="/logo" className="d-none d-md-inline-block">
                            <img src="./metro-logo.jpg" alt="" className="me-3" style={{ maxHeight: '70px', maxWidth: '70px' }} />
                        </Nav.Link>

                        <Navbar.Brand href="#" className="fw-bold fs-4"
                            style={{ letterSpacing: '1px', fontFamily: 'serif', color: 'silver' }}>METRO DELICIOUS</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {admin ? <>
                                        <Nav.Link href="/">Food</Nav.Link>
                                        <Nav.Link href="/hotal">Hotal</Nav.Link>
                                        <Nav.Link href="/customer">Customer</Nav.Link>
                                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                                    </> : <>
                                        <Nav.Link href="/">Food</Nav.Link>
                                        {/* <Nav.Link href="/hotal">Hotal</Nav.Link> */}
                                        <Nav.Link href="/about">About</Nav.Link></>}
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <Nav.Link href={`/${search}`}>
                                        <Button variant="outline-secondary">Search</Button>
                                    </Nav.Link>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    )
}
export default Header;