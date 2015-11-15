'use strict';

import React from 'react';

export default class BoroughButton extends React.Component {

	render() {
		const className = `borough-button ${this.props.highlight ? 'highlight' : ''}`;

		return (
			<div className={className} onClick={this.props.onClick}>
				{this.props.name}
			</div>
		);
	}

}
