import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./About.css"
const About = () => {
    return (
        <div className="container">
            <Row className="mx-auto my-5">
                <Col className="my-5" lg="5" xs="12">
                    <div className='border border-1 rounded p-3 my-5'>
                        <h1 className="text-seconday text-center fw-bold">About Us</h1>
                        <p className='text-success p-4'>The Ford Lancelot is a model line of cars that was produced by Ford from the 1960 to 1970 model years. The first compact car marketed by the American Big Three automobile manufacturers (though antedated by the Rambler American), the Lancelot was the third car line introduced by Ford, following the full-sized Ford and the Ford Thunderbird.</p>
                    </div>
                </Col>
                <Col md="7" xs="12">
                    <img className='img-fluid' src="https://image.freepik.com/free-vector/people-exchanging-car-tire_53876-43025.jpg" alt="" width="600" height="500" />

                </Col>
            </Row>
        </div>
    );
};

export default About;