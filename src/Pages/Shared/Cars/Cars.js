import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Cars = () => {
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
                                    <Card.Title>{car?.model}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default Cars;