<template>
  <div>
    <div class="slide">
      <div class="swiper-container" id="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./../../static/images/img_banner01.jpg" alt="">
            <div class="swiper-slide-content one">
              <img class="wow-swiper animated fadeInRightBig" src="./../../static/images/dajaixinfu-logo.png" alt="">
              <ul>
                <h1 data-wow-delay="0.1s" class="wow-swiper animated fadeInRightBig">大家信夫</h1>
                <h4 data-wow-delay="0.2s" class="wow-swiper animated fadeInRightBig">一站式信用服务平台</h4>
                <li data-wow-delay="0.3s" class="wow-swiper animated fadeInRightBig">
                  <router-link tag="a" :to="{path:'/manageConsulting',query:{menu:'产品服务',submenu:'信用管理咨询'}}"
                               target="_blank">
                    <button type="button" class="understand">了解详情</button>
                  </router-link>
                  <a href="http://www.dajiaxinfu.com" target="_blank">
                    <button type="button" class="get-into">进入大家信夫平台</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="swiper-slide"><img src="./../../static/images/img_banner02.jpg" alt="">
            <div class="swiper-slide-content two">
              <ul>
                <h1 data-wow-delay="0.1s" class="wow-swiper animated fadeInRightBig">信用顾问咨询</h1>
                <h4 data-wow-delay="0.2s" class="wow-swiper animated fadeInRightBig">一站式咨询服务</h4>
              </ul>
              <li>
                <router-link tag="a" :to="{path:'/consultantConsultation',query:{menu:'产品服务',submenu:'信用顾问咨询'}}"
                             target="_blank">
                  <button data-wow-delay="0.3s" class="wow-swiper animated fadeInRightBig get-into" type="button">了解详情
                  </button>
                </router-link>
              </li>
            </div>
          </div>
          <div class="swiper-slide"><img src="./../../static/images/img_banner03.jpg" alt="">
            <div class="swiper-slide-content three">
              <ul>
                <h1 data-wow-delay="0.1s" class="wow-swiper animated fadeInRightBig">信息咨询服务</h1>
                <h4 data-wow-delay="0.2s" class="wow-swiper animated fadeInRightBig">融资策划咨询<i class="shu"></i>银行信贷咨询<i
                  class="shu"></i>IT信息查询<i class="shu"></i>广告信息查询</h4>
              </ul>
              <li>
                <router-link tag="a" :to="{path:'/infoConsultationService',query:{menu:'产品服务',submenu:'信息咨询服务'}}"
                             target="_blank">
                  <button data-wow-delay="0.3s" class="wow-swiper animated fadeInRightBig get-into" type="button">了解详情
                  </button>
                </router-link>
              </li>
            </div>
          </div>
          <div class="swiper-slide"><img src="./../../static/images/img_banner04.jpg" alt="">
            <div class="swiper-slide-content four">
              <ul>
                <li>
                  <router-link tag="a" :to="{path:'/infoConsultation',query:{menu:'产品服务',submenu:'第三方征信服务'}}"
                               target="_blank">
                    <button data-wow-delay="0.3s" class="wow-swiper animated fadeInRightBig get-into" type="button">了解详情
                    </button>
                  </router-link>
                </li>
                <h1 data-wow-delay="0.1s" class="wow-swiper animated fadeInRightBig">第三方征信服务</h1>
                <h4 data-wow-delay="0.2s" class="wow-swiper animated fadeInRightBig">针对目标企业的信用信息征集、调查和咨询服务</h4>
              </ul>
            </div>
          </div>
        </div>
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="width modular">
      <ul class="modular-name">
        <li>新闻动态</li>
        <li>NEWS</li>
      </ul>
    </div>
    <div class="width">
      <div class="new">
        <div class="new-body" v-if="industry.length>0">
          <div class="new-body-item">
            <li class="item-title"><span>行业资讯</span>
              <router-link tag="a" target="_blank" :to="{name:'informationLink',query:{menu:'新闻中心',submenu:'行业资讯'}}">
                <font>MORE</font>
              </router-link>
            </li>
            <div class="item-img">
              <img
                :src="industry[0].news_centres_image===null?'./../../static/images/new1.png':industry[0].news_centres_image"
                alt="">
            </div>
            <ul class="new-list">
              <li v-for="item in industry">
                <router-link tag="a" target="_blank"
                             :to="{name:'detailsLink',query:{menu:'新闻中心',submenu:'行业资讯',type:2,id:item.news_centres_id,url:'/information?menu=新闻中心&submenu=行业资讯&page=1'}}">
                  {{item.news_centres_title | intercept}}
                </router-link>
                <span>{{item.news_centres_time | formatDate}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="new-body" v-if="policies.length>0">
          <div class="new-body-item">
            <li class="item-title"><span>政策法规</span>
              <router-link tag="a" target="_blank" :to="{name:'policyLink',query:{menu:'新闻中心',submenu:'政策法规'}}">
                <font>MORE</font>
              </router-link>
            </li>
            <div class="item-img">
              <img
                :src="policies[0].news_centres_image===null?'./../../static/images/new2.png':policies[0].news_centres_image"
                alt="">
            </div>
            <ul class="new-list">
              <li v-for="item in policies">
                <router-link tag="a" target="_blank"
                             :to="{name:'detailsLink',query:{menu:'新闻中心',submenu:'政策法规',type:3,id:item.news_centres_id,url:'/policy?menu=新闻中心&submenu=政策法规&page=1'}}">
                  {{item.news_centres_title | intercept}}
                </router-link>
                <span>{{item.news_centres_time | formatDate}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="width modular">
      <ul class="modular-name">
        <li>品牌优势</li>
        <li>ADVANTAGES</li>
      </ul>
    </div>
    <div class="width">
      <div class="brand">
        <div class="brand-item">
          <div class="brand-item-body">
            <img src="./../../static/images/img_main_icon01.png" alt="">
            <li>独特模式</li>
            <li>Unique Mode</li>
            <div class="wow1 pattern animated bounceInLeft"></div>
          </div>
        </div>
        <div class="brand-item">
          <div class="brand-item-body">
            <img src="./../../static/images/img_main_icon02.png" alt="">
            <li>商务信用</li>
            <li>Business Credit</li>
            <div class="wow1 credit animated bounceInDown"></div>
          </div>
        </div>
        <div class="brand-item">
          <div class="brand-item-body">
            <img src="./../../static/images/img_main_icon03.png" alt="">
            <li>优秀团队</li>
            <li>Excellent Team</li>
            <div class="wow1 team animated bounceInRight"></div>
          </div>
        </div>
        <div class="brand-item">
          <div class="brand-item-body">
            <img src="./../../static/images/img_main_icon04.png" alt="">
            <li>资源整合</li>
            <li>Resource Integration</li>
            <div class="wow1 resource animated bounceInUp"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="width modular">
      <ul class="modular-name">
        <li>合作伙伴</li>
        <li>COOPERATION</li>
      </ul>
    </div>
    <div class="width">
      <div class="partner">
        <div class="partner-item"><img src="./../../static/images/img_main_logo01.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo02.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo03.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo04.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo05.jpg" alt=""></div>
        <!--<div class="partner-item"><img src="./../../static/images/img_main_logo06.jpg" alt=""></div>-->
        <div class="partner-item"><img src="./../../static/images/img_main_logo07.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo08.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo09.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo10.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo11.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo12.jpg" alt=""></div>
        <div class="partner-item"><img src="./../../static/images/img_main_logo13.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper.js'
  import {WOW} from 'wowjs'
  import {formatDate} from './../util/util.js'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        pageSize: 5,
        cretit: [],
        industry: [],
        policies: [],
        analysis: [],

      }
    },
    methods: {
      getData(type, module) {
        var _this = this
        this.get(this.api.news, {
          type: type,
          pageSize: this.pageSize,
          offset: this.page
        }).then(function (data) {
          if (data.status === 200) {
            if (data.data.code === 200) {
              _this[module] = data.data.data.items
            } else {
              _this.$message.error(data.data.data.message)
            }
          }
        }).catch(function (err) {

        })
      }
    },
    mounted() {
      this.getData('2', 'industry')
      this.getData('3', 'policies')
      var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        // autoplay: false,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        on: {
          slideChange: function () {
            var wow = new WOW({
              boxClass: 'wow-swiper',
              live: false,
            });
            wow.init();
          },
        },
      });

      var comtainer = document.getElementById('swiper-container');
      comtainer.onmouseenter = function () {
        swiper.autoplay.stop();
      };
      // 鼠标离开 继续轮播
      comtainer.onmouseleave = function () {
        swiper.autoplay.start();
      }

      new WOW({
        live: false,
        boxClass: 'wow1',
      }).init();

    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        if (time == null) {
          return '-'
        } else {
          return formatDate(date, 'yyyy/MM/dd');
        }
      },
      intercept(string) {
        let len = 0;
        string = string.replace(/<().*?>/g, '')

        if (!!string) {
          for (var i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) > 127 || string.charCodeAt(i) == 94) {
              len += 2
            } else {
              len += 1
            }
          }
          if (string.length > 22) {
            string = string.substring(0, 22)
            string += '...'
          }
        }
        return string
      }
    }
  }

