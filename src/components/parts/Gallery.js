import React from "react";

const divStyle = {
    backgroundImage: "url(" + "upload/blog/home2/m5.jpg" + ")",
    backgroundSize: 'cover',
};

const Gallery = () => {
    return (
    <>
    <section style ={divStyle} className="page-banner-section">
        <div className="container">
            <h1 style={{fontFamily: "Baskerville Old Face", fontSize: "70px",textAlign: 'center', color: 'black' }}>MEDIA</h1>
        </div>
    </section>
    <br /><br /><br /> 

    <div className="container marketing ">
        <br/>
        <div className="row">
            <div className="col-lg-4">
                <a href="upload/media/images/1.jpeg">
                    <img className="bd-placeholder-img rounded-circle" width="340" height="340" src="upload/media/images/1.jpeg" alt=""></img> 
                </a>
            </div>
            <div className="col-lg-4">
                <a href="upload/media/images/2.jpeg">
                    <img className="bd-placeholder-img rounded-circle" width="340" height="340" src="upload/media/images/2.jpeg" alt=""></img> 
                </a>
            </div>
            <div className="col-lg-4">
            <a href="upload/media/images/3.jpeg">
                    <img className="bd-placeholder-img rounded-circle" width="340" height="340" src="upload/media/images/3.jpeg" alt=""></img> 
                </a>
            </div>
            <div className="col-lg-4">
            <a href="upload/media/images/4.jpeg">
                    <img className="bd-placeholder-img rounded-circle" width="340" height="340" src="upload/media/images/4.jpeg" alt=""></img> 
                </a>
            </div>
            <div className="col-lg-4">
                <a href="upload/media/images/5.jpeg">
                    <img className="bd-placeholder-img rounded-circle" width="340" height="340" src="upload/media/images/5.jpeg" alt=""></img> 
                </a>
            </div>
            <div className="col-lg-4">
                <a href="upload/media/images/6.jpeg">   
                    <img className="bd-placeholder-img rounded-circle" width="340" height="340" src="upload/media/images/6.jpeg" alt=""></img> 
                </a>
            </div>
        </div>
    </div>
    </>
    );
};

export default Gallery;
