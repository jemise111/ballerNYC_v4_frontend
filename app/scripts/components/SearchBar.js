'use strict';

import React from 'react';

export default class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.showPlaceholder) {
			this.refs.searchInput.value = '';
		}
	}

	handleIconClick() {
		if (!this.state.expand) {
			this.setState({expand: true});
			this.refs.searchInput.focus();
		} else {
			this.props.onSearch(this.state.inputText);
		}
	}

	handleInputChange(e) {
		this.setState({
			inputText: e.target.value
		});
	}

	handleEnter(e) {
		if (e.which === 13) {
			this.props.onSearch(this.state.inputText);
		}
	}

	render() {
		const className = 'search-bar-container ' + (this.state.expand ? 'expand' : '');
		return (
			<div className={className}>
				<i
					className="material-icons search-icon"
					onClick={this.handleIconClick.bind(this)}
				>
					search
				</i>
				<div className="line"></div>
				<input
					type="text"
					onChange={this.handleInputChange.bind(this)}
					onKeyPress={this.handleEnter.bind(this)}
					placeholder="Enter an address"
					ref="searchInput"
				/>
			</div>

		);
	}
}