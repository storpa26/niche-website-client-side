import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const AddReviews = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://still-tor-45377.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res);
            })
    };
    return (
        <Container>
            <h2 className="fw-bold text-center">Write Your Review</h2>
            <form className="d-flex flex-column w-25 mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your Name" className="my-2" {...register("displayName")} />
                <input placeholder="Your Email" className="my-2" {...register("email")} />
                <input placeholder="Rating" className="my-2" {...register("rating")} />
                <p>Your Reivew</p>
                <textarea {...register("review")}> </textarea>
                <input className="my-2" type="submit" />
            </form>
        </Container>
    );
};

export default AddReviews;