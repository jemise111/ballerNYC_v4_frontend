'use strict';

import React from 'react';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		window.addEventListener('scroll', onScroll.bind(this));
	}

	componentWillUnmount() {
		window.addEventListener('scroll', onScroll);
	}

	render() {
		const className = 'nav-bar' + (this.state.highlight ? ' highlight' : '');

		return (
			<nav className={className}>
				<a href="/">BallerNYC</a>				
			</nav>
		);
	}
}

/*
 * Helpers
 */

function onScroll() {
	// this code isn't DRY but prevents react DOM diffing unnecessarily
	if (window.scrollY > this.props.highlightHeight) {
		this.setState({highlight: true});
	} else {
		this.setState({highlight: false});
	}
} 