import React from 'react';

const Partners = () => {
    return (
        <div className="auditedverified-wrapper">
            <div className="container">
                <div className="commonpagetitle">
                    <h2>Audited and Verified</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="auditedverified-cell">
                            <img src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-1.png`} alt="" className="img-fluid"/> 
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="auditedverified-cell">
                            <img src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-2.png`} alt="" className="img-fluid"/> 
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="auditedverified-cell">
                            <img src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-3.png`} alt="" className="img-fluid"/> 
                        </div>
                    </div>
                </div>
                <div className="commonpagetitle">
                    <h2>Partners</h2>
                </div>
                <div className="row">
                    <div className="w-100 d-flex justify-content-center">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-1.png`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="auditedverified-cell">
                                <img src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-2.png`} alt="" className="img-fluid"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;