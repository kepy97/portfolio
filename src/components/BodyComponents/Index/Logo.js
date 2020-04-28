import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
        	<section className="ftco-section ftco-partner">
			   <div className="container">
			      <div className="row">
			         <div className="col-sm ftco-animate">
			            <div className="partner"><img src="/images/logo/python.jpg" className="img-fluid" alt="Python" /></div>
			         </div>
			         <div className="col-sm ftco-animate">
			            <div className="partner"><img src="/images/logo/php.jpg" className="img-fluid" alt="Php" /></div>
			         </div>
			         <div className="col-sm ftco-animate">
			            <div className="partner"><img src="/images/logo/java.jpg" className="img-fluid" alt="Java" /></div>
			         </div>
			         <div className="col-sm ftco-animate">
			            <div className="partner"><img src="/images/logo/js.jpg" className="img-fluid" alt="JavaScript" /></div>
			         </div>
			         <div className="col-sm ftco-animate">
			            <div className="partner"><img src="/images/logo/android.jpg" className="img-fluid" alt="Android" /></div>
			         </div>
			      </div>
			   </div>
			</section>
        );
    }
}
