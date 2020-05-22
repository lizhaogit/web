// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {getRequest, postRequest, putRequest, deleteRequest, uploadFileRequest} from './axios/axios';
import Components from './components'
import "babel-polyfill"

// import Element from 'element-ui'

import api from './util/api.js'

import './style/main.scss'
import './style/animate.css'
import './style/font/iconfont.css'
import 'swiper/dist/css/swiper.min.css'

// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Components);

// Vue.use(Element);

Vue.config.productionTip = false

import Es6Promise from 'es6-promise'

Vue.prototype.get = getRequest;
Vue.prototype.post = postRequest;
Vue.prototype.put = putRequest;
Vue.prototype.delete = deleteRequest;
Vue.prototype.uploadFile = uploadFileRequest;
Vue.prototype.api = api;

require('es6-promise').polyfill()

Es6Promise.polyfill()

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
