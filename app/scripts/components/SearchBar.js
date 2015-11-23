'use strict';

import React from 'react';

export default class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	expand() {
		this.setState({expand: true});
	}

	render() {
		const className = 'search-bar-container ' + (this.state.expand ? 'expand' : '');
		return (
			<div onClick={this.expand.bind(this)} className={className}>
				<div className="circle">
					<input placeholder="Enter an address"/>
				</div>
				<div className="line"></div>
			</div>

		);
	}
}