import React from 'react';
import Header from '../parts/Header';
import Form from '../parts/Form';
import Footer from '../parts/Footer';

const ContactUs = () => {
    return (
    <>
        < Header/>
        <br/>
        <br/>
        <br/>
            <div className="single-post no-sidebar">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="news-post standard-post left-align">
                            <div className="image-holder">
                                <img src="upload/blog/conctact/download.png" alt="" />
                            </div>
                            <h2><p><br/><h1>CALL US</h1>
                            We are open Monday to Friday between 10AM – 6PM (IST). 
                            <br/>For business inquiries Please <br/>call on following numbers:
                            <br/>Ankur: +91-9044829894
                            <br/>Shubham: +91-9455087780
                           </p></h2>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="news-post standard-post left-align">
                            <div className="image-holder">
                                <img src="upload/blog/conctact/download.png" alt="" />
                            </div>
                            <h2><p><br/><h1>EMAIL US</h1>
                            For Business enquiries, <br/>
                            please write a mail to:
                            contactus@padminipr.in
                            </p></h2>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="news-post standard-post left-align">
                            <div className="image-holder"><br/>
                                <img src="upload/blog/conctact/downoad2.png" alt="" />
                            </div>
                            
                            <h2><p><h1>VISIT US</h1>
                            Padmini PR Branding & Advertising 
                            3A/252,<br/> Nawabganj, Kanpur <br/>
                            Uttar Pradesh, Bharat <br/>
                            Pincode-208002.
                            </p></h2>
                        </div>
                    </div>
                </div>
            </div>
                <Form />
            </div>
        <Footer/>
    </>
    );    
};

export default ContactUs;