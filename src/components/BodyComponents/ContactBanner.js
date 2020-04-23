import React from 'react';

export default class ContactBanner extends React.Component {
    render() {
        return (
            <section className="ftco-section ftco-hireme img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
              <div className="overlay" />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-7 ftco-animate text-center" id="ftco-nav">
                    <h2> Looking for <span>Summer 20 Internship</span> candidate?</h2>
                    {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
                    <p className="mb-0"><a href="#contact-section" className="btn btn-primary py-3 px-5">Contact me</a></p>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
