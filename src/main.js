import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 2000,  // 递增进度条的速度    
    showSpinner: true, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from , next) => {
	NProgress.start();
	next();
});
router.afterEach(() => {
  NProgress.done()
})
import NavBar from '@/components/navigatorBar';
Vue.component("NavBar",NavBar);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
