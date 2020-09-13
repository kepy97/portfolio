import React, { Fragment } from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		document.getElementById("root").style.display = "none";
	}
	componentDidMount() {
		setTimeout(() => {
			document.getElementById("loader").style.display = "none";
			document.getElementById("root").style.display = null;
		}, 5000);
	}

	render() {
		const trackingId = "UA-177855828-1";
		ReactGA.initialize(trackingId);
		ReactGA.pageview(window.location.pathname + window.location.search);

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Fragment>
					<Header />
					<Body />
					<Footer />
				</Fragment>
			</Router>
		);
	}
}
