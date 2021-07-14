import React from 'react';

const Oneplatform = () => {
    return (
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
    );
};

export default Oneplatform;