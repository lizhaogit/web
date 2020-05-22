<template>
  <header>
    <div class="logo">
      <img src="./../../../static/images/main-logo.png" alt="">
      <ul>
        <li>北京君乐联科技有限公司</li>
        <li>Beijing JLL Technology Co., Ltd</li>
      </ul>
    </div>
    <nav>
      <ul>
        <router-link tag="a" :to="{path:'/'}">
          <li class="menu" :class="{active:$route.path==='/'}">网站首页
            <div class="animated zoomIn border"></div>
          </li>
        </router-link>
        <router-link tag="li" :to="{name:'synopsisLink',query:{menu:'公司介绍',submenu:'公司简介'}}" class="menu"
                     :class="{active:$route.query.menu==='公司介绍'}">公司介绍
          <div class="animated zoomIn border"></div>
          <ul class="sonMenu">
            <div class="background"></div>
            <router-link tag="a" :to="{name:'synopsisLink',query:{menu:'公司介绍',submenu:'公司简介'}}">
              <li>公司简介</li>
            </router-link>
            <router-link tag="a" :to="{name:'teamLink',query:{menu:'公司介绍',submenu:'组织架构'}}">
              <li>组织架构</li>
            </router-link>
            <router-link tag="a" :to="{name:'cultureLink',query:{menu:'公司介绍',submenu:'企业文化'}}">
              <li>企业文化</li>
            </router-link>
          </ul>
        </router-link>
        <router-link tag="li" :to="{name:'informationLink',query:{menu:'新闻中心',submenu:'行业资讯'}}" class="menu"
                     :class="{active:$route.query.menu==='新闻中心'}">新闻中心
          <div class="animated zoomIn border"></div>
          <ul class="sonMenu">
            <div class="background"></div>
            <router-link tag="a" :to="{name:'informationLink',query:{menu:'新闻中心',submenu:'行业资讯'}}">
              <li>行业资讯</li>
            </router-link>
            <router-link tag="a" :to="{name:'policyLink',query:{menu:'新闻中心',submenu:'政策法规'}}">
              <li>政策法规</li>
            </router-link>
            <router-link tag="a" :to="{name:'analysisLink',query:{menu:'新闻中心',submenu:'专家解读'}}">
              <li>专家解读</li>
            </router-link>
            <router-link tag="a" :to="{name:'dynamicLink',query:{menu:'新闻中心',submenu:'信用文化'}}">
              <li>信用文化</li>
            </router-link>
          </ul>
        </router-link>
        <router-link tag="li" :to="{name:'consultantConsultationLink',query:{menu:'产品服务',submenu:'信用顾问咨询'}}"
                     class="menu" :class="{active:$route.query.menu==='产品服务'}">产品服务
          <div class="animated zoomIn border"></div>
          <ul class="sonMenu">
            <div class="background"></div>
            <router-link tag="a"
                         :to="{name:'consultantConsultationLink',query:{menu:'产品服务',submenu:'信用顾问咨询'}}">
              <li>信用顾问咨询</li>
            </router-link>
            <router-link tag="a"
                         :to="{name:'manageConsultingLink',query:{menu:'产品服务',submenu:'信用管理咨询'}}">
              <li>信用管理咨询</li>
            </router-link>
            <router-link tag="a"
                         :to="{name:'infoConsultationServiceLink',query:{menu:'产品服务',submenu:'信息咨询服务'}}">
              <li>信息咨询服务</li>
            </router-link>
            <router-link tag="a"
                         :to="{name:'infoConsultationLink',query:{menu:'产品服务',submenu:'第三方征信服务'}}">
              <li>第三方征信服务</li>
            </router-link>
          </ul>
        </router-link>
        <router-link tag="li" :to="{name:'modeLink',query:{menu:'联系我们',submenu:'联系方式'}}" class="menu"
                     :class="{active:$route.query.menu==='联系我们'}">联系我们
          <div class="animated zoomIn border"></div>
          <ul class="sonMenu">
            <div class="background"></div>
            <router-link tag="a" :to="{name:'modeLink',query:{menu:'联系我们',submenu:'联系方式'}}">
              <li>联系方式</li>
            </router-link>
            <!--<router-link tag="a" :to="{name:'cooperationLink',query:{menu:'联系我们',submenu:'商务合作'}}">-->
            <!--<li>商务合作</li>-->
            <!--</router-link>-->
            <router-link tag="a"
                         :to="{name:'messageCommentsLink',query:{menu:'联系我们',submenu:'意见留言'}}">
              <li>意见留言</li>
            </router-link>
            <router-link tag="a" :to="{name:'recruitLink',query:{menu:'联系我们',submenu:'招贤纳士'}}">
              <li>招贤纳士</li>
            </router-link>
          </ul>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "Header",
    data() {
      return {}
    },
    methods: {},
    mounted() {

      new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      }).init();

    }
  }
</script>

<style scoped lang="scss">

  @import "@/style/main.scss";

  header {
    height: 216px;
    line-height: 216px;
    border-top: 4px solid #126eec;
    position: relative;

    .logo {
      position: absolute;
      top: 60px;
      left: 40px;
      display: inline-block;
      height: 60px;
      line-height: 60px;

      img {
        display: inline-block;
        vertical-align: middle;
      }

      ul {
        display: inline-block;
        height: 60px;
        vertical-align: middle;
        padding-left: 15px;

        li {
          height: 20px;
          line-height: 20px;

          &:first-child {
            height: 40px;
            line-height: 40px;
            font-size: 2rem;
          }

          &:last-of-type {
            font-size: 1.1rem;
          }
        }
      }
    }

    nav {
      height: 50px;
      line-height: 50px;
      vertical-align: bottom;
      position: absolute;
      left: 50%;
      width: 1000px;
      margin-left: -500px;
      bottom: 0px;
      text-align: right;
    }
  }


  nav > ul li {
    display: inline-block;
    padding: 0 30px;
    cursor: pointer;
    height: 50px;
    font-size: 1.2rem;
    line-height: 50px;

    .border {
      position: absolute;
      height: 4px;
      background-color: #106fed;
      bottom: 0;
      left: 0;
      right: 0;
      display: none;
    }
  }

  .menu {
    position: relative;

    &:hover {
      .sonMenu, .border {
        display: block;
      }
    }
  }

  .sonMenu {
    display: none;
    position: absolute;
    width: 100%;
    text-align: center;
    color: #ffffff;
    z-index: 1000;
    left: 0;
    top: 50px;
    transition: max-height .3s ease-in;
    transform-origin: 50% 0;
    animation: slide-down 0.3s ease-in;
    -webkit-animation: slide-down 0.3s ease-in;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0.8;
      background-color: #303133;
    }

    a {
      color: #ffffff;

      li {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        transition: background-color 0.3s;
        display: block;
        padding: 0;
        position: relative;
        z-index: 10000;

        &:hover {
          background-color: #12428c;
        }
      }
    }


  }

  nav > ul > a {
    color: #303133;
  }


  nav > ul {
    font-size: 0px;
  }

  .active:before {
    content: '';
    left: 0;
    right: 0;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 4px;
    bottom: 0;
    background-color: #106fed;
  }

  @keyframes slide-down {
    0% {
      transform: scale(1, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .animated {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s; // 动画执行时间
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
</style>
