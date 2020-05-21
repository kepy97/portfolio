import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Header extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div className="container">
              <Link to={{pathname: `${process.env.PUBLIC_URL}/index.html`, hash: "#home-section"}} className="navbar-brand"><span>K</span>ePy</Link>
              <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"/> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav nav ml-auto">
                  <li className="nav-item"><Link to={{pathname: `/index.html`, hash: "#home-section"}} className="nav-link" ><span>Home</span></Link></li>
                  <li className="nav-item"><Link to={{pathname: `/index.html`, hash: "#about-section"}} className="nav-link" ><span>About</span></Link></li>
                  <li className="nav-item"><Link to={{pathname: `/index.html`, hash: "#resume-section"}} className="nav-link"><span>Resume</span></Link></li>
                  <li className="nav-item"><Link to={{pathname: `/index.html`, hash: "#projects-section"}} className="nav-link"><span>Projects</span></Link></li>
                  <li className="nav-item"><Link to={{pathname: `/index.html`, hash: "#blog-section"}} className="nav-link"><span>My Blog</span></Link></li>
                  <li className="nav-item"><Link to={{pathname: `/index.html`, hash: "#contact-section"}} className="nav-link"><span>Contact</span></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
