import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
        	<section className="hero-wrap js-fullheight" id="home-section">
			   <div className="overlay"></div>
			   <div className="container">
			      <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
			         <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
			            <div className="text text-center">
			               <span className="subheading">Hey! I am</span>
			               <h1>Keyul Patel</h1>
			               <h2>I'm <span className="txt-rotate" data-period="2000" data-rotate='[ "an Amazonian.", "a Programmer.", "a Blogger." ]'>Amazonian.</span>
			               </h2>
			               <br /><br />
			                <span className="mouse-icon">
					   			<div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
					   		</span>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
        );
    }
}
