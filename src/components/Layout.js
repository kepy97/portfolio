import React, { Fragment } from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import loadingImage from "./../data/working-user.gif"

import { BrowserRouter as Router } from 'react-router-dom';

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		this.state = {loading: false};
	}
	componentDidMount() {
		this.setState({loading: true});
		setTimeout(() => {
			this.setState({loading: false});
		}, 5000);
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				{!this.state.loading ?
					<Fragment>
						<Header />
						<Body />
						<Footer />
					</Fragment>
				:
					<div class="custom-landing-sec">
						<div class="custom-landing-image">
							<img src={loadingImage} alt="Loading Data" />
						</div>
					</div> 
				}
			</Router>
		);
	}
}
