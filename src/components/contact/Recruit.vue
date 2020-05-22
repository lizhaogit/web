<template>
  <div>
    <recruit-view></recruit-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>加入我们</li>
        <li>JOIN US</li>
      </ul>
    </div>
    <div class="main-width">
      <div class="position-item">
        <li class="position-title">
          <h1>前端开发工程师</h1>
          <span class="city">北京</span>
          <!--<span class="time">2019-07-12</span>-->
          <!--<i :class="position?'el-icon-arrow-down':'el-icon-arrow-up'" @click="position=!position"></i>-->
          <i class="iconfont icon-fanhui-copy-copy-copy-copy" :class="{active:web}" @click="web=!web"></i>
        </li>
        <el-collapse-transition>
          <div class="position-body" v-show="web">
            <div>
              <div class="position-duty">
                <li>岗位职责</li>
                <p>1、与产品经理、设计师、后端工程师紧密工作在一起，进行移动端/桌面端 Web应用开发；</p>
                <p>2、负责产品前端架构的改进及性能优化，实现极致的页面加载、执行和渲染时间；</p>
                <p>3、负责PC/App/H5/微信小程序项目的前端的开发、优化，完成核心代码的编写；</p>
                <p>4、建立团队自己的前端组件库和前端开发规范；</p>
              </div>
              <div class="position-seniority">
                <li>任职资格</li>
                <p>1、2年以上的前端领域开发经验，能独立完成前端开发工作。精通Html/Css/Javascript，熟悉W3C标准，对页面性能和浏览器兼容有丰富的实践经验；</p>
                <p>2、负责网站和手机终端的界面交互开发，精通Html5/Css3相关技术，并有实际开发经验；</p>
                <p>3、理解并掌握Javascript语言核心技术DOM、BOM、Ajax、JSON等，对Javascript框架应用（如jQuery等）有一定的经验；</p>
                <p>4、热爱前端技术、有高度的技术敏感度、广阔的技术视野；</p>
                <p>5、至少了解一门后端语言（如Java/PHP/Python），熟悉数据采集或反爬虫技术优先；</p>
                <p>6、具有较强的团队合作精神、进取心和求知欲，热爱学习，勇于挑战；</p>
              </div>
            </div>
            <div>
              <!--<a href=mailto:sample@163.com>send email</a>-->
              <!--<a href="mailto:sample@163.com?subject=test&cc=sample@hotmail.com&body=use mailto sample">send mail</a>-->
              <!--<a style="margin-left: auto;" href=mailto:hr@junlelian.cn>-->
              <button @click="mode=true" class="apply" type="button">立即申请</button>
              <!--</a>-->
            </div>
          </div>
        </el-collapse-transition>
      </div>
      <div class="position-item">
        <li class="position-title">
          <h1>后端开发工程师</h1>
          <span class="city">北京</span>
          <!--<span class="time">2019-07-12</span>-->
          <!--<i :class="position?'el-icon-arrow-down':'el-icon-arrow-up'" @click="position=!position"></i>-->
          <i class="iconfont icon-fanhui-copy-copy-copy-copy" :class="{active:java}" @click="java=!java"></i>
        </li>
        <el-collapse-transition>
          <div class="position-body" v-show="java">
            <div>
              <div class="position-duty">
                <li>岗位职责</li>
                <p>1、承接开发任务，确保按时按质按量完成任务；</p>
                <p>2、遵守部门、开发小组制定的各种研发规范，保证研发过程的持续改进；</p>
                <p>3、能编写相关设计文档，并完成高质量的代码实现和单元测试并保证代码的执行及稳定；</p>
                <p>4、对所负责的模块有维护责任，及时解决出现的问题，并能解答、解决技术难题；</p>
              </div>
              <div class="position-seniority">
                <li>任职资格</li>
                <p>1、统招本科及以上学历，计算机科学或相关专业领域, 并有2-3年以上java相关开发经验；</p>
                <p>2、熟练使用Java，有良好的面向对象设计思想；</p>
                <p>3、熟悉 springmvc ，spring hibernate ，mybatis等框架，熟悉mysql，理解业务能力强；</p>
                <p>4、有与前端对接接口的能力；</p>
                <p>5、良好的沟通能力，勇于担当，能和团队形成合力；</p>
              </div>
            </div>
            <div>
              <!--<a href=mailto:sample@163.com>send email</a>-->
              <!--<a href="mailto:sample@163.com?subject=test&cc=sample@hotmail.com&body=use mailto sample">send mail</a>-->
              <!--<a style="margin-left: auto;" href=mailto:hr@junlelian.cn>-->
              <button @click="mode=true" class="apply" type="button">立即申请</button>
              <!--</a>-->
            </div>
          </div>
        </el-collapse-transition>
      </div>
      <div class="position-item">
        <li class="position-title">
          <h1>信用评级分析师</h1>
          <span class="city">北京</span>
          <!--<span class="time">2019-07-12</span>-->
          <!--<i :class="position?'el-icon-arrow-down':'el-icon-arrow-up'" @click="position=!position"></i>-->
          <i class="iconfont icon-fanhui-copy-copy-copy-copy" :class="{active:analysis}"
             @click="analysis=!analysis"></i>
        </li>
        <el-collapse-transition>
          <div class="position-body" v-show="analysis">
            <div>
              <div class="position-duty">
                <li>岗位职责</li>
                <p>1、负责客户访谈、并撰写访谈纪要；</p>
                <p>2、评级报告的撰写、客户关系的维护；</p>
                <p>3、完成评级项目的资料归档；</p>
                <p>4、参与评级指标体系的建立与修订；</p>
                <p>4、领导交办的其他工作；</p>
              </div>
              <div class="position-seniority">
                <li>任职资格</li>
                <p>1、全日制本科以上学历，经济、金融、会计、财管等相关专业；</p>
                <p>2、认真负责、一年及以上工作经验、工作积极主动、学习能力较强；</p>
                <p>3、具备较强的文字撰写能力和分析能力、一定的沟通能力；</p>
                <p>4、熟练掌握办公软件；</p>
                <p>5、有大公、联合、中诚信、东方金诚等相关公司工作经验者优先；</p>
                <p>5、具备银行等金融机构信贷审核工作经验者优先；</p>
              </div>
            </div>
            <div>
              <!--<a href=mailto:sample@163.com>send email</a>-->
              <!--<a href="mailto:sample@163.com?subject=test&cc=sample@hotmail.com&body=use mailto sample">send mail</a>-->
              <!--<a style="margin-left: auto;" href=mailto:hr@junlelian.cn>-->
              <button @click="mode=true" class="apply" type="button">立即申请</button>
              <!--</a>-->
            </div>
          </div>
        </el-collapse-transition>
      </div>
      <!--<li class="title"><span>更多职位</span></li>-->
    </div>
    <div class="main-width">
      <div class="welcome">
        <img src="./../../../static/images/img_zxns.jpg" alt="">
        <div class="welcome-text">
          <li>欢迎加入</li>
          <p>我们欢迎符合职位需求的朋友加入我们，如果您认识这样的朋友也请推荐给我们，会有丰厚的答谢回馈，感谢！</p>
          <p>我们不仅为员工提供优厚的福利保障，还致力于打造轻松、愉快的团队环境；</p>
          <ul>
            <li>——生日福利；</li>
            <li>——节日福利；</li>
          </ul>
          <ul>
            <li>——团建；</li>
            <li>——全勤奖；</li>
          </ul>
          <ul>
            <li>——股票期权；</li>
            <li>——美女帅哥多；</li>
          </ul>
        </div>
      </div>
      <div class="content-text">
        <p class="text">除了本网站外，还可以通过公司在<a href="http://company.zhaopin.com/CZ623984830.htm" target="_blank">智联招聘</a>和<a
          href="https://www.zhipin.com/gongsi/bfde756f50daf6f81XR63d61EQ~~.html?ka=search_rcmd_company_bfde756f50daf6f81XR63d61EQ~~_custompage"
          target="_blank">BOSS直聘</a>发布的招聘职位投递简历。</p>
        <p>我们将进行简历筛选，如满足相关职位要求，则在一周内致电。如果无合适职位，我们会将应聘简历存入公司人才库，一旦有空缺，我们会尽快与您联系。</p>
      </div>
    </div>
    <go-view></go-view>
    <div class="stop" v-if="mode" @click="mode=false">

    </div>
    <div class="mode" v-if="mode">
      <div class="mode-back"></div>
      <span>请将您的简历发送至君乐联人事招聘邮箱 <font>hr@junlelian.cn</font></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recruit",
    data: () => ({
      web: true,
      java: false,
      analysis: false,
      mode: false
    }),
    methods: {
      close(data) {
        console.log(data)
        if (this.mode) {
          this.mode = false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .main-width {
    width: 1140px;
    margin: 0 auto;

    .title {
      text-align: center;
      margin-bottom: 40px;

      span {
        font-size: .875rem;
        color: #126FED;
        border-bottom: 1px solid #126FED;
      }
    }
  }

  .position-item {
    background-color: #ffffff;
    border-radius: 4px;
    margin-bottom: 30px;

    .position-title {
      display: flex;
      padding: 0 40px;
      height: 60px;
      line-height: 60px;
      position: relative;

      h1 {
        font-weight: 500;
        font-size: 1.5rem;
        margin: 0;
      }

      .city {
        margin-left: auto;
        margin-right: 120px;
      }

      .time {
        margin-left: auto;
        margin-right: 120px;
      }

      span {
        font-size: .875rem;
        color: #bab9bf;
      }

      i {
        position: absolute;
        right: 40px;
        cursor: pointer;
        display: inline-block;
        transition: all 0.6s;

        &:before {
          color: #bab9bf;
        }
      }

      .active {
        transform: rotate(180deg);
      }

    }

    .position-body {
      padding: 30px 40px;
      border-top: 1px solid #f5f4f9;
      transition: all .5s;

      & > div {
        display: flex;

        & > div {
          width: 350px;
          padding-right: 100px;

          li {
            font-size: .875rem;
            font-weight: bold;
          }

          p {
            font-size: .875rem;
            color: #414351;
          }
        }

        .apply {
          width: 120px;
          height: 40px;
          line-height: 40px;
          border: none;
          background-color: #1270ee;
          border-radius: 4px;
          color: #ffffff;
          cursor: pointer;
          margin-left: auto;
        }
      }
    }
  }

  .welcome {
    height: 460px;
    position: relative;

    img {
      position: absolute;
      width: 820px;
      height: 460px;
      left: 0;
      top: 0;
    }

    .welcome-text {
      padding: 40px;
      background-color: #ffffff;
      border-radius: 4px;
      position: absolute;
      width: 700px;
      /*height: 230px;*/
      top: 80px;
      right: 0px;

      & > li {
        font-size: 1.5rem;
        font-weight: 600;
        color: #126FED;
        text-align: center;
        margin-bottom: 20px;
      }

      p {
        font-size: .875rem;
        margin: 0;
        line-height: 30px;
        color: #414351;
      }

      & > ul {
        margin: 0;
        height: 30px;
        line-height: 30px;
        display: flex;

        li {
          font-size: .875rem;
          color: #bbbabf;

          &:first-of-type {
            width: 380px;
          }

          &:last-of-type {
            width: 320px;
          }
        }
      }
    }
  }

  .stop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  .mode {
    z-index: 10000;
    width: 600px;
    height: 120px;
    font-size: 1.125rem;
    text-align: center;
    line-height: 120px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -60px;

    font {
      /*cursor: pointer;*/

      &:hover {
        /*border-bottom: 1px solid #ffffff;*/
      }
    }

    i {
      position: absolute;
      color: #ffffff;
      z-index: 100000;
      top: 5px;
      right: 5px;
      cursor: pointer;
    }

    span {
      position: relative;
      z-index: 10000;
      color: #ffffff;
    }

    .mode-back {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000;
      opacity: 0.5;
      border-radius: 4px;

    }
  }

  .content-text {
    margin-top: 80px;
    margin-bottom: 80px;

    & > p {
      font-size: .875rem;
      color: #bbbabf;

      font {
        color: #999ca5;
      }

      a {
        color: #999ca5;
      }
    }
  }
</style>
