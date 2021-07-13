import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="logofooterinfo">
                            <img src={`${process.env.PUBLIC_URL}/images/logo-scroll.svg`} alt="" className="img-fluid"/>
                            <p>Spherium is being built on Layer 2 solutions hence reducing cost and increasing the speed of transaction execution.</p>
                        </div>
                        <div class="footersociallist">
                            <Link className="navbar-brand" to="/"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-medium" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                            <Link className="navbar-brand" to="/"><i class="fa fa-reddit" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Quick Link</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/">Home</Link></li>
                                        <li><Link className="navbar-brand" to="/">About</Link></li>
                                        <li><Link className="navbar-brand" to="/">Contact us</Link></li>
                                        <li><Link className="navbar-brand" to="/">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Our products</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/">HyperSwap</Link></li>
                                        <li><Link className="navbar-brand" to="/">SphereComp</Link></li>
                                        <li><Link className="navbar-brand" to="/">Wallet</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Developers</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/">Whitepaper(EN)</Link></li>
                                        <li><Link className="navbar-brand" to="/">Whitepaper(CN)</Link></li>
                                        <li><Link className="navbar-brand" to="/">Governance</Link></li>
                                        <li><Link className="navbar-brand" to="/">Tokenomics</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Legal</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/">Terms of Use</Link></li>
                                        <li><Link className="navbar-brand" to="/">Privace Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footercopyright-mask">
                        <div className="copyrightext">Copyright © 2021 - Spherium</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;