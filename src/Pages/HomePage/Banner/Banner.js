import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from "../../../Images/banner-img.png"
import "./Banner.css"
const Banner = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-5" xs={12} md={6}>
                    <h1 className="top-heading">Welcome to <br /> Car Buying <br /> Made Simple</h1>
                    <p>Get more value in the affordable seven-passenger <br /> Chrysler Pacifica Hybrid. The exceptional and</p>
                    <Link to="/shop">
                        <Button>Shop Now</Button>
                    </Link>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid" src={banner} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;