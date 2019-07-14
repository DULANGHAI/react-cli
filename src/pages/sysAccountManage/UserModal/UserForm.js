import React, { Component } from 'react';
import {
  Form, Input, Select,
} from 'antd';

const { Option } = Select;

@Form.create({
  name: 'userForm'
})
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getFieldDecorator, } = this.props.form;
    const { originData } = this.props;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    return (
      <div className="">
        <Form colon={false} hideRequiredMark={true} {...formItemLayout}>
          <Form.Item label="用户名称">
            {getFieldDecorator('userName', {
              initialValue: originData.userName,
              rules: [
                {
                  required: true,
                  message: '请输入',
                },
              ],
            })(
              <Input placeholder="请输入" />,
            )}
          </Form.Item>
          <Form.Item label="用户手机">
            {getFieldDecorator('phone', {
              initialValue: originData.phone,
              rules: [
                {
                  required: true,
                  message: '请输入',
                },
              ],
            })(
              <Input placeholder="请输入" />,
            )}
          </Form.Item>
          <Form.Item label="用户邮箱">
            {getFieldDecorator('email', {
              initialValue: originData.email,
              rules: [
                {
                  required: true,
                  message: '请输入',
                },
                {
                  type: 'email',
                  message: '邮箱格式不正确',
                },
              ],
            })(
              <Input placeholder="请输入" />,
            )}
          </Form.Item>
          <Form.Item label="登录账号">
            {getFieldDecorator('account', {
              initialValue: originData.account,
              rules: [
                {
                  required: true,
                  message: '请输入',
                },
              ],
            })(
              <Input placeholder="请输入" />,
            )}
          </Form.Item>
          <Form.Item label="系统角色">
            {getFieldDecorator('roleId', {
              initialValue: originData.roleId || undefined,
              rules: [
                {
                  required: true,
                  message: '请输入',
                },
              ],
            })(
              <Select placeholder="请选择">
                <Option value="1">角色1</Option>
                <Option value="2">角色2</Option>
                <Option value="3">角色3</Option>
              </Select>,
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default UserForm;
