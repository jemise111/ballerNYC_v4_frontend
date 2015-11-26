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

	handleInputChange(e) {
		this.setState({
			inputText: e.target.value
		})
	}

	onSearchSubmit(e) {
		e.preventDefault();
		if (this.state.inputText && this.state.inputText.length) {
			this.props.onSearch(this.state.inputText);
		}
	}

	handleEnter(e) {
		if (e.which === 13) {
			this.props.onSearch(this.state.inputText);
		}
	}

	render() {
		const className = 'search-bar-container ' + (this.state.expand ? 'expand' : '');
		return (
			<div onClick={this.expand.bind(this)} className={className}>
				<div className="circle">
					<input
						onChange={this.handleInputChange.bind(this)}
						onKeyPress={this.handleEnter.bind(this)}
						placeholder="Enter an address"
					/>
				</div>
				<div className="line"></div>
			</div>

		);
	}
}