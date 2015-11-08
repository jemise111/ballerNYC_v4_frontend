'use strict';

/* STYLES */
import '../styles/main.scss';

/* REACT */
import React from 'react';
import ReactDOM from 'react-dom';

/* REACT ROUTER */
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

/* VIEWS */
import Home from './views/Home';

const router = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={Home} />
	</Router>
);

ReactDOM.render(
	router,
	document.getElementById('react-entry')
);