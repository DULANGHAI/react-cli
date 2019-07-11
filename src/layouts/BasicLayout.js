import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Layout, Menu, Icon 
} from 'antd';

import routerConfig from 'router/routerConfig';

const { Header, Content, Sider } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    console.log(111, routerConfig);
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
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
