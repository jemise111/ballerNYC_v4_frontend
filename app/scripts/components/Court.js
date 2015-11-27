'use strict';

import React from 'react';
import config from '../utils/config';

export default class Court extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	buildImageSrc() {
		var params = [];
	    for (var k in config.staticMap.params) {
	      params.push(`${k}=${config.staticMap.params[k]}`);
	    }
	    params.push(`center=${this.props.data.lat},${this.props.data.lon}`);
	    // return 'https://placekitten.com/g/300/200';
		return `${config.staticMap.baseUrl}?${params.join('&')}`;
	}

	openGoogleMap() {
		window.open(`${config.googleMap.baseUrl}${this.props.data.lat},${this.props.data.lon}`, '_blank');
	}

	favorite() {
		console.log('favorite court', this.props.data.name);
	}

	flip() {
		this.setState({flip: !this.state.flip});
	}

	render() {
		var className = 'court-container';
		if (this.state.flip) { className += ' flipped'; }
		return (
			<div className={className}>
				<div className="frontface">
					<div className="image-container">
						<img src={this.buildImageSrc()} />
					</div>
					<div className="content-container">
						<h2>{this.props.data.name}</h2>
						<h3>{this.props.data.location}</h3>
						<a onClick={this.flip.bind(this)}>Sign up</a>
						<i 
							onClick={this.openGoogleMap.bind(this)}
							className="material-icons map-icon"
						>place</i>
						<i
							onClick={this.favorite.bind(this)}
							className="material-icons favorite-icon"
						>favorite</i>
					</div>
				</div>
				<div className="backface">
					<h1>Im the back</h1>
				</div>
			</div>
		);
	}

}
