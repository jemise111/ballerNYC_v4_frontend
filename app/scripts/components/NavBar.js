'use strict';

import React from 'react';

export default class NavBar extends React.Component {

	render() {
		const className = 'nav-bar-wrapper' + (this.props.highlight ? ' highlight' : '');

		return (
			<div className={className}>
				<nav>
					<a href="/">BallerNYC</a>
					<span>{this.props.borough}</span>			
				</nav>
				<div/>
			</div>
		);
	}
}