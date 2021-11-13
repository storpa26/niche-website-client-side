import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...products };
        newProduct[field] = value;
        setProducts(newProduct);
    }

    const handleProductSubmit = e => {
        e.preventDefault();
        // console.log(products);
        axios.post('https://still-tor-45377.herokuapp.com/cars', products)
            .then(res => console.log(res))

    }

    return (
        <Container>
            {!isLoading && <Form className="w-25 mx-auto" onSubmit={handleProductSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Car Model</Form.Label>
                    <Form.Control name="model" onBlur={handleOnBlur} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" onBlur={handleOnBlur} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Seat</Form.Label>
                    <Form.Control name="seat" onBlur={handleOnBlur} type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name="rating" onBlur={handleOnBlur} type="number" step="any" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" onBlur={handleOnBlur} type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control name="imgURL" onBlur={handleOnBlur} type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Product
                </Button>
                <br />
            </Form>}
            {
                isLoading && <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>
            }


        </Container>
    );
};

export default AddProduct;