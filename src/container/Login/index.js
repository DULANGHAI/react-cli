import React, { Component } from 'react';
import {
  Form, Input, Button, Icon, message
} from 'antd';
import styles from './index.module.scss';
import bg from 'assets/images/bg.jpg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action
import { loginAction } from 'actions/app';

@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators(
      { loginAction },
      dispatch
    )
  })
)
@Form.create()
class LoginForm extends Component {
  state = {
    loading: false,
    errorMsg: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ loading: true });
        this.props.actions.loginAction(values).then(data => {
          console.log('receive data: ', data);
          setTimeout(() => this.props.history.replace('/orders'));
          message.success('登录成功');
        }).finally(() => {
          this.setState({ loading: false });
        });
      }
    });
  };

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
          <Form
            className={styles['form-class']}
            hideRequiredMark={true}
            onSubmit={this.handleSubmit}
          >
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
              <Button type="primary" htmlType="submit" className={buttonClassName}>
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
