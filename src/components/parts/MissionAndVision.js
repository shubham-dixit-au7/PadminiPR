import React from 'react';

const divStyle = {
    backgroundImage: "url(" + "upload/mission&vision/mission.jpg" + ")",
    backgroundSize: 'cover',
};

const MissionAndVision = () => {
    return (
        <>
        
        <section style ={divStyle} className="page-banner-section">
        <div className="container">
            <h1 style={{fontFamily:"Baskerville Old Face", fontSize: "70px",textAlign: 'center', color: 'black' }}>Mission & Vision</h1>
        </div>
        </section>
        

        <div class="container marketing">
            <br/>
            <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Mission & <span class="text-muted">Vision</span></h2>
        <p class="text-muted">Our young and talented team is trained to observe the changing dynamics of the media environment in a fast developing economy. We encourage intensive grasp of the industry backed by authentic facts and research, integrated networking and comprehensive communication based on inherent knowledge of the specific sector.</p>
        <br/><br/>
        <p class="lead" style={{fontFamily:"Times New Roman", textAlign: 'justify' }}>We aspire to use our inherent strengths as a PR solution provider and intrinsic knowledge of the markets to emerge as a <strong>multi-disciplinary communications</strong> firm <a href= "www.padminipr.com">leading PR agency</a> the way towards global connectivity for our clients. We take pride in cementing relations between people and bringing about change in perception using innate creativity and result oriented strategies. </p>
        <p class="lead"style={{fontFamily:"Times New Roman", textAlign: 'justify' }}>Our <strong>multi domain experience</strong> helps us offer a comprehensive and cutting edge approach to deliver maximum impact in terms of your brand messaging. </p>
        <p class="lead"style={{fontFamily:"Times New Roman", textAlign: 'justify' }}>If you are a <strong>start-up venture</strong>, we make sure we get your business the impetus it deserves. </p>
        <p class="lead"style={{fontFamily:"Times New Roman", textAlign: 'justify' }}>If you are a <strong>budding entrepreneur</strong>, we play the field to let you acquire prominence over other players in the market.</p>
        <p class="lead"style={{fontFamily:"Times New Roman", textAlign: 'justify' }}> Lastly, if your company is already <strong>top notch</strong> in the industry, we help you in scaling your brand to achieve exemplary landmarks as a leader in your space.</p>
      </div>
      
      <div class="col-md-5">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="upload/mission&vision/2.jpg" alt=""></img>
      </div>
    </div>
    
    <hr class="featurette-divider" />
            </div>
        </>
    );    
};

export default MissionAndVision;