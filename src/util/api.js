/*
 * API 接口地址
 */

// const process.env.API_ROOT = "http://192.168.0.118:8004";

const api = {
  news: process.env.API_ROOT + '/Page/officialwebsite/findNewsCentresPageInfoByType',//新闻列表
  newsInfo: process.env.API_ROOT + '/officialwebsite/findNewsCentresDetails',//新闻详情
  hotNews: process.env.API_ROOT + '/officialwebsite/findPopularNewsByType',//热门新闻
  leaveMessage: process.env.API_ROOT + '/officialwebsite/addOpinionMessage',//留言
  upload: process.env.API_ROOT + '/upload',//上传
}


export default api;
