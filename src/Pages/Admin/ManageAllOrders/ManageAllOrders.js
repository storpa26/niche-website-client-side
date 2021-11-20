import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://still-tor-45377.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])



    const handleStatusChange = (id) => {
        let modifiedOrders = [];
        allOrders.forEach(order => {
            if (order._id === id) {
                order.status = 'Approved';
            }
            modifiedOrders.push(order)
        })
        setAllOrders(modifiedOrders);

        const modifiedStatus = { id }

        axios.patch('http://localhost:5000/updateOrderStatus', modifiedStatus)
    }

    return (
        <Container>
            <h1 className="fw-bold text-center my-5">Orders Places By All The Users</h1>
            {
                isLoading ? <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div> :
                    <Table>
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Car Model</th>
                                <th>Shipping Address</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        {
                            allOrders?.map(order => {
                                return (
                                    <tbody key={order._id} style={{ fontWeight: "500" }}>
                                        <tr>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.model}</td>
                                            <td>{order.address}</td>
                                            <td>{order.status}</td>
                                            <td> <Button onClick={() => handleStatusChange(order._id)} variant="danger">Update</Button> </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </Table>}
        </Container>
    );
};

export default ManageAllOrders;