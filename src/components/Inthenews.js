import React from 'react';
import { Link } from 'react-router-dom';
const Inthenews = () => {
    
    return (
        <div className="spheriuminews-wrapper">
        <div className="container">
            <div className="commonpagetitle">
                <h2>Spherium in the news</h2>
            </div>
            <div className="carouselinews-mask">
                <div className="owl-carousel owl-theme innews-carousel">
                    <div className="item">
                        <div className="image-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-1.png`} alt="" className="img-fluid"/>
                        </div>
                        <div className="newsblog-wrapper">
                            <p>The Top IDO and Project Launches to Watch in May 2021</p>
                            <Link className="navbar-brand" to="/">Read more<img src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`} alt="" className="img-fluid"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-2.png`} alt="" className="img-fluid"/>
                        </div>
                        <div className="newsblog-wrapper">
                            <p>An Oversubscribed Private Round Sees Spherium Finance Raise a Total of...</p>
                            <Link className="navbar-brand" to="/">Read more<img src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`} alt="" className="img-fluid"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo3.png`} alt="" className="img-fluid"/>
                        </div>
                        <div className="newsblog-wrapper">
                            <p>Spherium Finance Raises $3.3 Million to Build Comprehensive DeFi...</p>
                            <Link className="navbar-brand" to="/">Read more<img src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`} alt="" className="img-fluid"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-4.png`} alt="" className="img-fluid"/>
                        </div>
                        <div className="newsblog-wrapper">
                            <p>Changing the Face of DeFi: Spherium Finance Raises $3.3 Million in Seed and...</p>
                            <Link className="navbar-brand" to="/">Read more<img src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`} alt="" className="img-fluid"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-5.png`} alt="" className="img-fluid"/>
                        </div>
                        <div className="newsblog-wrapper">
                            <p>The Top IDO and Project Launches to Watch in May 2021</p>
                            <Link className="navbar-brand" to="/">Read more<img src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`} alt="" className="img-fluid"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Inthenews;