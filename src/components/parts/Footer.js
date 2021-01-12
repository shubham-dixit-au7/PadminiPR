import React from 'react';

const divStyle = {
	color: 'white',
	backgroundColor: '#000000',
	padding: "20px",
	height: "200px"
  };

const Footer = () => {
    return (
        <footer style = {divStyle}>
			<div className="container">
				<h1>Padmini PR</h1>
				<ul className="social-list">
					<li><a href="https://www.facebook.com/pdmini.prbranding"><i className="fa fa-twitter"></i></a></li>
					<li><a href="https://twitter.com/PdminiPr"><i className="fa fa-facebook"></i></a></li>
					<li><a href="https://www.instagram.com/pdmini_prbranding/"><i className="fa fa-instagram"></i></a></li>
					<li><a href="https://www.facebook.com/pdmini.prbranding"><i className="fa fa-youtube-play"></i></a></li>
					<li><a href="https://www.facebook.com/pdmini.prbranding"><i className="fa fa-linkedin"></i></a></li>
				</ul>
				<p className="copyright-line">© Copyright 2021 - All rights reserved.</p>
				<p className="copyright-line"><a href= "/privacy-policy">Privacy Policy</a> | <a href= "/terms-of-service">Terms of Service</a></p>
                <p class="float-right"><a href="#">Back to top</a></p>
			</div>
		</footer>
    );
};

export default Footer;