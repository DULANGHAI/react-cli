import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'components/Loading';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

// 引入页面
const UserLayout = loadable({
  loader: () => import('layouts/UserLayout'),
  loading: Loading,
  timeout: 10000,
});
const NotFound = loadable({
  loader: () => import('pages/notFound'),
  loading: Loading,
  timeout: 10000,
});

export default class RootContainer extends React.Component {
  // componentDidMount() {
  //   const userinfo = sessionStorage.getItem('userinfo'); /**
  //    * sessionStorage中有user信息，但store中没有
  //    * 说明刷新了页面，需要重新同步user数据到store
  //    * * */
  //   if (userinfo && !this.props.userinfo) {
  //     // this.props.actions.setUserInfo(JSON.parse(tools.uncompile(userinfo)))
  //   }
  // }

  // /** 跳转到某个路由之前触发 * */
  // onEnter(Component, props) {
  //   /**
  //    *  有用户信息，说明已登录
  //    *  没有，则跳转至登录页
  //    * * */
  //   const userinfo = sessionStorage.getItem('userinfo');
  //   if (userinfo) {
  //     return <Component {...props} />;
  //   }
  //   return <Redirect to="/user/login" />;
  // }

  render() {
    return (
      <Router history={customHistory}>
        <Route
          render={props => {
            return (
              <Switch>
                <Route path="/login" component={UserLayout} />
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
