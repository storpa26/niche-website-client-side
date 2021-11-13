import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://still-tor-45377.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container>
            <h2 className="fw-bold text-center my-5"> Client Reviews</h2>
            <Row xs={1} md={3} className="g-4 my-3">
                {reviews.map(review => {
                    return (
                        <Col key={review._id}>
                            <Card>
                                {/* <img src={car?.imgURL} alt={car.model} /> */}
                                <Card.Body>
                                    <Card.Title className="fs-3 fw-bold">{review?.displayName}</Card.Title>
                                    <Card.Text>
                                        <span className="fw-bold">Email:</span>  {review?.email}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold">Rating:</span> {review?.rating}
                                    </Card.Text>
                                    <Card.Text>
                                        {review?.review}
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

export default Reviews;