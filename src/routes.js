import React from "react";
import { Route, Redirect, Switch } from "react-router";

import NotFound from "./components/NotFound/NotFound";

import App from "./components/App";
import Courses from "./components/Courses/Courses";
import Posts from "./components/Posts";
// import Profile from "./components/routes/examples/Profile";
// import Todos from "./components/routes/examples/Todos";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/home" component={Courses} />
      <Route exact path="/posts" component={Posts} />
      <Redirect exact from="/" to="/home" />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Routes;