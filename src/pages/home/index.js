import React, { Component } from 'react';
import styles from './index.module.scss';

export default class Home extends Component {
  render() {
    console.log(111, styles);
    // debugger;
    return (
      <div className={styles.app}>
        <div className={styles.error}>this is home~</div>
      </div>
    );
  }
}
