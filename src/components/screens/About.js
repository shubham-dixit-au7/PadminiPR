import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../parts/Breadcrumb';
import AboutUs from '../parts/AboutUs';
import Sidebar from '../parts/Sidebar';
import Footer from '../parts/Footer';
import Team from '../parts/Team';


const About = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <section className="blog-section">
                <div className="container">
                    <div className="row">
                        <AboutUs />
                        <Sidebar />   
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );    
};

export default About;