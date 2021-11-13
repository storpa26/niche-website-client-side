import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://still-tor-45377.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {cars.map(car => {
                    return (
                        <Col key={car._id}>
                            <Card>
                                <img src={car?.imgURL} alt={car.model} />
                                <Card.Body>
                                    <Card.Title className="fs-3 fw-bold">{car?.model}</Card.Title>
                                    <Card.Text>
                                        <span className="fw-bold">Description:</span>  {car?.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold">Seat:</span>  {car?.seat}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold">Rating:</span> {car?.rating}
                                    </Card.Text>
                                    <Card.Text>

                                        <span className="fw-bold">Price:</span> ${car?.price}
                                    </Card.Text>
                                    <Link to={`/shop/${car._id}`}>
                                        <Button variant="success">Buy Now</Button>
                                    </Link>
                                </Card.Body>

                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    );
};

export default Shop;