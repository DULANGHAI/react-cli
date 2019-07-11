import { loginApi } from 'api/index.js';
import { message } from 'antd';

export const loginAction = (params = {}) => async dispatch => {
  try {
    const data = await loginApi(params);
    dispatch({
      type: 'APP.onLogin',
      playload: data
    });
    return data;
  } catch (err) {
    message.error('/login 网络错误，请重试');
    return null;
  }
};
