import React, { Component } from 'react';
import {
  Form, Input, Select, Button, DatePicker,
} from 'antd';

import styles from './index.module.scss';

const { Option } = Select;
const { RangePicker } = DatePicker;

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
              {getFieldDecorator('caseNo', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
            <Form.Item label="垫资号" className={styles['labe-width-4']}>
              {getFieldDecorator('advanceNo', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
            <Form.Item label="客户姓名" className={styles['labe-width-4']}>
              {getFieldDecorator('insuranceName', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
            <Form.Item label="联系人手机号" className={styles['labe-width-6']}>
              {getFieldDecorator('contactPhone', {
                rules: [],
              })(
                <Input placeholder="请输入" />,
              )}
            </Form.Item>
          </div>

          <div className="filter-form-line">
            <Form.Item label="申请时间" className={styles['labe-width-4']}>
              {getFieldDecorator('capitalApplyTime', {
                initialValue: '',
                rules: [
                  { type: 'array', message: '请选择时间' }
                ],
              })(
                <RangePicker />,
              )}
            </Form.Item>
            <Form.Item label="服务商" className={styles['labe-width-4']}>
              {getFieldDecorator('spCode', {
                rules: [],
                initialValue: '',
              })(
                <Select>
                  <Option value="">全部</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="业务员" className={styles['labe-width-4']}>
              {getFieldDecorator('clerkId', {
                rules: [],
                initialValue: '',
              })(
                <Select>
                  <Option value="1">全部</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="资金方" className={styles['labe-width-6']}>
              {getFieldDecorator('fundCode', {
                rules: [],
                initialValue: '',
              })(
                <Select>
                  <Option value="">全部</Option>
                </Select>,
              )}
            </Form.Item>
          </div>

          <div className="filter-form-line">
            <Form.Item label="垫资类型" className={styles['labe-width-4']}>
              {getFieldDecorator('capitalType', {
                rules: [],
                initialValue: '',
              })(
                <Select>
                  <Option value="">全部</Option>
                  <Option value="FIRST">首次</Option>
                  <Option value="APPEND">追加</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="垫资状态" className={styles['labe-width-4']}>
              {getFieldDecorator('status', {
                rules: [],
                initialValue: '',
              })(
                <Select>
                  <Option value="">全部</Option>
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
