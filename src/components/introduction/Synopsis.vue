<template>
  <div>
    <synopsis-view></synopsis-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>公司简介</li>
        <li>ABOUT US</li>
      </ul>
    </div>
    <div class="width">
      <div class="about">
        <div class="about-img">
          <img src="./../../../static/images/about.png" alt="">
        </div>
        <div class="about-text">
          <p>
            <font>北京君乐联科技有限公司</font>成立于2012年1月，是一家基于大数据及互联网+技术、专门从事信用管理服务、信用评级服务和投融资服务的综合性信用服务机构，旗下拥有北京君乐联投资管理有限公司和北京君乐联征信有限公司。
          </p>
          <p>
            公司以信用管理咨询服务为主要业务方向，涉及大数据、管理咨询、征信、信用评级、信用软件系统开发和投融资服务等多个领域，在人才整合的机基础上优化了业务资源，并效力于开发平提供新一代信用信息产品和服务，为各级地方政府、行业主管部门、公共事业单位、企业以及投融资双方提供专业的信用管理解决方案、信用管理技术支持服务以及相应培训指导。</p>
          <p>公司由多名信用行业专家和信用技术专家发起成立，汇集了业内最优秀的信用专业人才队伍，团队秉持“
            <font>联君之力，同乐共赢 </font>”的发展理念，通过凝聚政府、金融机构、专业机构等社会各界力量，努力打造具备较强社会影响力的特色信用服务机构，并长期致力于成为一家核心业务引路、多领域经营的综合性金融服务集团。
          </p>
        </div>
      </div>
    </div>
    <div class="width modular">
      <ul class="modular-name">
        <li>公司历程</li>
        <li>OUR HISTORY</li>
      </ul>
    </div>
    <div class="width">
      <div class="course">
        <div class="vertical">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="course-left">
          <div class="course-item">
            <p class="wow animated fadeInLeftBig">公司与中国锻压协会签署行信易服务合同，共同推进会员单位信用体系建设，提高行业企业的整体信用水平。<span
              class="bottom-line"></span></p>
            <span class="item-spot wow animated zoomIn"></span>
            <span class="time">2019.06</span>
            <div class="item-line right-line"></div>
          </div>
          <div class="course-item">
            <p data-wow-delay="0.3s" class="wow animated fadeInLeftBig">
              公司与中关村资本市场研究会签署行信易服务合同。协助研究会加强对会员单位的信用管理和服务。<span class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2019.03</span>
            <div class="item-line right-line"></div>
          </div>
          <div class="course-item">
            <p data-wow-delay="0.6s" class="wow animated fadeInLeftBig">
              公司与中商交在线有限公司签署全面合作协议，携手中国唯一拥有央行颁发的交易额度结算牌照的金融机构，共同推进非货币流通的交易信用体系建设。<span class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2018.12</span>
            <div class="item-line right-line"></div>
          </div>
          <div class="course-item">
            <p data-wow-delay="0.9s" class="wow animated fadeInLeftBig">
              公司与中国机械工业审计学会签署战略合作协议，践行“信用+审计”工作，助力审计行业健康发展。<span class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2017.06</span>
            <div class="item-line right-line"></div>
          </div>
        </div>
        <div class="course-right">
          <div class="course-item">
            <p class="wow animated fadeInRightBig">公司信用建设工具“建信易”企业版和个人版上线，致力于帮助企业建设信用体系，提升企业和职场人员的信用意识和信用能力。<span
              class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2019.05</span>
            <div class="item-line right-line"></div>
          </div>
          <div class="course-item">
            <p data-wow-delay="0.3s" class="wow animated fadeInRightBig">
              公司行业信用建设工具“行信易”上线，以信用咨询服务机构身份携手各行业组织，助推行业信用体系建设。<span class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2019.03</span>
            <div class="item-line right-line"></div>
          </div>
          <div class="course-item">
            <p data-wow-delay="0.6s" class="wow animated fadeInRightBig">公司与北京市社会工信建设促进协会签署合作协议，共同推进北京市相关领域的信用体系建设。<span
              class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2017.07</span>
            <div class="item-line right-line"></div>
          </div>
          <div class="course-item">
            <p data-wow-delay="0.9s" class="wow animated fadeInRightBig">
              公司与中国食用菌协会达成战略合作协议，共同推进食用菌协会作为国家发改委首批16家重点示范单位开展行业信用建设。<span class="bottom-line"></span></p>
            <span class="item-spot animated zoomIn"></span>
            <span class="time">2017.03</span>
            <div class="item-line right-line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "Synopsis",
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
  .about {
    display: flex;
    padding: 40px;
    background-color: #ffffff;

    .about-img {
      width: 440px;
      height: 326px;
      line-height: 326px;

      img {
        width: 440px;
        height: 280px;
        vertical-align: middle;
      }
    }
  }


  .about .about-text {
    flex: 1;
    padding-left: 30px;
  }

  .about .about-text p {
    font-size: 14px;
    text-indent: 28px;
    line-height: 30px;
    color: #414351;
    margin: 0;
  }


  .course {
    position: relative;
    height: 1460px;
    margin-bottom: 50px;

    .vertical {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      left: 50%;
      margin-left: -2px;
      background-color: #1371ed;
      border-radius: 2px;

      span {
        display: inline-block;
        height: 8px;
        width: 8px;
        background-color: #1371ed;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -4px;

        &:first-of-type {
          top: 36px;
        }

        &:nth-child(2) {
          top: 48px;
        }

        &:last-of-type {
          top: 60px;
        }
      }
    }

    .time {
      font-size: 1.5rem;
      color: #414351;
      position: absolute;
      bottom: 10px;
    }

    .bottom-line {
      display: inline-block;
      width: 60px;
      height: 4px;
      background-color: #1371ed;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -30px;
    }

    .course-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 600px;
      height: 100%;

      .course-item {
        width: 600px;
        height: 230px;
        position: relative;
        margin-bottom: 108px;

        p {
          background-color: #ffffff;
          width: 340px;
          padding: 40px;
          font-size: .875rem;
          line-height: 30px;
          border-radius: 4px;
          box-shadow: 7px 7px 0px #dbe8fa;
          position: absolute;
          bottom: 40px;
          margin: 0;

        }

        .time {
          right: 20px;
        }

        .item-spot {
          display: inline-block;
          height: 30px;
          width: 30px;
          background-color: #ffffff;
          border-radius: 50%;
          position: absolute;
          bottom: -12px;
          box-shadow: 0px 0px 10px #898e97;
          right: -15px;
          z-index: 1000;

          &:before {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #1371ed;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            position: absolute;
            margin-left: -6px;
            margin-top: -6px;
          }
        }

        .item-line {
          width: 400px;
          height: 30px;
          border-bottom: 2px solid #1371ed;
          border-left: 2px solid #1371ed;
          position: absolute;
          bottom: 3px;
          right: 0;
        }
      }
    }

    .course-right {
      position: absolute;
      right: 0;
      top: 0px;
      width: 600px;
      height: 100%;
      padding-top: 180px;

      .course-item {
        width: 600px;
        height: 230px;
        position: relative;
        margin-bottom: 108px;

        p {
          background-color: #ffffff;
          width: 320px;
          padding: 40px;
          font-size: .875rem;
          line-height: 30px;
          border-radius: 4px;
          box-shadow: 7px 7px 0px #dbe8fa;
          position: absolute;
          bottom: 40px;
          right: 0;
          margin: 0;
        }

        .time {
          left: 20px;
        }

        .item-spot {
          display: inline-block;
          height: 30px;
          width: 30px;
          background-color: #ffffff;
          border-radius: 50%;
          position: absolute;
          bottom: -12px;
          box-shadow: 0px 0px 10px #898e97;
          left: -15px;
          z-index: 1000;

          &:before {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #1371ed;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            position: absolute;
            margin-left: -6px;
            margin-top: -6px;
          }
        }

        .item-line {
          width: 400px;
          height: 30px;
          border-bottom: 2px solid #1371ed;
          border-right: 2px solid #1371ed;
          position: absolute;
          bottom: 3px;
          left: 0;
        }

      }
    }

  }

</style>
