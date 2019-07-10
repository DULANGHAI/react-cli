import React, { Component } from 'react';
import {
  Form, Input, Button, 
} from 'antd';
import styles from './index.module.scss';

import bg from 'assets/images/bg.jpg';

@Form.create()
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.img} src={bg} alt="背景" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.right}>
          <Form>
            <Form.item label="账号">
              {getFieldDecorator('account', {
                rules: [
                  {
                    required: true,
                    message: '请输入账号',
                  },
                ],
              })(<Input />)}
            </Form.item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
