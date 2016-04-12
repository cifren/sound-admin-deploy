import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";
import App from "./containers/App";
import DashboardPage from "./containers/DashboardPage";
import NavigationPage from "./containers/NavigationPage";
import PostAdminPage from "./containers/PostAdminPage";
import UserAdminPage from "./containers/UserAdminPage";

const common = {
  navigation: NavigationPage,
};

export default (
  <Route path="/" component={App}>
    <IndexRoute components={{...common, content: DashboardPage}} />
    <Route path="posts/:adminPageType(/:id)" components={{...common, content: PostAdminPage}} />
    <Route path="users/:adminPageType(/:id)" components={{...common, content: UserAdminPage}} />
    <Route path="*" component={_ => <h1>Page not found.</h1>}/>
  </Route>
);