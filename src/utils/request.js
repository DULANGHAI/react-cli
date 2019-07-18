import axios from 'axios';
import { getToken } from './auth';
import { message as Message } from 'antd';

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
      Message.error(message);
      return Promise.reject(new Error(res.message || 'Error'));
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
