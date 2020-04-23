import React from 'react';
import Home from "./BodyComponents/Home";
import About from "./BodyComponents/About";
import Logo from "./BodyComponents/Logo";
import Resume from "./BodyComponents/Resume";
import Projects from "./BodyComponents/Projects";
import BlogBanner from "./BodyComponents/BlogBanner";
import ContactBanner from "./BodyComponents/ContactBanner";
import Contact from "./BodyComponents/Contact";

export default class Body extends React.Component {
    render() {
        return (
          <div>
            <Home />
            <About />
            <Logo />
            <Resume />
            <Projects />
            <BlogBanner />
            <ContactBanner />
            <Contact />
          </div>
        );
    }
}
