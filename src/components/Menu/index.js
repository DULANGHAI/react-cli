import React, { Component } from 'react';
import {
  Menu, Icon
} from 'antd';
import { Link } from 'react-router-dom';

import color from 'styles/variables.scss';

const { SubMenu } = Menu;

class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  makeTreeDom = data => {
    return data.map((item, index) => {
      if (item.routes) {
        return (
          <SubMenu
            key={item.path}
            title={
              item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              ) : (
                item.title
              )
            }
          >
            {this.makeTreeDom(item.routes)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  }

  render() {
    const { routes } = this.props;
    return (
      <Menu
        selectedKeys={[this.props.location.pathname]}
        mode="inline"
        style={{
          height: '100%',
          background: color.siderbarBg
        }}
      >
        {this.makeTreeDom(routes)}
      </Menu>
    );
  }
}
 
export default MyMenu;
