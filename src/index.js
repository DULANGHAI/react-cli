import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import getRouter from './router';
import * as serviceWorker from './serviceWorker';

import logo from './logo.svg';

ReactDom.render(
  <Router>
    <Nav />
    {getRouter()}
    <img src={logo} alt="Logo" />
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
