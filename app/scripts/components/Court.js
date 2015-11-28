'use strict';

import React from 'react';
import config from '../utils/config';
import SignUpForm from './SignUpForm';

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

	favorite() {
		console.log('favorite court', this.props.data.name);
	}

	flip() {
		this.setState({flip: !this.state.flip});
	}

	onSubmitForm(data) {
		this.props.onSignUp(data); // should be a promise that resolves... and then...
		this.flip();
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
						<a
							href={`${config.googleMap.baseUrl}${this.props.data.lat},${this.props.data.lon}`}
							target="_blank"
						>
							<i className="material-icons map-icon">place</i>
						</a>
						<i
							onClick={this.favorite.bind(this)}
							className="material-icons favorite-icon"
						>favorite</i>
					</div>
				</div>
				<div className="backface">
					<i
						onClick={this.flip.bind(this)}
						className="material-icons close-icon"
					>close</i>
					<SignUpForm onSignUp={this.onSubmitForm.bind(this)}/>
				</div>
			</div>
		);
	}

}
