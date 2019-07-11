import requset from 'utils/request';

export function loginApi(data) {
  return requset({
    url: '/api/api/ops/corpOperApi/login',
    method: 'post',
    data: { loginName: 'platform', pwd: '69c7e2d683248534c173da9768dd4c33', securityCode: '666666' }
  });
}
