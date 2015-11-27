'use strict';

import React from 'react';
import SearchBar from './SearchBar';

export default class NavBar extends React.Component {

	render() {
		const className = 'nav-bar-wrapper' + (this.props.highlight ? ' highlight' : '');

		return (
			<div className={className}>
				<nav>
					<a className="link-wrapper" href="/">
						<span className="text">
							BallerNYC
							<span className="borough">{this.props.borough}</span>
						</span>
						<img className="logo" src={require('../../images/logo.png')}></img>
					</a>
					<SearchBar
						onSearch={this.props.onSearch}
						showPlaceholder={!!this.props.borough.length}
					/>
				</nav>
				<div className="spacer"/>
			</div>
		);
	}
}