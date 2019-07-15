import React, { Component } from 'react';

import commonStyles from '../common.module.scss';
import styles from './index.module.scss';

class ApplyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={styles['anchor-title']}>垫资申请信息</div>
        <div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>被保险人名称</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>出险医院</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>出险医院所属省市</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>出险原因</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>祝愿日期</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>借款人是被保险人</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>其他关系说明</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>借款人姓名</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>借款人证件类型</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>借款人证件号</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>借款人到期日</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>借款人手机号</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>医院预交金额(元)</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>申请垫资金额(元)</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>被保险人社保账号</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>社保所在地</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>被保险人既往病情</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>备注说明</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
          <div className={commonStyles['info-item']}>
            <div className={commonStyles['item-label']}>医院是否实时结算</div>
            <div className={commonStyles['item-content']}>123</div>
          </div>
        </div>

        <div className={styles['anchor-title']}>垫资申请资料</div>
      </div>
    );
  }
}
 
export default ApplyInfo;
