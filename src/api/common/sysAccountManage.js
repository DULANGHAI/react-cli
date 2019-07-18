import requset from 'utils/request';

export function getListApi({
  accountType,
  orgId,
  name,
  loginName,
  status,
  pageSize,
  pageNum,
}) {
  return requset({
    url: '/api/user/queryAdminAccount',
    method: 'post',
    data: {
      accountType,
      orgId,
      name,
      loginName,
      status,
      pageSize,
      pageNum,
    }
  });
}

export function addUserApi({
  accountType,
  orgId,
  name,
  loginName,
  status,
}) {
  return requset({
    url: '/api/user/add',
    method: 'post',
    data: {
      accountType,
      orgId,
      name,
      loginName,
      status,
    }
  });
}

export function getRoleApi({
  accountType,
  orgId,
  name,
  loginName,
  status,
}) {
  return requset({
    url: '/api/role/query4org',
    method: 'post',
    data: {
      accountType,
      orgId,
      name,
      loginName,
      status,
    }
  });
}
