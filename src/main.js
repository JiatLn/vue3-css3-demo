import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// ele 3
import element3 from '@/plugins/element3.js';

import LnUI from '@jiatln/lnui';
import '@jiatln/lnui/lib/style.css';

// 全局样式
import '@/styles/index.scss';

createApp(App).use(router).use(store).use(element3).use(LnUI).mount('#app');
