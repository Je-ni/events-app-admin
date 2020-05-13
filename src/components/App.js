import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
import Users from './Users';
import Profile from './Profile';
import AllEvents from './Events';
import UnbudgetedEvents from './UnbudgetedEvents';
import BudgetedEvents from './BudgetedEvents';

const ErrorPage = () => <div>Error 404</div>;

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/users" component={Users} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/events" component={AllEvents} />
					<Route exact path="/budgetedEvents" component={BudgetedEvents} />
					<Route exact path="/unbudgetedEvents" component={UnbudgetedEvents} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="*" component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;