import { loginApi, getUserInfoApi, logoutApi } from 'api/login.js';
// import { message } from 'antd';
import { setToken } from 'utils/auth';

export const loginAction = (params) => async dispatch => {
  try {
    const data = await loginApi(params);
    const token = data.data.token || '';
    console.error('token', token, data);
    await dispatch({
      type: 'APP.onLogin',
      token,
    });
    console.error('end===', token, data);
    setToken(token);
    return data;
  } catch (err) {
    return Promise.reject();
  }
};

export const getUserInfoAction = () => async dispatch => {
  try {
    const data = await getUserInfoApi();
    dispatch({
      type: 'APP.setUserInfo',
      payload: data.data,
    });
    return data;
  } catch (err) {
    return Promise.reject();
  }
};

export const logoutAction = () => async dispatch => {
  try {
    const data = await logoutApi();
    dispatch({
      type: 'APP.onLogout',
    });
    return data;
  } catch (err) {
    return Promise.reject();
  }
};
