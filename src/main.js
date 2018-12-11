// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './default.css'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import App from './App'
import publicFunction from './publicFunction'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.use(MuseUI);
Vue.use(Toast);
Vue.use(publicFunction) // 注册公共方法
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue ({
	el: '#app',
	router,
	components: {App},
	template: '<App/>'
})
