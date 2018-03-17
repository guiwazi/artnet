import Vue from 'vue'
import App from './App'
// 路由
import router from './router'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// jquery引入
import $ from 'jquery'
// vue 国际化
import VueI18n from 'vue-i18n'
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(ElementUI)
// Vue.config.productionTip = false

/* eslint-disable no-new */
const i18n = new VueI18n({
    locale: 'zh-CN',
    //this.$i18n.locale
    messages: {
      'zh-CN': require('./common/lang/zh'),
      'en-US': require('./common/lang/en')
    }
})
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

