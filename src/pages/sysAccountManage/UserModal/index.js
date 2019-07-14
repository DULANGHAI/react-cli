import React, { Component } from 'react';
import { Modal, } from 'antd';
import UserForm from './UserForm.js';

const defaultFormData = {
  userName: '',
  phone: '',
  email: '',
  account: '',
  roleId: '',
};

class UserModal extends Component {
  state = {
    modalType: 'add',
    visible: false,
    confirmLoading: false,
    formData: defaultFormData,
  };

  showModal = (type, data) => {
    this.setState({
      modalType: type,
      visible: true,
      formData: data || defaultFormData,
    });
  };

  handleOk = () => {
    this.userForm.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          confirmLoading: true,
        });
        console.log('userinfo:', values);
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
          this.userForm.props.form.setFieldsValue();
        }, 2000);
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    this.userForm.props.form.resetFields();
  };

  render() {
    const {
      visible, confirmLoading, modalType, formData 
    } = this.state;
    return (
      <div>
        <Modal
          title={modalType === 'add' ? '新建' : '编辑'}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <UserForm wrappedComponentRef={(form) => this.userForm = form} originData={formData}></UserForm>
        </Modal>
      </div>
    );
  }
}

export default UserModal;
