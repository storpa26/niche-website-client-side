import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://still-tor-45377.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
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