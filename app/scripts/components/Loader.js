'use strict';

import React from 'react';

export default class Loader extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const className = `loader ${this.props.hide ? 'hide' : ''}`

		return (
			<div className={className}>
				<div className="spinner">
					<div className="bounce1"></div>
					<div className="bounce2"></div>
					<div className="bounce3"></div>
				</div>
			</div>
		);
	}
}
