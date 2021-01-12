import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-lg-4">
			<div className="sidebar">
				<div className="widget social-widget">
					<ul className="social-list">
						<li>
							<a href="https://www.facebook.com/pdmini.prbranding">
    							<i className="fa fa-facebook"></i>
								facebook
								<span>25 likes</span>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/PdminiPr">
								<i className="fa fa-twitter"></i>
								twitter
								<span>31 followers</span>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/pdmini_prbranding/">
								<i className="fa fa-instagram"></i>
								instagram
								<span>28 followers</span>
						    </a>
						</li>
					</ul>
				</div>

				<div className="widget category-widget">
					<h2>Categories</h2>
					<ul className="category-list">
				    	<li>
							<a href="/mission-vision">
					    		Mission & Vision <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
							</a>
						</li>
						<li>
							<a href="/coming-soon">
								Rewards & Recognition <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
							</a>
						</li>
						<li>
							<a href="/coming-soon">
								Careers <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
							</a>
						</li>
					</ul>
				</div>

				<div className="widget instagram-widget">
					<h2>Our Latest Instagram Posts</h2>
					<ul className="insta-list">
						<li><a href="https://www.instagram.com/p/CJvT8YBFPmt/"><img src="upload/instagram/1.jpg" alt="" /></a></li>
						<li><a href="https://www.instagram.com/p/CJvT4G0lJsX/"><img src="upload/instagram/2.jpg" alt="" /></a></li>
						<li><a href="https://www.instagram.com/p/CJvT6VnlMb3/"><img src="upload/instagram/3.jpg" alt="" /></a></li>
					</ul>
				</div>
			</div>
		</div>
    );    
};

export default Sidebar;