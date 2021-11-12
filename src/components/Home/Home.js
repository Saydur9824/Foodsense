import React from 'react';
import Always from '../Always/Always';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Spcial from '../Spcial/Spcial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Always></Always>
            <Spcial></Spcial>
        </div>
    );
};

export default Home;