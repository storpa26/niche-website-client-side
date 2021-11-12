import React from 'react';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import WeOffer from '../WeOffer/WeOffer';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <WeOffer></WeOffer>
            <HomeCars></HomeCars>
        </div>
    );
};

export default Homepage;