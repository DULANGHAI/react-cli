import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import getRouter from './router';
import * as serviceWorker from './serviceWorker';

// css
import 'styles/index.scss';
import 'antd/dist/antd.css';

ReactDom.render(
  <Router>
    {getRouter()}
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
