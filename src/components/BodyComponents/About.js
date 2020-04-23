import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
			   <div className="container">
			      <div className="row d-flex no-gutters">
			         <div className="col-md-6 col-lg-6 d-flex">
			            <div className="img-about img d-flex align-items-stretch">
			               <div className="overlay"></div>
			               <div>
			               		<img className="img d-flex align-self-stretch align-items-center" src="images/profile.jpg"/>
			               </div>
			            </div>
			         </div>
			         <div className="mobprofile">
			            <img src="images/profile.jpg" />
			         </div>
			         <div className="col-md-6 col-lg-6 pl-md-5 py-5">
			            <div className="row justify-content-start pb-3">
			               <div className="col-md-12 heading-section ftco-animate">
			                  <h1 className="big">About</h1>
			                  <h2 className="mb-4">About Me</h2>
			                  <p>I'm a software developer based in Stoughton, Wisconsin, USA. I have a passion for programming and a great experience on how to create web and mobile applications.</p>
			                  <ul className="about-info mt-4 px-md-0 px-2">
			                     <li className="d-flex"><span>Name:</span> <span>Keyul Patel</span></li>
			                     <li className="d-flex"><span>Date of birth:</span> <span>April 14, 1997</span></li>
			                     <li className="d-flex"><span>Email:</span> <span><a href="mailto:kvpatel@uwm.edu">kvpatel@uwm.edu</a></span></li>
			                     <li className="d-flex"><span>Phone: </span> <span><a href="tel:+17123016140">+1-712-301-6140</a></span></li>
			                  </ul>
			               </div>
			            </div>
			            <div className="counter-wrap ftco-animate d-flex mt-md-3">
			               <div className="text">
			                  <p className="mb-4">
			                  </p>
			                  <p><a href="resume/resume.pdf" target="_blank" className="btn btn-primary py-3 px-3">Download Resume</a></p>
			               </div>
			            </div>
			         </div>
			      </div>
			   </div>
			</div>
        );
    }
}
