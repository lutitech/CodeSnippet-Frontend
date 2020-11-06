import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Services</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">Web Development</h4>
                            <p className="padding-t-15 text-muted">We build custom web application using modern programming techniques and methodologies. We analyze the business or brief, then provide an appropriate solution. For developers who wish to advance their skills to world class level, Your seat is reserved @ Code Snippet.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Mobile Development</h4>
                            <p className="padding-t-15 text-muted">To the success of your business accross different industries, We offer full-scale Mobile Apps for mobile users which will contribute to the growth of your business and capture targerted users.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-piggy text-custom"></i>
                            <h4 className="padding-t-15">Digital Marketing</h4>
                            <p className="padding-t-15 text-muted">Getting your business on search engines and social media to generate leads and more revenue is our top priority, code snippet will get you on track with real time results!, We excel in Search Consoles,Web Analytics, Facebook, Instagram, Twitter, LinkedIn etc.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
  	);
  }
}
export default Services;