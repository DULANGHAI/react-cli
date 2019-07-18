import React, { Component } from 'react';
import {
  Button, Table, Popconfirm, Spin 
} from 'antd';
import { connect } from 'react-redux';
import FilterForm from './FilterForm/index';
import UserModal from './UserModal/index';

import styles from './index.module.scss';

import { getListApi } from 'api/common/sysAccountManage';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    status: parseInt(Math.random(0, 1) * 2),
  });
}
@connect(
  state => ({
    userInfo: state.app.userInfo,
  })
)
class SysAccountManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      // pagination 配置
      total: 0,
      pageNum: 1,
      pageSize: 10,
      // 表格数据
      data: [],
    };
  }

  componentDidMount() {
    console.log('开始获取数据');
    this.getData();
  }

  getColumns() {
    return [
      {
        title: '用户名称',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '用户手机号',
        width: 150,
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '用户邮箱',
        dataIndex: 'address',
        key: '1',
        width: 150,
      },
      {
        title: '登录账号',
        dataIndex: 'address',
        key: '2',
        width: 150,
      },
      {
        title: '系统角色',
        dataIndex: 'address',
        key: '3',
        width: 150,
      },
      {
        title: '状态',
        dataIndex: 'address',
        key: '4',
        width: 150,
      },
      {
        title: '更新用户',
        dataIndex: 'address',
        key: '5',
        width: 150,
      },
      {
        title: '更新时间',
        dataIndex: 'address',
        key: '6',
        width: 150,
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 200,
        render: (text, record, index) => {
          const statusBtn = record.status ? (
            <Popconfirm title="你确定要停用吗?" onConfirm={() => this.toggleStatus(record.key, 'off')}>
              <span className="theme cursor">停用</span>
            </Popconfirm>
          ) : (
            <Popconfirm title="你确定要启用吗?" onConfirm={() => this.toggleStatus(record.key, 'on')}>
              <span className="theme cursor">启用</span>
            </Popconfirm>
          );
          return (
            <div>
              <span className="theme cursor mar-r-8" onClick={() => this.onEdit(record)}>编辑</span>
              {statusBtn}
            </div>
          );
        },
      },
    ];
  }

  /**
   * pagination 操作
   */
  onSizeChange = (s) => {
    this.setState({
      pageNum: 1,
      pageSize: s,
    }, () => {
      this.getData();
    });
  }

  onCurrentChange = (p) => {
    this.setState({
      pageNum: p,
    }, () => {
      this.getData();
    });
  }
  
  // 点击查询按钮时， 从第一页开始查询
  onSearch = () => {
    this.setState({
      pageNum: 1,
    }, () => {
      this.getData();
    });
  }

  onNewAdd = () => {
    this.userModal.showModal('add');
  }

  onEdit = (data) => {
    console.log(data);
    this.userModal.showModal('edit', {
      userName: 'xxx',
      phone: '123xxxx2121',
      email: '123@qq.com',
      account: 'aaa',
      roleId: '2',
    });
  }

  getData() {
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });
    const filterData = this.filterForm.props.form.getFieldsValue();
    const params = {
      accountType: this.props.userInfo.accountType,
      orgId: this.props.userInfo.orgId,
      ...filterData,
      pageSize: this.state.pageSize,
      pageNum: this.state.pageNum
    };
    console.log('params', params);

    getListApi(params).then(data => {
      console.log('list data', data);
      this.setState({
        data: res.data,
        total: res.total
      });
    }).finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const {
      total, pageNum, pageSize, data 
    } = this.state;
    return ( 
      <div className={styles['sys-account-manage']}>
        <Spin spinning={this.state.loading} size="large">
          {/* 筛选条件 */}
          <FilterForm wrappedComponentRef={(form) => this.filterForm = form} onSearch={this.onSearch}></FilterForm>
          {/* 添加按钮 */}
          <div className={styles['add-button-container']}>
            <Button type="primary" icon="plus" onClick={this.onNewAdd}>
              新增
            </Button>
          </div>
          {/* 表格 */}
          <Table
            columns={this.getColumns()}
            dataSource={data}
            scroll={{ x: 1350 }}
            pagination={{
              total: total,
              current: pageNum,
              pageSize: pageSize,
              hideOnSinglePage: true,
              showSizeChanger: true,
              showQuickJumper: true,
              onChange: (page, pageSize) => { this.onCurrentChange(page); },
              onShowSizeChange: (current, size) => { this.onSizeChange(size); },
            }}
          />
        </Spin>

        <UserModal ref={(userModal) => this.userModal = userModal}></UserModal>
      </div>
    );
  }
}
 
export default SysAccountManage;
