import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from 'components/Menu';
import HeaderContent from 'components/Header';
import PageName from 'components/PageName';

import routerConfig from 'router/routerConfig';
import color from 'styles/variables.scss';
import styles from './BasicLayout.module.scss';

const { Header, Content, Sider } = Layout;


class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    console.log('routerConfig', routerConfig);
    return (
      <Layout className={styles.layout}>
        <Header className={styles['header-layout'] + ' bg-white'}>
          <HeaderContent></HeaderContent>
        </Header>
        <Layout>
          <Sider width={240} style={{ background: color.siderbarBg }}>
            <Menu routes={routerConfig} {...this.props}></Menu>
          </Sider>
          <Layout style={{ padding: '40px 40px', minWidth: '1000px' }}>
            <PageName routes={routerConfig} {...this.props}></PageName>
            <Content>
              <Switch>
                <Redirect exact from="/" to="/home" />
                {routerConfig.map((route, i) => (
                  <Route {...route} {...this.props}></Route>
                ))}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
 
export default BasicLayout;
