import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import styles from './index.module.scss';

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">退出登录</Menu.Item>
      </Menu>
    );

    return (
      <div className={styles['header-container']}>
        <div className={styles['system-name']}>理赔垫资机构管理</div>

        <div className={styles['right-container']}>
          <Dropdown overlay={menu} trigger={['click']}>
            <span className="ant-dropdown-link">
              冰冰 <Icon type="down" />
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}
 
export default MyHeader;
