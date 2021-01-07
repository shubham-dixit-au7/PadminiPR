import React from 'react';

const Slider = () => {
    return(
		<section className="top-slider-section fullscreen-slider">
        <div className="top-slider-box text-center">
            <div className="owl-wrapper">
                <div className="owl-carousel" data-num="1">
                    <div className="item">
                        <div className="news-post image-post">
                            <img src="upload/background/slider1.jpg" alt="" />
                            <div className="hover-post">
                                <div><a className="category-link" href="#">Media RELATIONS</a></div>
                                <h2><a href="#" >Be present at all the right places. </a></h2>
                                <a className="white-button" href="/coming-soon">Start Today!</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="news-post image-post">
                            <img src="upload/background/Slider2.jpg" alt="" />
                            <div className="hover-post">
                                <div><a className="category-link" href="#">Customer ENGAGEMENT</a></div>
                                <h2><a href="#">Reach Out to Your Customers.</a></h2>
                                <a className="white-button" href="/coming-soon">Know More</a>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </section>
    );
};

export default Slider;