'use strict';

import React from 'react';
import NavBar from '../components/NavBar';
import Loader from '../components/Loader';
import Court from '../components/Court';
import BoroughButton from '../components/BoroughButton';
import CourtsApi from '../apis/CourtsApi';
import config from '../utils/config';

var HIGHLIGHT_HEIGHT = 75;
var COURTS_PER_PAGE = 20;

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			borough: 'Manhattan',
			page: 1,
			courts: [],
			loading: true,
			highlightNav: false,
			hasMoreCourtsInBorough: true
		};
	}

	componentWillMount() {
		window.addEventListener('scroll', onScroll.bind(this));
		fetchCourts.call(this, this.state);
	}

	componentWillUnmount() {
		window.addEventListener('scroll', onScroll);
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextState.page > this.state.page || nextState.borough != this.state.borough) {
			fetchCourts.call(this, nextState);
		}
	}

	getCourt(data, id) {
		return <Court data={data} key={id} />
	}

	getBorough(data, id) {
		return <BoroughButton
					key={id}
					name={data}
					onClick={this.onBoroughPress.bind(this, data)}
					highlight={this.state.borough === data}
				/>
	}

	onBoroughPress(name) {
		if (name !== this.state.borough) {
			this.setState({
				borough: name,
				courts: [],
				loading: true,
				page: 1,
				hasMoreCourtsInBorough: true
			});
		}
	}

	render() {
		return (
			<div className="home-container">
				<NavBar highlight={this.state.highlightNav} borough={this.state.borough} />
				<div className="borough-container">
					{config.courts.boroughs.map(this.getBorough.bind(this))}
				</div>
				<div className="courts-container">
					{this.state.courts.map(this.getCourt)}
				</div>
				<Loader hide={!this.state.loading}/>
			</div>
		);
	}

}

/* 
 * Helpers
 */

function fetchCourts(state) {
	CourtsApi.getCourts(state.borough, state.page)
	.then((data) => {
		this.setState({
			courts: this.state.courts.concat(data),
			loading: false,
			hasMoreCourtsInBorough: data.length === COURTS_PER_PAGE
		});
	})
	.catch((err) => {console.log(err)})
}

function onScroll() {
	// this code isn't DRY but prevents react DOM diffing unnecessarily
	if (window.scrollY > HIGHLIGHT_HEIGHT) {
		this.setState({highlightNav: true});
	} else {
		this.setState({highlightNav: false});
	}

	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		if (!this.state.loading && this.state.hasMoreCourtsInBorough) {
			this.setState({
				page: this.state.page + 1,
				loading: true
			})
		}
	}
} 