import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import UserDashboard from '../UserDashboard/UserDashboard';
import "./Navigation.css"
const Navigation = () => {

    const { user, logout } = useAuth();
    return (

        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#">Lancelot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <UserDashboard></UserDashboard>


                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-items" to="/home" style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}>Home</NavLink>

                            <NavLink className="nav-items" to="/shop" style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}>
                                Shop
                            </NavLink>
                            <NavLink className="nav-items" to="/reviews" style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}>
                                Reviews
                            </NavLink>
                            <NavLink className="nav-items" to="/contact" style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}>
                                Contact
                            </NavLink>
                            <NavLink className="nav-items" to="/about" style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}>About Us</NavLink>
                        </Nav>
                        <div>
                            {
                                user?.email ?

                                    <Button onClick={logout} className="mx-3" variant="outline-danger">Logout</Button>


                                    :
                                    <NavLink to='/login'>
                                        <Button variant="outline-success">Login</Button>
                                    </NavLink>
                            }

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;