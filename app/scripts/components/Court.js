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
				<div className="image-container">
					<img src={this.buildImageSrc()} />
				</div>
				<div className="content-container">
					<h2>{this.props.data.name}</h2>
					<h3>{this.props.data.location}</h3>
					<a>View Map</a>
					<i className="material-icons favorite">favorite_border</i>
				</div>
			</div>
		);
	}

}
