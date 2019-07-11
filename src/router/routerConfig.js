import Loadable from 'react-loadable';
import Loading from 'components/Loading';

/**
 * 里面只放需登录后访问的路由
 * component：组件地址
 */
const routes = [
  {
    key: 'home',
    path: '/home',
    icon: 'desktop',
    component: () => import('pages/home')
  },
  {
    key: 'welcome',
    path: '/welcome',
    icon: 'inbox',
    component: () => import('pages/welcome'),
    routes: [
      {
        key: 'welcome-home',
        path: '/welcome/home',
        icon: 'desktop',
        component: () => import('pages/home')
      },
      {
        key: 'welcome-welcome',
        path: '/welcome/welcome',
        icon: 'inbox',
        component: () => import('pages/welcome')
      },
    ]
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
  });
  return routes;
}

const resultRoutes = format(routes);

export default resultRoutes;
