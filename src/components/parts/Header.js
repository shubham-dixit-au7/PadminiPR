import React from 'react';
import NavBar from '../parts/NavBar';

const Header = () => {
    return(
    <header className="clearfix header-style5">
        <div className="logo-place">
            <a className="" href="/">
                <img className ="imge" src="images/logo.jpg" alt="" />
            </a>
        </div>
        
        <NavBar/>
    </header>

    );
};

export default Header;