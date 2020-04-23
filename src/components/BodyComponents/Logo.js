import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
        	<section className="ftco-section ftco-partner">
			   <div className="container">
			      <div className="row">
			         <div className="col-sm ftco-animate">
			            <a href="#" className="partner"><img src="images/logo/python.jpg" className="img-fluid" alt="Python" /></a>
			         </div>
			         <div className="col-sm ftco-animate">
			            <a href="#" className="partner"><img src="images/logo/php.jpg" className="img-fluid" alt="Php" /></a>
			         </div>
			         <div className="col-sm ftco-animate">
			            <a href="#" className="partner"><img src="images/logo/java.jpg" className="img-fluid" alt="Java" /></a>
			         </div>
			         <div className="col-sm ftco-animate">
			            <a href="#" className="partner"><img src="images/logo/js.jpg" className="img-fluid" alt="JavaScript" /></a>
			         </div>
			         <div className="col-sm ftco-animate">
			            <a href="#" className="partner"><img src="images/logo/android.jpg" className="img-fluid" alt="Android" /></a>
			         </div>
			      </div>
			   </div>
			</section>
        );
    }
}
