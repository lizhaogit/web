<template>

  <footer>
    <div class="footer-top">
      <div class="width footer-top-body">
        <div class="footer-top-body-left">
          <div class="footer-top-body-left-top">
            <div>
              <ul>
                <li>
                  <h4>产品服务</h4>
                </li>
                <li>
                  <router-link tag="a" :to="{name:'manageConsultingLink',query:{menu:'产品服务',submenu:'信用管理咨询'}}"
                               target="_blank">信用管理咨询
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" :to="{name:'consultantConsultationLink',query:{menu:'产品服务',submenu:'信用顾问咨询'}}"
                               target="_blank">信用顾问咨询
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" :to="{name:'infoConsultationServiceLink',query:{menu:'产品服务',submenu:'信息咨询服务'}}"
                               target="_blank">信息咨询服务
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" :to="{name:'infoConsultationLink',query:{menu:'产品服务',submenu:'第三方征信服务'}}"
                               target="_blank">第三方征信服务
                  </router-link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h4>友情链接</h4>
                </li>
                <li class="friendship-link">
                  <div>
                    <a class="chu" href="http://www.dajiaxinfu.com" target="_blank"><img
                      src="./../../../static/images/logo_djxf01.png"
                      alt=""></a>
                    <a class="fous" href="http://www.dajiaxinfu.com" target="_blank"><img
                      src="./../../../static/images/logo_djxf02.png"
                      alt=""></a>
                  </div>
                </li>
                <li class="friendship-link">
                  <div>
                    <a class="chu"><img src="./../../../static/images/logo_jllzx01.png" alt=""></a>
                    <a class="fous"><img src="./../../../static/images/logo_jllzx02.png" alt=""></a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h4>联系我们</h4>
                </li>
                <li><span>电话：</span>010-61273168</li>
                <li><span>邮箱：</span>info@junlelian.cn</li>
                <li><span>时间：</span>周一至周五9：00-18：00</li>
                <li><span>地址：</span>北京市大兴区宏福路鸿坤广场A2座三层</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><h4>微信公众号</h4></li>
                <li><img src="./../../../static/images/wechat.jpg" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="width main-footer-bottom">
        <li>版权所有：北京君乐联科技有限公司<i class="iconfont icon-xian-quan-Cbiao"></i>2019<img
          src="./../../../static/images/icon_ba01.png" alt="">京ICP备17031265号-1
          <!--<img src="./../../../static/images/icon_ba02.png" alt="">-->
        </li>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer-top {
    background-color: #f8f9fe;
    height: 240px;
  }


  .footer-top-body-left {
    padding: 0 30px;
  }

  h4 {
    color: #414351;
    font-size: 1.5rem;
    margin-bottom: 15px;
    margin-top: 0;
  }

  .footer-top-body-left-top {
    vertical-align: top;
    height: 240px;
    line-height: 240px;
    font-size: 0;

    & > div {
      display: inline-block;
      vertical-align: top;
      position: relative;
      height: 240px;
      line-height: 240px;

      & > ul {
        position: absolute;
        top: 40px;
      }

      &:first-child {
        width: 200px;

        ul {
          width: 98px;
          height: 134px;

          a {
            color: #787a87;

          }
        }
      }

      &:nth-child(2) {
        width: 370px;

        ul {
          width: 218px;
          height: 160px;
          left: 102px;
        }
      }

      &:nth-child(3) {
        width: 370px;

        ul {
          width: 310px;
          height: 136px;
          left: 30px;
        }
      }

      &:last-child {
        width: 200px;

        ul {
          width: 122px;
          height: 146px;
          right: 0;

          li:last-child {
            text-align: right;
          }
        }

        img {
          width: 100px;
        }
      }
    }
  }

  .footer-top-body-left .footer-top-body-left-top ul li {
    line-height: 25px;
    color: #787a87;
    font-size: .875rem;

    a {
      line-height: 25px;
      color: #787a87;
      font-size: .875rem;

      &:hover {
        color: #126eec;
      }
    }
  }

  .footer-top-body-right ul {
    display: inline-block;
  }

  .footer-top-body-right ul:nth-child(2n) {
    padding: 0 30px;
  }

  .friendship-link {
    & > div {
      display: inline-block;

      a {
        transition: all .5s;
      }

      .fous {
        display: none;
      }

      &:hover {
        .chu {
          display: none;
          /*transition: all .5s;*/
        }

        .fous {
          display: block;
          /*transform: display;*/
        }
      }
    }
  }

  .footer-bottom {
    height: 60px;
    color: #ffffff;
    line-height: 60px;
    text-align: center;
    background-color: #126eed;
  }

  .main-footer-bottom {
    line-height: 60px;
    height: 60px;
    font-size: .875rem;
    color: #ffffff;

    li {
      i {
        font-size: .8rem;
      }

      img {
        vertical-align: middle;
        margin: 0 10px;
      }
    }
  }
</style>
