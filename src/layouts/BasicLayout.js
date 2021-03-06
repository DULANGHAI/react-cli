import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from 'components/Menu';
import HeaderContent from 'components/Header';
import PageName from 'components/PageName';

import routerConfig from 'router/routerConfig';
import color from 'styles/variables.scss';
import styles from './BasicLayout.module.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfoAction } from 'actionCreators/app';

const { Header, Content, Sider } = Layout;

@connect(
  state => ({
    appState: state.app,
  }),
  dispatch => ({
    actions: bindActionCreators(
      { getUserInfoAction },
      dispatch
    )
  })
)
class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  getUserInfo = () => {
    this.props.actions.getUserInfoAction().catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { appState } = this.props;
    console.log('routerConfig', routerConfig, appState);

    if (!appState.token) { // token 不存在直接去登录
      return (
        <Redirect exact from="/" to="/login" />
      );
    } else if (!appState.userInfo) { // token存在，但用户信息不存在，去获取用户信息并设置
      this.getUserInfo();
      return (
        <div></div>
      );
    } else {
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
                  <Redirect exact from="/" to={routerConfig[0].path} />
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
}
 
export default BasicLayout;
