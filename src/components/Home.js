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
                <div className="accordion-wrapper">
                    <div className="accordion" id="accordionExample">
                        <div className="card custom-accordion-one">
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-9 col-lg-9">
                                            <div className="accordion-info-left">
                                                <h2>HyperSwap</h2>
                                                <p>A Powerful Mobile AMM Protocol with a fair rewarding mechanism for liquidity providers and traders alike.</p>
                                                <ul>
                                                    <li>Mobile First</li>
                                                    <li>Cross-Chain Swaps</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <div className="accordion-image-right">
                                                <img src={`${process.env.PUBLIC_URL}/images/acc-one.svg`} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    01
                                    </button>
                                </h2>
                            </div>
                        </div>
                        <div className="backgroundcotwo">
                        <div className="card custom-accordion-two">
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-9 col-lg-9">
                                            <div className="accordion-info-left">
                                                <h2>HyperSwap</h2>
                                                <p>A Powerful Mobile AMM Protocol with a fair rewarding mechanism for liquidity providers and traders alike.</p>
                                                <ul>
                                                    <li>Mobile First</li>
                                                    <li>Cross-Chain Swaps</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <div className="accordion-image-right">
                                                <img src={`${process.env.PUBLIC_URL}/images/acc-two.svg`} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    02
                                    </button>
                                </h2>
                            </div>
                        </div>
                        </div>
                        <div className="backgroundcothree">
                        <div className="card custom-accordion-three">
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-9 col-lg-9">
                                            <div className="accordion-info-left">
                                                <h2>HyperSwap</h2>
                                                <p>A Powerful Mobile AMM Protocol with a fair rewarding mechanism for liquidity providers and traders alike.</p>
                                                <ul>
                                                    <li>Mobile First</li>
                                                    <li>Cross-Chain Swaps</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <div className="accordion-image-right">
                                                <img src={`${process.env.PUBLIC_URL}/images/acc-three.svg`} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    03
                                    </button>
                                </h2>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="supportedwall-wrapper">
                <div className="container">
                    <div className="tabcontainer">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Supported Wallets</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Spherium Built On</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="tabinnerinfo-mask">
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Wallet-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Porties-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Metama-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Coinbase-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Fortmatic-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="tabinnerinfo-mask">
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Metama-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Wallet-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Coinbase-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Fortmatic-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="supportiles">
                                        <img src={`${process.env.PUBLIC_URL}/images/Porties-logo.svg`} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wordclassinvestor-wrapper">
                <div className="container">   
                    <div className="commonpagetitle">
                        <h2>Backed by World Class Investors</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/wc-logo-one.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/1-6.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/b396353dd11d34d160cef603db9bec36_244x139.42857142857.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Blockpact.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/DCI-brand-RGB-transparant@2x-1000x500.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1512.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1513.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1514.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1515.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Image 4.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Layer 2.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Layer 245 (1).svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>


                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/logos.4410a5e8.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/NoPath - Copy.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/NoPath.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/petrock.9913435.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/Rarestone-Capital-Logo-Centred.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <div className="wordinvestcell">
                                <img src={`${process.env.PUBLIC_URL}/images/WOLFEDGE-Capital-web.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auditedverified-wrapper">
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>Audited and Verified</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1518.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/quill-logo-blue.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 15976.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 15975.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 15976.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1518.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                    </div>
                    <div className="commonpagetitle">
                        <h2>Partners</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1525.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/tild6336-3266-4637-b533-393330393932__dorahacks_black.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Group 1525.svg`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;