import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        return (
        	<div>
				<Header />
            	<Body />
            	<Footer />
            </div>
        );
    }
}
