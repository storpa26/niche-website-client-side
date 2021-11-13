import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
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
                                    <Card.Title>{car?.model}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
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