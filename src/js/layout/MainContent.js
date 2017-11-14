import React from "react";

import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Database from "../pages/Database";
import Orders from "../pages/Orders";
import Users from "../pages/Users";
import User from "../pages/User";


const MainContent = () => {

	return (
		<main class="main-content">
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/users" component={Orders} />
					<Route exact path="/orders" component={Users} />
					<Route exact path="/database" component={Database} />
					<Route path="*" component={User} />
				</Switch>
		</main>
	)
};

export default MainContent;
