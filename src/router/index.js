import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'components/Loading';

// 引入页面
// const Home = loadable({
//   loader: () => import('pages/home'),
//   loading: Loading,
//   timeout: 10000,
// });
// const Page = loadable({
//   loader: () => import('pages/page'),
//   loading: Loading,
//   timeout: 10000,
// });
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

// 路由
const getRouter = () => (
  <Switch>
    <Route exact path="/" component={UserLayout} />
    <Route component={NotFound}></Route>
  </Switch>
);

export default getRouter;
