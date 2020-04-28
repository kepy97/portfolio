import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
              <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                  <div className="col-md-7 heading-section text-center ftco-animate">
                    <h1 className="big big-2">Contact</h1>
                    <h2 className="mb-4">Contact Me</h2>
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p> */}
                  </div>
                </div>
                <div className="row d-flex contact-info mb-5">
                  <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div className="align-self-stretch box text-center p-4 shadow">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="icon-map-signs" />
                      </div>
                      <div>
                        <h3 className="mb-4">Address</h3>
                        <p>2216 Lake Woods Way Stoughton WI 53589 USA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div className="align-self-stretch box text-center p-4 shadow">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="icon-phone2" />
                      </div>
                      <div>
                        <h3 className="mb-4">Contact Number</h3>
                        <p><a href="tel:+17123016140">+1-712-301-6140</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div className="align-self-stretch box text-center p-4 shadow">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="icon-paper-plane" />
                      </div>
                      <div>
                        <h3 className="mb-4">Email Address</h3>
                        <p><a href="mailto:kvpatel@uwm.edu">kvpatel@uwm.edu</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div className="align-self-stretch box text-center p-4 shadow">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="icon-linkedin" />
                      </div>
                      <div>
                        <h3 className="mb-4">Profile</h3>
                        <p><a href="https://www.linkedin.com/in/kepy97/" target="_blank">LinkedIn</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
