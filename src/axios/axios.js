import axios from 'axios';

// import { getStore, setStore } from './storage';
// import { router } from '../router/index';

// import Cookies from 'js-cookie';
// import Main from '@/views/Main.vue';
// 统一请求路径前缀
let base = '';
// 超时设定
axios.defaults.timeout = 10000;

// 请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.resolve(err);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  // 根据返回的code值来做不同的处理(和后端约定)
  return response;
}, (err) => { // 这里是返回状态码不为200时候的错误处理

  return Promise.resolve(err);
});

export const getRequest = (url, params) => {
  // let accessToken = getStore('accessToken');
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    headers: {
      // 'accessToken': accessToken
    }
  });
};

export const postRequest = (url, params) => {
  // let accessToken = getStore("accessToken");
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'accessToken': accessToken
    }
  });
};

export const putRequest = (url, params) => {
  // let accessToken = getStore("accessToken");
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'accessToken': accessToken
    }
  });
};

export const deleteRequest = (url, params) => {
  // let accessToken = getStore('accessToken');
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params,
    headers: {
      // 'accessToken': accessToken
    }
  });
};

export const uploadFileRequest = (url, params) => {
  // let accessToken = getStore('accessToken');
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
