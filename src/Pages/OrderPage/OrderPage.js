
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderPage = () => {
    const { user } = useAuth();
    const { carId } = useParams();
    const [singleItem, setSingleItem] = useState([]);

    useEffect(() => {
        fetch(`https://still-tor-45377.herokuapp.com/cars/${carId}`)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [carId])

    //delete the existing id 
    delete singleItem._id;
    const initialInfo = { ...singleItem }
    const [order, setOrder] = useState(initialInfo);


    const handleOrderSubmit = e => {
        e.preventDefault();
        const orderInfo = {
            ...singleItem,
            ...order,
            name: user.displayName,
            email: user.email
        }
        console.log(orderInfo);
        axios.post('https://still-tor-45377.herokuapp.com/orders', orderInfo)
            .then(res => {
                // console.log(res);
            })
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...order };
        newInfo[field] = value;
        setOrder(newInfo);
    }
    console.log(order);

    return (
        <Container>
            <Row>
                <Col className="mx-auto" xs={12} md={6}>
                    <img src={singleItem.imgURL} alt={singleItem.model} />
                    <p>Lorem</p>
                </Col>
                <Col className="mx-auto" xs={12} md={6}>
                    <Col className="mx-auto" lg={6} xs={12}>
                        <Form onSubmit={handleOrderSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control disabled name="name" type="name" defaultValue={user.displayName} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control disabled onBlur={handleOnBlur} name="email" type="email" defaultValue={user.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onBlur={handleOnBlur} name="address" placeholder="e.g. 1234 Main St" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control onBlur={handleOnBlur} name="phone" placeholder="e.g. 01712039802" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;