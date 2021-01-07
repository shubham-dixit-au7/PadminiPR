import React from'react';

const divStyle = {
  backgroundImage: "url(" + "upload/blog/home2/m5.jpg" + ")",
  backgroundSize: 'cover',
  };

const Team = () => {
    return (
    <>
    <section style ={divStyle} className="page-banner-section">
        <div className="container">
            <h1 style={{fontSize: "70px",textAlign: 'center', color: 'white' }}>Team</h1>
        </div>
    </section>
    <div className="container marketing ">
        <br/>
    <div className="row">
      <div className="col-lg-4">
        {/* <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="upload/blog/home2/t1.jpg" alt=""></img> */}
        <br/><br/>
        <h2><b>Vidhi Shukla</b></h2>
        <span>(Co-Founder)</span>
        <p>She is holding a 4yrs of experience, having led campaigns with impactful business strategy for the Organization.</p>
      </div>
      <div className="col-lg-4">
      {/* <img className="bd-placeholder-img rounded-ell" width="140" height="140" src="upload/blog/home2/t1.jpg" alt=""></img> */} 
        <br/><br/>
        <h2><b>Aditya Pratap Singh</b></h2>
        <span>(Founder)</span>
        <p>MA(J&MC),AUH.<br/>Diploma in Business Management, BirkBeck, Amity University In London.<br/>He was previously into journalism. He has successfully implemented media strategies across traditional and digital channels.</p>
      </div>
      <div className="col-lg-4">
      {/* <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="upload/blog/home2/t1.jpg" alt=""></img> */}
        <br/><br/>
        <h2><b>Ankur Pandey</b></h2>
        <span>(Co-Founder)</span>
        <p>Self-driven and motivated Entrepreneur with a proven track record of success and extraordinary achievements in building company from simple idea to successful business.</p>
      </div>
    </div>
    </div>
    </>
    );
};

export default Team;