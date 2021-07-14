import React from 'react';

const Whatspherium = () => {
    return (
    <div className="spheriumforyou-wrapper">
        <div className="container">
            <div className="commonpagetitle">
                <h2>What Spherium Means For You</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="cardimageicon">
                            <img src={`${process.env.PUBLIC_URL}/images/low-fee.svg`} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Low Fees, Swift Transactions.</h5>
                            <p className="card-text">Spherium is being built on Layer 2 solutions hence reducing cost and increasing the speed of transaction execution. Hence, much better user experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="cardimageicon">
                            <img src={`${process.env.PUBLIC_URL}/images/assets-work.svg`} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Make All Your Crypto Assets Work.</h5>
                            <p className="card-text">Spherium App Opens the World of DeFi to You. Stake, Lend, Borrow, Swap on multiple Chains.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="cardimageicon">
                            <img src={`${process.env.PUBLIC_URL}/images/your-pockt.svg`} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Lives In Your <br/> Pocket.</h5>
                            <p className="card-text">A single mobile wallet, to interact with multiple blockchains and multiple DeFi products. DeFi on the go.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Whatspherium;