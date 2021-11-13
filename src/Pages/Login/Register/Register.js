import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState([]);
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Password did not match!');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }
    return (
        <Container>
            {!isLoading && <Form className="w-25 mx-auto" onSubmit={handleRegisterSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" onBlur={handleOnBlur} type="text" placeholder="Enter your name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onBlur={handleOnBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="password2" onBlur={handleOnBlur} type="password" placeholder="Re-type Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <NavLink style={{ textDecoration: 'none' }} to="/login">Already Registerd? Please click here to login</NavLink>
            </Form>}
            {
                isLoading && <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>
            }
            {
                user?.email && <Alert variant="success">
                    Succesfully Registered! <NavLink to="/login">Click Here</NavLink> to login.
                </Alert>
            }
            {
                authError && <Alert variant="danger">
                    {authError}
                </Alert>
            }
        </Container>
    );
};

export default Register;