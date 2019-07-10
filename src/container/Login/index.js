import React, { Component } from 'react';
import {
  Form, Input, Button, Icon,
} from 'antd';
import styles from './index.module.scss';

import bg from 'assets/images/bg.jpg';

@Form.create()
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMsg: '账户或密码错误',
    };
  }

  render() {
    const { loading, errorMsg } = this.state;
    const { getFieldDecorator } = this.props.form;

    let buttonClassName = styles['login-form-button'];
    if (loading) {
      buttonClassName += ' disable';
    }

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.img} src={bg} alt="背景" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.right}>
          <Form className={styles['form-class']} hideRequiredMark={true}>
            <div className={styles.title}>
              理赔垫资机构管理
            </div>
            {errorMsg ? (
              <div className={styles['errpr-tip']}>
                <Icon type="close-circle" />
                {errorMsg}
              </div>
            ) : ''}
            <Form.Item label="账号" className={styles.flex} colon={false}>
              {getFieldDecorator('account', {
                rules: [
                  {
                    required: true,
                    message: '请输入账号',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码" className={styles.flex} colon={false}>
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
              <Button type="primary" className={buttonClassName}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
