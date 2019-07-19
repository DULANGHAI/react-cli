/**
 * 垫资管理
 */
import requset from 'utils/request';

// 列表接口
export function getListApi({
  queryType,
  caseNo,
  advanceNo,
  insuranceName,
  contactPhone,
  capitalApplyTime,
  spCode,
  clerkId,
  fundCode,
  capitalType,
  status,
  pageSize,
  pageNum,
}) {
  return requset({
    url: '/api/hil/advanceCase/query',
    method: 'post',
    data: {
      queryType,
      caseNo,
      advanceNo,
      insuranceName,
      contactPhone,
      capitalApplyTime,
      spCode,
      clerkId,
      fundCode,
      capitalType,
      status,
      pageSize,
      pageNum,
    }
  });
}
