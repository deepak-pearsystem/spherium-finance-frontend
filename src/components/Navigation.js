import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <section className="navigation-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light custom-navigation fixed-top">
            <div className="container">
        
            
            <Link className="navbar-brand" to="/">
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" className="img-fluid nonscroll-logo"/>
                <img src={`${process.env.PUBLIC_URL}/images/logo-scroll.svg`} alt="" className="img-fluid scroll-logo"/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/bannersvg">Hyperswap</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Spherecomp</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Wallet</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Developers
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="#" className="dropdown-item">Dubai</Link>
                            <Link to="#" className="dropdown-item">London</Link>
                            <Link to="#" className="dropdown-item">Hong Kong</Link>
                            <Link to="#" className="dropdown-item">Singapore</Link>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </section>
    );
};

export default Navigation;