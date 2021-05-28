const requireContext = import.meta.glob('../views/css3demo/*.vue');

// const requireContext = require.context('../views/css3demo', true, /.*\.vue$/);
// const componentTmpl = requireContext
//   .keys()
//   .map((file) => [file.replace(/(^.\/)|(\.vue$)/g, ''), () => requireContext(file)])
//   .reduce((components, [name, component]) => {
//     components[name.split('/').slice(-1)[0]] = component().default || component();
//     return components;
//   }, {});

const childRoutes = Object.keys(requireContext)
  .map((fullPath) => {
    return [
      fullPath,
      fullPath
        .replace(/(^..\/)|(\.vue$)/g, '')
        .split('/')
        .slice(-1)[0],
    ];
  })
  .map(([fullPath, filename]) => {
    return {
      path: `/${filename}`,
      component: requireContext[fullPath],
      name: filename.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()), // 首字母大写
      meta: { title: filename, icon: 'el-icon-collection-tag' },
    };
  });

// const childRoutes = [
//   {
//     path: 'demo1',
//     component: () => import('@/views/css3demo/demo1.vue'),
//     name: 'demo1',
//     meta: { title: '水瓶', icon: 'el-icon-ship' },
//   },
//   {
//     path: 'demo2',
//     component: () => import('@/views/css3demo/demo2.vue'),
//     name: 'demo2',
//     meta: { title: '窗户', icon: 'el-icon-collection-tag' },
//   },
//   {
//     path: 'demo3',
//     component: () => import('@/views/css3demo/demo3.vue'),
//     name: 'demo3',
//     meta: { title: 'Vue logo', icon: 'el-icon-collection-tag' },
//   },
//   {
//     path: 'demo4',
//     component: () => import('@/views/css3demo/demo4.vue'),
//     name: 'demo4',
//     meta: { title: '摇动的心', icon: 'el-icon-collection-tag' },
//   },
//   {
//     path: 'demo5',
//     component: () => import('@/views/css3demo/demo5.vue'),
//     name: 'demo5',
//     meta: { title: '一个按钮效果', icon: 'el-icon-collection-tag' },
//   },
//   {
//     path: 'demo6',
//     component: () => import('@/views/css3demo/demo6.vue'),
//     name: 'demo6',
//     meta: { title: 'CSS @Property', icon: 'el-icon-collection-tag' },
//   },
//   {
//     path: 'demo7',
//     component: () => import('@/views/css3demo/demo7.vue'),
//     name: 'demo7',
//     meta: { title: '仿饿了么', icon: 'el-icon-collection-tag' },
//   },
// ];

export default childRoutes;
