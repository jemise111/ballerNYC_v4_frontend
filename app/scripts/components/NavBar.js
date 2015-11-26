'use strict';

import React from 'react';
import SearchBar from './SearchBar';

export default class NavBar extends React.Component {

	render() {
		const className = 'nav-bar-wrapper' + (this.props.highlight ? ' highlight' : '');

		return (
			<div className={className}>
				<nav>
					<a href="/">BallerNYC</a>
					<span>{this.props.borough}</span>
					<SearchBar onSearch={this.props.onSearch} />
				</nav>
				<div className="spacer"/>
			</div>
		);
	}
}