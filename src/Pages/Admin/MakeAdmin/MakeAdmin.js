import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })
    }

    return (
        <Container>
            <h2 className="text-center">Make Admin</h2>

            <Form className="w-25 mx-auto" onSubmit={handleAdminSubmit}>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="email" placeholder="Email" type="email" />
                </Form.Group>

                <Button className="my-2" type="submit" variant="success">Make Admin</Button>
                <br />
                {
                    success && <Alert className="text-center" variant="success">
                        Admin Set Succesfully!
                    </Alert>
                }
            </Form>

        </Container>
    );
};

export default MakeAdmin;