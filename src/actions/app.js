import { loginApi } from 'api/login.js';
import { message } from 'antd';
import { setToken } from 'utils/auth';

export const loginAction = (params = {}) => async dispatch => {
  try {
    const data = await loginApi(params);
    dispatch({
      type: 'APP.onLogin',
      playload: data
    });
    setToken(data.data.token);
    return data;
  } catch (err) {
    message.error('/login 网络错误，请重试');
    return Promise.reject();
  }
};
