import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import icon1 from "../../../Images/icon1.png"
import icon2 from "../../../Images/icon2.png"
import icon3 from "../../../Images/icon3.png"
const WeOffer = () => {
    return (
        <Container>
            <h1 className="mt-5 text-center fw-bold mb-4">We Have Mastered The Art Of Detailing</h1>

            <div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <img src={icon1} alt="" width="120" height="120" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img src={icon2} alt="" width="120" height="120" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img src={icon3} alt="" width="120" height="120" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default WeOffer;