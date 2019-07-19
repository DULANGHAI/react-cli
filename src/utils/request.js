import axios from 'axios';
import { getToken } from './auth';
import { Modal, message as Message } from 'antd';
import store from 'store/index';
import { logoutAction } from 'actionCreators/app';

const { confirm } = Modal;

// create an axios instance
const service = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 15 * 1000
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.token = getToken();
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data || {};
    const message = res.resultMessage || res.message;
    const code = res.resultCode || res.code;
    if (code !== '000000') {
      if (code === 'TIME_OUT' && window.location.pathname.indexOf('/login') === -1) {
        confirm({
          title: '提示',
          content: '您已被登出，请重新登录',
          cancelButtonProps: {
            hidden: true,
          },
          onOk() {
            store.dispatch(logoutAction());
          },
          onCancel() { },
        });
      } else {
        Message.error(message);
      }
      return Promise.reject(new Error(message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    console.log(error); // for debug
    Message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
