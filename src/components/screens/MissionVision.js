import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import MissionAndVision from '../parts/MissionAndVision';


const MissionVision = () => {
    return(
        <>
            <Header />
            <section className="blog-section">

                    <MissionAndVision /> 

            </section>
            <Footer />
        </>
    );    
};

export default MissionVision;