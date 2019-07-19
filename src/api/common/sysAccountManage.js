/**
 * 系统账号管理
 */
import requset from 'utils/request';

// 列表接口
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

// 添加用户
export function addUserApi({
  name,
  phone,
  email,
  loginName,
  roleId,
}) {
  return requset({
    url: '/api/user/add',
    method: 'post',
    data: {
      name,
      phone,
      email,
      loginName,
      roleId,
    }
  });
}

// 编辑用户
export function updateUserApi({
  id,
  name,
  phone,
  email,
  loginName,
  roleId,
}) {
  return requset({
    url: '/api/user/update',
    method: 'post',
    data: {
      id,
      name,
      phone,
      email,
      loginName,
      roleId,
    }
  });
}

// 获取角色
export function getRoleApi() {
  return requset({
    url: '/api/role/query4org',
    method: 'post',
  });
}

// 启用用户
export function enableUserApi({ id }) {
  return requset({
    url: '/api/user/enable',
    method: 'post',
    data: {
      id
    }
  });
}

// 禁用用户
export function disableUserApi({ id }) {
  return requset({
    url: '/api/user/disable',
    method: 'post',
    data: {
      id
    }
  });
}
