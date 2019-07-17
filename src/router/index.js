import React from 'react';
import {
  Route, Switch, Redirect, Router 
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import UserLayout from 'layouts/UserLayout';
import BasicLayout from 'layouts/BasicLayout';
import NotFound from 'pages/notFound';
import { Promise } from 'q';

const customHistory = createBrowserHistory();

export default class RootContainer extends React.Component {
  async onEnter(Component, props) {
    debugger;
    const userInfo = await this.test();
    debugger;
    if (userInfo) {
      console.log(userInfo);
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  }

  test = () => {
    return Promise((resoleve, reject) => {
      setTimeout(() => {
        resoleve(123);
      }, 3000);
    });
  }

  render() {
    return (
      <Router history={customHistory}>
        <Route
          render={props => {
            return (
              <Switch>
                <Route path="/login" component={UserLayout} />
                <Route path="/" component={BasicLayout}></Route>
                {/* <Route
                  path="/"
                  render={props => this.onEnter(BasicLayout, props)}
                /> */}
                <Route component={NotFound}></Route>
              </Switch>
            );
          }}
        />
      </Router>
    );
  }
}
