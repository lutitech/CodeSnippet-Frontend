import React from 'react';
import { Link } from 'react-router-dom';
import {Naira} from 'react-naira'

class Pricing extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Our Pricing</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle font-secondary text-muted text-center padding-t-30">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <h4 className="text-uppercase">Digital Marketing</h4>
                        <Naira>20,000</Naira> 
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>SEO<b className="text-custom"></b></p>
                            <p>:SEM <b className="text-custom"></b></p>
                            <p>Facebook<b className="text-custom"></b></p>
                            <p>Twitter<b className="text-custom"></b></p>
                            <p>Instagram<b className="text-custom"></b> </p>
                        </div>
                        <Link to="/sign-up" className="btn btn-custom waves-effect waves-light margin-t-30">Join Now</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box bg-white hover-effect price-active">
                        <h4 className="text-uppercase">Web Develoment</h4>
                        <Naira>45,000</Naira>
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>XML <b className="text-custom"></b></p>
                            <p>JAVA <b className="text-custom"></b></p>
                            <p>KOTLIN<b className="text-custom"></b></p>
                            <p>SWIFT<b className="text-custom"></b> </p>
                            <p>DART<b className="text-custom"></b> </p>
                        </div>
                        <Link to="/sign-up" className="btn btn-custom waves-effect waves-light margin-t-30">Join Now</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <h4 className="text-uppercase">Mobile Development</h4>
                        <Naira>78,000</Naira>
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>HTML <b className="text-custom"></b></p>
                            <p>CSS <b className="text-custom"></b></p>
                            <p>Javascript <b className="text-custom"></b></p>
                            <p>PHP<b className="text-custom"></b> Domain</p>
                            <p>MYSQL<b className="text-custom"></b> </p>
                        </div>
                        <Link to="/sign-up" className="btn btn-custom waves-effect waves-light margin-t-30">Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Pricing;