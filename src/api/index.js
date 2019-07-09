import requset from 'utils/request';

export function login(data) {
  return requset({
    url: '/api/login',
    method: 'post',
    data
  });
}
