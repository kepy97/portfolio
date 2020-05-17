import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import { HashRouter as Router } from 'react-router-dom';

export default class Layout extends React.Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Header />
				<Body />
				<Footer />
			</Router>
		);
	}
}
