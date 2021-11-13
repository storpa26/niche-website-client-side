import React from 'react';
import Reviews from '../../Shared/Reviews/Reviews';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import WeOffer from '../WeOffer/WeOffer';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <WeOffer></WeOffer>
            <HomeCars></HomeCars>
            <Reviews></Reviews>
        </div>
    );
};

export default Homepage;