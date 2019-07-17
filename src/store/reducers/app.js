// import { getToken, setToken, removeToken, } from '@/utils/auth';
import { getToken, removeToken } from 'utils/auth';

const initState = {
  token: getToken(), // token
  userInfo: null, // 当前用户基本信息
  menus: [], // 当前用户所有已授权的菜单
};

const onLogin = (state, { token }) => {
  console.log('1111', token);
  let newState = JSON.parse(JSON.stringify(state));
  newState.token = token;
  return newState;
};

const onLogout = (state) => {
  console.log('2222', state);
  removeToken();
  return {
    token: '',
    userInfo: null,
    menus: [],
  };
};

const setUserInfo = (state, { payload }) => {
  return Object.assign({}, state, {
    userInfo: payload.userInfo,
    menus: payload.menus,
  });
};

const reducerFn = (state = initState, action) => {
  switch (action.type) {
    case 'App.onLogin':
      return onLogin(state, action);
    case 'APP.onLogout': // 退出登录，清除用户信息
      return onLogout(state, action);
    case 'APP.setUserInfo': // 设置用户信息，登录成功时、同步sessionStorage中的用户信息时 触发
      return setUserInfo(state, action);
    default:
      return state;
  }
};

export default reducerFn;
