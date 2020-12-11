import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';

import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import Aux from './hoc/Aux_';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
  
  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Welcome To Lutitech ! . </h1>
                                        <p className="padding-t-15 home-desc">We are a remote software startup with a globally distributed team of Developer. We design and build agile software products and do training for all our technology Stacks.</p>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="http://vimeo.com/99025203"  className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-pattern-effect">
                        <img src="images/bg-pattern.png" alt="" />
                    </div>
                </section>

                {/* Services Component*/}
                <Services />

                {/* Features Component*/}
                <Features />
                
                {/* Descriptions Component*/}
                <Descriptions />

                {/* Pricing Component*/}
                <Pricing />

               
                {/* Process Component*/}
                <Process />

                {/* Testi Component*/}
                <Testi />

                {/* Started Component*/}
                <Started />

                {/* Blog Component*/}
                <Blog />

                {/* Contact Component*/}
                <Contact />

                {/* SocialMedia Component*/}
                <SocialMedia />
                
                {/* Footer Component*/}
                <Footer />

                {/* FooterLinks Component*/}
                <FooterLinks />

                {/* Switcher Component*/}
               <Switcher /> 
        </Aux>
  	);
  }
}

export default Home;