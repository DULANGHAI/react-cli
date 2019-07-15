import React, { Component } from 'react';
import {
  Form, Input, Select, Button
} from 'antd';

import styles from './index.module.scss';

const { Option } = Select;

@Form.create({
  name: 'filterForm'
})
class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  reset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator, } = this.props.form;
    const { onSearch } = this.props;

    return (
      <div className="filter-form">
        <Form colon={false} layout="inline" className={styles['form-class']}>
          <div className="filter-form-line">
            <Form.Item label="案件号" className={styles['labe-width-4']}>
              {getFieldDecorator('item1', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
            <Form.Item label="垫资号" className={styles['labe-width-4']}>
              {getFieldDecorator('item2', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
            <Form.Item label="客户姓名" className={styles['labe-width-4']}>
              {getFieldDecorator('item3', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
            <Form.Item label="联系人手机号" className={styles['labe-width-6']}>
              {getFieldDecorator('item4', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
          </div>

          <div className="filter-form-line">
            <Form.Item label="申请时间" className={styles['labe-width-4']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '1',
              })(
                <Select>
                  <Option value="1">全部</Option>
                  <Option value="2">启用</Option>
                  <Option value="3">停用</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="服务商" className={styles['labe-width-4']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '1',
              })(
                <Select>
                  <Option value="1">全部</Option>
                  <Option value="2">启用</Option>
                  <Option value="3">停用</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="业务员" className={styles['labe-width-4']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '1',
              })(
                <Select>
                  <Option value="1">全部</Option>
                  <Option value="2">启用</Option>
                  <Option value="3">停用</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="资金方" className={styles['labe-width-6']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '1',
              })(
                <Select>
                  <Option value="1">全部</Option>
                  <Option value="2">启用</Option>
                  <Option value="3">停用</Option>
                </Select>,
              )}
            </Form.Item>
          </div>

          <div className="filter-form-line">
            <Form.Item label="垫资类型" className={styles['labe-width-4']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '1',
              })(
                <Select>
                  <Option value="1">全部</Option>
                  <Option value="2">启用</Option>
                  <Option value="3">停用</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="垫资状态" className={styles['labe-width-4']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '1',
              })(
                <Select>
                  <Option value="1">全部</Option>
                  <Option value="2">启用</Option>
                  <Option value="3">停用</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item style={{ width: '231px' }}></Form.Item>
            {/* <Form.Item className="tar">
              
            </Form.Item> */}
            <div style={{ width: '259px' }} className="tar">
              <Button type="primary" className="mar-r-12" onClick={onSearch}>查询</Button>
              <Button className="mar-r-12" onClick={this.reset}>重置</Button>
              <Button>导出</Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default FilterForm;
