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
        let start_string = url.substring(0,1);
        if (start_string === "#") {
          this.props.history.push(url.substring(1))
        }
        window.globalFunction();
    }
    render() {
        return (
          <div>
            {/* Setting all the SEO description here */}
            <Helmet>
              <title>Keyul Patel</title>
              <meta name="description" content="I'm a student at UWM. I love creating products that improve people’s lives. I consider myself a forever student." data-react-helmet="true" />
              <meta property="og:description" content="I'm a student at UWM. I love creating products that improve people’s lives. I consider myself a forever student." data-react-helmet="true" />
              <meta property="og:image" content="%PUBLIC_URL%/images/profile.jpg" data-react-helmet="true" />
              <meta property="og:title" content="Keyul Patel"></meta>
            </Helmet>

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
