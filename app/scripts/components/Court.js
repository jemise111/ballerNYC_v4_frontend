'use strict';

import React from 'react';
import config from '../utils/config';

export default class Court extends React.Component {

	buildImageSrc() {
		var params = [];
	    for (var k in config.map.params) {
	      params.push(k + '=' + config.map.params[k]);
	    }
	    params.push('center=' + this.props.data.lat + ',' + this.props.data.lon);
		return config.map.baseUrl + '?' + params.join('&');
	}

	render() {
		return (
			<div className="court-container">
				<img src={this.buildImageSrc()} />
				<div className="content-container">
					<h2>{this.props.data.name}</h2>
				</div>
			</div>
		);
	}

}
