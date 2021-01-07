import React from 'react';

const divStyle = {
	backgroundImage: "url(" + "upload/blog/home2/m5.jpg" + ")",
	backgroundSize: 'cover',
};

const Breadcrumb = () => {
    return (
		<section style ={divStyle} className="page-banner-section">
        <div className="container">
			<br/>
            <h1 style={{fontSize: "70px",textAlign: 'center', color: 'white' }}>About Us</h1><br/>
			<h6 style={{textAlign: 'center', color: 'white'}}>Know the PR company and how it works</h6>
        </div>
        </section>
    );    
};

export default Breadcrumb;