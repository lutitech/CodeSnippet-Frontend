import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Join us now and learn how to be digital marketer and a software developer</h2>
                        <p className="padding-t-15 home-desc">Get trained with the latest technology.</p>
                        <Link to="JavaScript:Void(0);" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">View Plan & Pricing</Link>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;