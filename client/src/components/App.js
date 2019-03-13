import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
//const { google } = require('googleapis');
//1036090379974-322phjs92f0daak5c29p56up2vkc2qpv.apps.googleusercontent.com
const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact component={StreamCreate} />
						{/* will just show edit component, whatever is after /, id is just a variable*/}
						{/* can find in props.match.params.id can add another
					path="/streams/edit/:id/:anotherVar"*/}
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/:id" exact component={StreamShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};
export default App;
