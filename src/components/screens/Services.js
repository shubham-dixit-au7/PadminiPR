import React from 'react';
import Header from "../parts/Header";
import Service from "../parts/Service";
import Footer from "../parts/Footer";
import Sidebar from '../parts/Sidebar';

const Services = () => {
    return (
    <>
        <Header />
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <Service />
                    <Sidebar />   
                </div>
            </div>
        </section>
    
        <Footer />
    </>
    );
};

export default Services;