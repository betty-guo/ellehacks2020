import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (<div>
			<h1>This is the home page</h1>
			<h2>I am a...</h2>
			<Link to={'/businessform'}>
				<button renderAs="button">
					Business
					</button></Link>
			
			<Link to={'/charityform'}>
				<button renderAs="button">
					Charity
          </button></Link>

		</div>);
	}
}

export default HomePage;