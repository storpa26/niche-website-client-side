import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import icon1 from "../../../Images/icon1.png"
import icon2 from "../../../Images/icon2.png"
import icon3 from "../../../Images/icon3.png"
import "./WeOffer.css"
const WeOffer = () => {
    return (
        <Container>
            <h1 className="mt-5 text-center fw-bold mb-4">We Have Mastered The Art Of Detailing</h1>

            <div>
                <Row xs={1} md={3} className="g-4 my-5">
                    <Col>
                        <Card>
                            <img className="weoffer-img" src={icon1} alt="" width="120" height="120" />
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">Professional Services</Card.Title>
                                <Card.Text>
                                    We have a team of 200 engineers from renowed places. They are well known for their work. No Compromise!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img className="weoffer-img" src={icon2} alt="" width="120" height="120" />
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">High-End Equipment</Card.Title>
                                <Card.Text>
                                    Every equipment we use are directly imported from Germany. Have absolutely no doubt about the quality.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img className="weoffer-img" src={icon3} alt="" width="120" height="120" />
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">Competitive Pricing</Card.Title>
                                <Card.Text>
                                    Cars don't come cheap. But with Lancelot, you get to buy fancy cars with the cheapest price available on the market.
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