</script>
<style scoped lang="scss">
  .slide {
    position: relative;


    .swiper-slide {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      font-size: 0px;

      & > img {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }

      &:hover {
        & > img {
          transform: scale(1.2);
        }
      }


      h1 {
        font-size: 3rem;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: 4px;
        margin: 10px;
      }

      h4 {
        font-weight: 500;
        font-size: 1.8rem;
        color: #ffffff;
        margin: 10px;
        letter-spacing: 4px;
      }

      button {
        height: 60px;
        line-height: 60px;
        padding: 0 40px;
        border-radius: 30px;
        border: none;
        color: #ffffff;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .swiper-slide-content {
        position: absolute;
        z-index: 10000000;
        width: 1200px;
        left: 50%;
        margin-left: -500px;
        top: 0;
        bottom: 0;
      }

      .one {
        img {
          position: absolute;
          top: 50%;
          margin-top: -130px;
          left: 100px;
        }

        ul {
          position: absolute;
          top: 50%;
          left: 40%;
          margin-top: -107px;

          h4 {
            margin-top: 20px;
            margin-bottom: 50px;
          }

          li {
            .understand {
              background-color: #29abe2;

              &:hover {
                background-color: #2fb8f2;
              }

              &:active {
                background-color: #08acda;
              }
            }

            .get-into {
              background-color: #29e363;
              margin-left: 40px;

              &:hover {
                background-color: #3df275;
              }

              &:active {
                background-color: #2ec741;
              }
            }

          }
        }
      }

      .two {
        ul {
          position: absolute;
          width: 100%;
          text-align: center;
          top: 15%;
        }

        li {
          position: absolute;
          bottom: 30%;
          width: 100%;
          text-align: right;

          button {
            background-color: #52da3f;
            margin-right: 10rem;
            padding: 0 50px;

            &:hover {
              background-color: #68eb56;
            }

            &:active {
              background-color: #3fbf2d;
            }
          }
        }
      }

      .three {
        ul {
          width: 100%;
          margin-top: 10rem;

          h4 {
            i {
              margin: 0 20px;

              &:before {
                content: '';
                height: 1.8rem;
                border-left: 2px solid #ffffff;
              }
            }
          }
        }

        li {
          position: absolute;
          bottom: 50px;
          width: 100%;
          text-align: right;
          right: 60px;

          button {
            background-color: #126fed;
            padding: 0 50px;

            &:hover {
              background-color: #1377ff;
            }

            &:active {
              background-color: #0e64d9;
            }
          }
        }
      }

      .four {
        ul {
          position: absolute;
          width: 100%;
          bottom: 90px;

          li {
            margin-bottom: 40px;
            width: 100%;
            text-align: right;

            button {
              background-color: #f08d29;
              padding: 0 50px;

              &:hover {
                background-color: #ff8b15;
              }

              &:active {
                background-color: #e18222;
              }
            }
          }

          h4 {
            padding-left: 200px;
          }
        }
      }
    }
  }

  .new {
    display: flex;
  }

  .new-body {
    flex: 1;
    max-width: 600px;
    padding: 0 15px;
  }

  .new-body-item {
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 1.125rem;

    .item-img {
      overflow: hidden;
      font-size: 0;
      height: 320px;

      img {
        width: 100%;
        height: 320px;
        transition: all 0.6s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .item-title {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    display: flex;

    span {
      color: #414351;
      font-weight: 600;
    }

    font {
      color: #414351;
      border-bottom: 1px solid #414351;

      &:hover {
        color: #126fed;
        border-bottom: 1px solid #126fed;
      }
    }
  }

  .item-title a {
    margin-left: auto;
    color: #414351;
  }

  .new-list li {
    height: 80px;
    line-height: 80px;
    padding: 0 30px;
    display: flex;

    &:nth-child(2n+1) {
      background-color: #fcfcfc;
    }
  }

  .new-list li a {
    color: #414351;
    font-size: 1rem;

    &:hover {
      color: #126fed;
    }
  }

  .new-list li span {
    margin-left: auto;
    font-size: .8rem;
    color: #C0C4CC;
  }

  .brand {
    display: flex;
  }

  .brand-item {
    flex: 0.25;
    padding: 10px;
  }

  .brand-item-body {
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    height: 230px;
    text-align: center;
    position: relative;

    img {
      margin: 10px 0;
    }

    li:nth-of-type(2) {
      color: #b8c9d0;

      &:last-of-type {
        margin-top: 5px;
      }
    }

  }

  .brand-item-body div {
    position: absolute;
    background-color: #126eed;
  }

  .brand-item-body .pattern {
    width: 100px;
    height: 20px;
    bottom: -10px;
    left: 40px;
  }

  .brand-item-body .credit {
    width: 20px;
    height: 100px;
    top: -10px;
    left: 40px;
  }

  .brand-item-body .team {
    width: 100px;
    height: 20px;
    bottom: -10px;
    right: 40px;
  }

  .brand-item-body .resource {
    width: 20px;
    height: 100px;
    bottom: -10px;
    right: 40px;
  }

  .partner {
    flex-wrap: wrap;
    padding-bottom: 30px;
    font-size: 0;
  }

  .partner-item {
    padding: 0 10px;
    display: inline-block;
    width: 280px;

  }

  .partner-item img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .5s;
    -webkit-transition: all .5s;
    -ms-transition: all .5s;

    &:hover {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
      transform: translateY(-10px);
      box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }


</style>
