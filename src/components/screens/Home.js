import React from 'react';
import Header from '../parts/Header';
import Slider from '../parts/Slider';
import Team from '../parts/Team';
import Footer from '../parts/Footer';
import Introduction from '../parts/Introduction';
import Expertise from '../parts/Expertise';

const Home = () => {
    return (
        <>
            <Header />
            <Slider/>
            <Introduction />
            <Team />
            <Expertise />
            <Footer />
        </>
    );    
};

export default Home;