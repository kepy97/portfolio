import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>I'm a software developer based in Stoughton, Wisconsin, USA. I have a passion for programming and a great experience on how to create web and mobile applications.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="https://www.linkedin.com/in/kepy97/" target="_blank"><span className="icon-linkedin" /></a></li>
                  <li className="ftco-animate"><a href="https://github.com/kepy97" target="_blank"><span className="icon-github" /></a></li>
                  <li className="ftco-animate"><a href="https://www.facebook.com/Kepy97" target="_blank"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="https://www.instagram.com/kepy97/" target="_blank"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4" id="ftco-nav">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#home-section"><span className="icon-long-arrow-right mr-2" />Home</a></li>
                  <li><a href="#about-section"><span className="icon-long-arrow-right mr-2" />About</a></li>
                  <li><a href="#resume-section"><span className="icon-long-arrow-right mr-2" />Resume</a></li>
                  <li><a href="#projects-section"><span className="icon-long-arrow-right mr-2" />Projects</a></li>
                  <li><a href="#contact-section"><span className="icon-long-arrow-right mr-2" />Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Skills</h2>
                <ul className="list-unstyled">
                  <li><span className="icon-long-arrow-right mr-2" />Web Design</li>
                  <li><span className="icon-long-arrow-right mr-2" />Web Development</li>
                  <li><span className="icon-long-arrow-right mr-2" />Business Strategy</li>
                  <li><span className="icon-long-arrow-right mr-2" />Data Analysis</li>
                  <li><span className="icon-long-arrow-right mr-2" />Software Development</li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker" /><span className="text">2216 Lake Woods Way, Stoughton, Wisconsin, USA</span></li>
                    <li><a href="tel:+17123016140"><span className="icon icon-phone" /><span className="text">+1-712-301-6140</span></a></li>
                    <li><a href="mailto:kvpatel@uwm.edu"><span className="icon icon-envelope" /><span className="text">kvpatel@uwm.edu</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}
