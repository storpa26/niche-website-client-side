import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user, isLoading } = useAuth();
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch(`https://still-tor-45377.herokuapp.com/filteredorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleDeleteOrder = id => {

        window.confirm('Are you sure you want to cancel this order?');
        fetch(`https://still-tor-45377.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully!');
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
    }

    return (
        <Container>
            <h1 className="fw-bold text-center my-5">Your Orders</h1>
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
                            orders?.map(order => {
                                return (
                                    <tbody key={order._id} style={{ fontWeight: "500" }}>
                                        <tr>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.model}</td>
                                            <td>{order.address}</td>
                                            <td>{order.status}</td>
                                            <td> <Button onClick={() => handleDeleteOrder(order._id)} variant="danger">Cancel</Button> </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </Table>}
        </Container>
    );
};

export default MyOrders;