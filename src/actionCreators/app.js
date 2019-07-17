import { loginApi, getUserInfoApi, logoutApi } from 'api/login.js';
// import { message } from 'antd';
import { setToken } from 'utils/auth';

export const loginAction = (params) => {
  return (dispatch) => {
    return loginApi(params).then(data => {
      const token = data.data.token;
      dispatch({
        type: 'APP.onLogin',
        token: token,
      });
      setToken(token);
    });
  };
};

export const getUserInfoAction = () => {
  return (dispatch) => {
    return getUserInfoApi().then(data => {
      dispatch({
        type: 'APP.setUserInfo',
        payload: data.data,
      });
    });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    return logoutApi().then(() => {
      dispatch({
        type: 'APP.onLogout',
      });
    });
  };
};
