import React from 'react';
import Home from "./Home";
import About from "./About";
// import Logo from "./Logo";
import Resume from "./Resume";
import Projects from "./Projects";
import BlogBanner from "./BlogBanner";
import ContactBanner from "./ContactBanner";
import Contact from "./Contact";
import { Helmet } from 'react-helmet'

export default class IndexBody extends React.Component {
    componentDidMount() {
        // FIXME: Added patch because of converted HashRouter to BrowserRouter
        let url = this.props.location.hash;
        let start_string = url.substring(0,2);
        if (start_string === "#/") {
          this.props.history.push(url.substring(1))
        }
        window.globalFunction();
    }
    render() {
        return (
          <div>
            {/* Setting all the SEO description here */}

            <Home />
            <About />
            {/* <Logo /> */}
            <Resume />
            <Projects />
            <BlogBanner postsData={this.props.postsData}/>
            <ContactBanner />
            <Contact />
          </div>
        );
    }
}
