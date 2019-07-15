import React, { Component } from 'react';
import { Table, Spin, } from 'antd';
import FilterForm from './FilterForm/index';
import DetailDrawer from './DetailDrawer/index.js';

import styles from './index.module.scss';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

class AdMoneyManage extends Component {
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
    this.getData();
  }

  getColumns() {
    return [
      {
        title: '案件号',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '垫付号',
        width: 150,
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '保单号',
        dataIndex: 'address',
        key: '1',
        width: 150,
      },
      {
        title: '出险医院',
        dataIndex: 'address',
        key: '2',
        width: 150,
      },
      {
        title: '医院所属省市',
        dataIndex: 'address',
        key: '3',
        width: 150,
      },
      {
        title: '出险原因',
        dataIndex: 'address',
        key: '4',
        width: 150,
      },
      {
        title: '住院时间',
        dataIndex: 'address',
        key: '5',
        width: 150,
      },
      {
        title: '联系人手机号',
        dataIndex: 'address',
        key: '6',
        width: 150,
      },
      {
        title: '申请时间',
        dataIndex: 'address',
        key: '7',
        width: 150,
      },
      {
        title: '服务商',
        dataIndex: 'address',
        key: '8',
        width: 150,
      },
      {
        title: '业务员',
        dataIndex: 'address',
        key: '9',
        width: 150,
      },
      {
        title: '借款人',
        dataIndex: 'address',
        key: '10',
        width: 150,
      },
      {
        title: '申请垫资金额（元）',
        dataIndex: 'address',
        key: '11',
        width: 150,
      },
      {
        title: '垫资类型',
        dataIndex: 'address',
        key: '12',
        width: 150,
      },
      {
        title: '资金方',
        dataIndex: 'address',
        key: '13',
        width: 150,
      },
      {
        title: '垫资状态',
        dataIndex: 'address',
        key: '14',
        width: 150,
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (text, record, index) => {
          return (
            <div>
              <span className="theme cursor mar-r-8" onClick={() => this.viewDetail(record)}>垫资详情</span>
            </div>
          );
        },
      },
    ];
  }

  getData() {
    this.setState({
      loading: true,
    });
    const filterData = this.filterForm.props.form.getFieldsValue();
    const params = {
      ...filterData,
      pageSize: this.state.pageSize,
      pageNum: this.state.pageNum
    };
    console.log('params', params);

    setTimeout(() => {
      this.setState({
        data: data,
        total: 100,
        loading: false
      });
    }, 1000);
    // CommonApi.queryRepayPlan({
    //   ...this.ruleForm,
    //   pageSize: this.state.pageSize,
    //   pageNum: this.state.pageNum
    // }).then(res => {
    //   this.setState({
    //     data: res.data,
    //     total: res.total
    //   })
    // }).finally(() => {
    //   this.setState({
    //     loading: false,
    //   })
    // })
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

  viewDetail = (data) => {
    this.detailDrawer.showDrawer();
  }

  render() {
    const {
      total, pageNum, pageSize, data
    } = this.state;
    return (
      <div className={styles['ad-money-manage']}>
        <Spin spinning={this.state.loading} size="large">
          {/* 筛选条件 */}
          <div className={styles['filter-container']}>
            <FilterForm wrappedComponentRef={(form) => this.filterForm = form} onSearch={this.onSearch}></FilterForm>
          </div>
          {/* 表格 */}
          <Table
            columns={this.getColumns()}
            dataSource={data}
            scroll={{ x: 2450 }}
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

          <DetailDrawer ref={(detailDrawer) => this.detailDrawer = detailDrawer}></DetailDrawer>
        </Spin>
      </div>
    );
  }
}
 
export default AdMoneyManage;
