import requset from 'utils/request';

export function loginApi({ loginName, loginPwd }) {
  return requset({
    url: '/api/user/login',
    method: 'post',
    data: {
      loginName,
      loginPwd
    }
  });
}

export function getUserInfoApi() {
  return requset({
    url: '/api/api/ops/corpOperApi/login',
    method: 'post',
    data: { loginName: 'platform', pwd: '69c7e2d683248534c173da9768dd4c33', securityCode: '666666' }
  });
}
