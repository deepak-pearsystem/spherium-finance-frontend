import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <section className="home-wrapper">
            <Banner/> 
            <div className="spheriumforyou-wrapper">
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>What Spherium Means For You</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/images/low-fee.svg`} alt="" classNameName="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Low Fees, Swift Transactions.</h5>
                                    <p class="card-text">Spherium is being built on Layer 2 solutions hence reducing cost and increasing the speed of transaction execution. Hence, much better user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/images/assets-work.svg`} alt="" classNameName="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Make All Your Crypto Assets Work.</h5>
                                    <p class="card-text">Spherium App Opens the World of DeFi to You. Stake, Lend, Borrow, Swap on multiple Chains.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/images/your-pockt.svg`} alt="" classNameName="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Lives In Your Pocket.</h5>
                                    <p class="card-text">A single mobile wallet, to interact with multiple blockchains and multiple DeFi products. DeFi on the go.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="oneplateform-wrapper">
                <div className="commonpagetitle">
                    <h2>One Platform for Everything DeFi!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/> standard dummy text ever since the 1500s,</p>
                </div>
                
            </div>
        </section>
    );
};

export default Home;