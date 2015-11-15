'use strict';

import React from 'react';
import NavBar from '../components/NavBar';
import Loader from '../components/Loader';
import Court from '../components/Court';
import BoroughButton from '../components/BoroughButton';
import CourtsApi from '../apis/CourtsApi';
import config from '../utils/config';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			borough: 'Manhattan',
			page: 1,
			courts: [],
			loading: true
		};
	}

	componentWillMount() {
		fetchCourts.call(this, this.state);
		var self = this;
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
				loading: true
			});
		}
	}

	render() {
		return (
			<div className="home-container">
				<NavBar highlightHeight={35}/>
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

function fetchCourts(state) {
	CourtsApi.getCourts(state.borough, state.page)
	.then((data) => {
		this.setState({
			courts: this.state.courts.concat(data),
			loading: false
		});
	})
	.catch((err) => {console.log(err)})
}