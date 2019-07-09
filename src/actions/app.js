import { login } from 'api/index.js';
import { message } from 'antd';

export const onLogin = (params = {}) => async dispatch => {
  try {
    const data = await login(params);
    dispatch({
      type: 'APP.login',
      playload: data
    });
    return data;
  } catch (err) {
    message.error('apibubuji /login 网络错误，请重试');
    return null;
  }
};
