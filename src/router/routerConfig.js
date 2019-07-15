import Loadable from 'react-loadable';
import Loading from 'components/Loading';

/**
 * 里面只放需登录后访问的路由
 * component：组件地址
 * key可能没用了，我在Menu组件里用的path做key
 */
const routes = [
  {
    key: 'home',
    path: '/home',
    icon: 'desktop',
    title: 'home',
    component: () => import('pages/home')
  },
  {
    key: 'sysAccountManage',
    path: '/sysAccountManage',
    icon: 'inbox',
    title: '系统账号管理',
    component: () => import('pages/sysAccountManage'),
    // routes: [
    //   {
    //     key: 'sysAccountManage-home',
    //     path: '/sysAccountManage/home',
    //     icon: 'desktop',
    //     title: 'sysAccountManage-home',
    //     component: () => import('pages/home')
    //   },
    //   {
    //     key: 'sysAccountManage-sysAccountManage',
    //     path: '/sysAccountManage/sysAccountManage',
    //     icon: 'inbox',
    //     title: 'sysAccountManage-sysAccountManage',
    //     component: () => import('pages/sysAccountManage')
    //   },
    // ]
  },
  {
    key: 'adMoneyManage',
    path: '/adMoneyManage',
    icon: 'inbox',
    title: '垫资管理',
    component: () => import('pages/adMoneyManage'),
  },
];


function format(routes) {
  routes.forEach(route => {
    if (route.routes) {
      route.routes = format(route.routes);
    }
    route.component = Loadable({
      loader: route.component,
      loading: Loading,
    });
    route.exact = true;
  });
  return routes;
}

const resultRoutes = format(routes);

export default resultRoutes;
