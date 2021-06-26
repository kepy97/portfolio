import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About Me</h2>
                <p>I enjoy meeting new people and finding ways to help them have an uplifting experience. I am a dedicated, outgoing, and a team player. I enjoy reading, and the knowledge and perspective that my reading gives me have strengthened my thought process. I consider myself a forever student.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="https://www.linkedin.com/in/kepy97/" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin" /></a></li>
                  <li className="ftco-animate"><a href="https://github.com/kepy97" target="_blank" rel="noopener noreferrer"><span className="icon-github" /></a></li>
                  {/* <li className="ftco-animate"><a href="https://twitter.com/Keyul_kepy" target="_blank" rel="noopener noreferrer"><span className="icon-twitter" /></a></li> */}
                  <li className="ftco-animate"><a href="https://www.youtube.com/channel/UCPL6VQew6f_tpgzpcJhrXsQ?view_as=subscriber" target="_blank" rel="noopener noreferrer"><span className="icon-youtube" /></a></li>
                  {/* <li className="ftco-animate"><a href="https://www.facebook.com/Kepy97" target="_blank" rel="noopener noreferrer"><span className="icon-facebook" /></a></li>*/}
                  <li className="ftco-animate"><a href="https://www.instagram.com/kepy97/" target="_blank" rel="noopener noreferrer"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4" id="ftco-nav">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><Link to={{ pathname: `/index.html`, hash: "#home-section" }} ><span className="icon-long-arrow-right mr-2" />Home</Link></li>
                  <li><Link to={{ pathname: `/index.html`, hash: "#about-section" }} ><span className="icon-long-arrow-right mr-2" />About</Link></li>
                  <li><Link to={{ pathname: `/index.html`, hash: "#resume-section" }}><span className="icon-long-arrow-right mr-2" />Resume</Link></li>
                  <li><Link to={{ pathname: `/index.html`, hash: "#projects-section" }}><span className="icon-long-arrow-right mr-2" />Projects</Link></li>
                  <li><Link to={{ pathname: `/index.html`, hash: "#blog-section" }}><span className="icon-long-arrow-right mr-2" />My Blog</Link></li>
                  <li><Link to={{ pathname: `/index.html`, hash: "#contact-section" }}><span className="icon-long-arrow-right mr-2" />Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Skills</h2>
                <ul className="list-unstyled">
                  <li><span className="icon-long-arrow-right mr-2" />Full Stack Software Development</li>
                  <li><span className="icon-long-arrow-right mr-2" />Web Development</li>
                  <li><span className="icon-long-arrow-right mr-2" />Machine Learning</li>
                  <li><span className="icon-long-arrow-right mr-2" />Mobile App Development</li>
                  <li><span className="icon-long-arrow-right mr-2" />Data Analysis</li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><a href="mailto:keyulvpatel97@gmail.com" target="_blank" rel="noopener noreferrer"><span className="icon icon-envelope" /><span className="text">keyulvpatel97@gmail.com</span></a></li>
                    <li><a href="https://www.linkedin.com/in/kepy97/" target="_blank" rel="noopener noreferrer"><span className="icon icon-linkedin" /><span className="text">Linkedin</span></a></li>
                    <li><a href="https://twitter.com/Keyul_kepy" target="_blank" rel="noopener noreferrer"><span className="icon icon-twitter" /><span className="text">Twitter</span></a></li>
                    {/* <li><a href="https://goo.gl/maps/55aMtzvdzejrsRmKA" target="_blank" rel="noopener noreferrer"><span className="icon icon-map-marker" /><span className="text">USA</span></a></li> */}
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
