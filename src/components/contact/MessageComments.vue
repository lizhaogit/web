<template>
  <div>
    <div class="width modular">
      <ul class="modular-name">
        <li>留言墙</li>
        <li>MESSAGE WALL</li>
      </ul>
    </div>
    <div class="main-width msg">
      <ul class="hotline">
        <li class="hotline-left">
          客服热线:<span>010-61273168</span>
        </li>
        <li class="hotline-right">欢迎您对我们的网站和产品提出宝贵的意见，您的支持是我们前行的动力！~</li>
      </ul>
      <div class="form-body">
        <li class="title">您要反馈的内容:</li>
        <div class="feedback-term">
          <ul>
            <li>
              <div><span @click="feedback_type='1'" :class="{active:feedback_type==='1'}"
                         class="term">网站内容设计</span></div>
              <div><span @click="feedback_type='2'" :class="{active:feedback_type==='2'}"
                         class="term">产品功能质量</span></div>
            </li>
            <li>
              <div><span @click="feedback_type='3'" :class="{active:feedback_type==='3'}"
                         class="term">客服服务态度</span></div>
              <div><span @click="feedback_type='4'" :class="{active:feedback_type==='4'}"
                         class="term">产品用户体验</span></div>
            </li>
            <li>
              <div>
                <span @click="feedback_type='5'" :class="{active:feedback_type==='5'}"
                      class="term">其他</span>

                <input v-if="feedback_type==='5'" class="other" type="text" placeholder="0/20" v-model="other_describe">
              </div>
            </li>
          </ul>
        </div>
        <li class="title">您对上述内容的评价: <span>非常满意</span></li>
        <div class="evaluate">
          <li v-for="(item,index) in 5" @click="evaluate=index+1"
              :class="{'active-evaluate':index<evaluate,'hover-active':index<hover}" @mouseenter="hover=index+1"
              @mouseleave="hover=-1"></li>
        </div>
        <li class="title">问题简述:</li>
        <li class="subtitle">{{problem_description.length}}/200</li>
        <div class="textarea">
          <textarea name="" cols="30" v-model="problem_description" rows="10"></textarea>
        </div>
        <li class="title">上传附件:</li>
        <li class="subtitle">支持文件格式DOC、TXT、PPT、PDF</li>
        <div class="enclosure">
          <!--<i class="el-icon-plus"></i>-->
          <img src="./../../../static/images/icon_plus.png" alt="">
          <span v-if="filename===''">上传文件（需小于500M）</span><span v-else>{{filename}}</span>
          <input type="file" @change="upload($event)">
        </div>

        <li class="title">您的意见:</li>
        <li class="subtitle">{{your_opinion.length}}/200</li>
        <div class="textarea">
          <textarea name="" cols="30" v-model="your_opinion" rows="10"></textarea>
        </div>
      </div>
      <div class="contact">
        <li class="contact-title">联系方式</li>
        <div class="contact-form">
          <ul class="form-item">
            <li>
              <div class="form-text">姓名：</div>
              <div class="form-input"><img src="./../../../static/images/icon_name.png" alt=""><input
                v-model.trim="name" type="text"></div>
            </li>
            <li>
              <div class="form-text">邮箱：</div>
              <div class="form-input"><img src="./../../../static/images/icon_email.png" alt=""><input
                v-model.tirm="email" type="text">
              </div>
            </li>
          </ul>
          <ul class="form-item">
            <li>
              <div class="form-text">手机：</div>
              <div class="form-input"><img src="./../../../static/images/icon_phone.png" alt=""><input
                v-model.tirm="phone_num" type="text">
              </div>
            </li>
            <li>
              <div class="form-text">微信：</div>
              <div class="form-input"><img src="./../../../static/images/icon_wechat.png" alt=""><input
                v-model.tirm="wechat" type="text">
              </div>
            </li>
          </ul>
        </div>
        <li class="submission">
          <button type="button" @click="submint()">提交反馈</button>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageComments",
    data() {
      return {
        term: '',
        evaluate: -1,//内容的评价
        feedback_type: '',//反馈内容
        other_describe: '',
        problem_description: '',//问题描述
        annex_address: '',//附件地址
        your_opinion: '',//您的意见
        name: '',//姓名
        email: '',//邮箱
        phone_num: '',//电话
        wechat: '',//微信
        descriptionNum: 0,
        hover: -1,
        filename: ''
      }
    },
    methods: {
      setData() {
        var _this = this
        this.post(this.api.leaveMessage, {
          opinionMessage: JSON.stringify({
            evaluate: this.evaluate,
            other_describe: this.other_describe,
            feedback_type: this.feedback_type,
            problem_description: this.problem_description,
            annex_address: this.annex_address,
            your_opinion: this.your_opinion,
            name: this.name,
            email: this.email,
            phone_num: this.phone_num,
            wechat: this.wechat
          })
        }).then(function (data) {
          if (data.status === 200) {
            if (data.data.code === 200) {
              _this.$message.success('留言成功！')
              _this.evaluate = -1
              _this.feedback_type = ''//反馈内容
              _this.problem_description = ''//问题描述
              _this.annex_address = ''//附件地址
              _this.your_opinion = ''//您的意见
              _this.name = ''//姓名
              _this.email = ''//邮箱
              _this.phone_num = ''//电话
              _this.wechat = '' //微信
              _this.other_describe = ''
            } else {
              _this.$message.error(data.data.message)
            }
          }
        }).catch(function (err) {

        })
      },
      submint() {
        if (this.feedback_type === '') {
          this.$message.warning('反馈内容不能为空！')
          return
        } else {
          if (this.feedback_type === '5') {
            if (this.other_describe === '') {
              this.$message.warning('请输入反馈内容！')
              return
            }
          }
        }

        if (this.evaluate === -1) {
          this.$message.warning('内容的评价不能为空！')
          return
        }
        if (this.problem_description != '') {

          if (this.problem_description.length <= 200) {
            if (this.your_opinion === '') {
              this.$message.warning('您的意见不能为空！')
              return
            }
          } else {
            this.$message.warning('字数不能超过200字！')
            return
          }


        }

        if (this.name === '') {
          this.$message.warning('姓名不能为空！')
          return
        }
        if (this.email === '') {
          this.$message.warning('邮箱不能为空！')
          return
        } else {
          if (!this.verifEmail(this.email)) {
            this.$message.warning('邮箱格式不正确！')
            return
          }
        }

        if (this.phone_num === '') {
          this.$message.warning('手机不能为空！')
          return
        }
        if (this.wechat === '') {
          this.$message.warning('微信不能为空！')
          return
        }
        this.setData()
      },
      verifIphone(str) {
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (reg.test(str)) {
          return true
        } else {
          return false
        }
      },
      verifEmail(str) {
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if (reg.test(str)) {
          return true;
        } else {
          return false;
        }
      },
      upload(event) {
        var e = event.target || event.srcElement;
        var formData = new FormData() // 声明一个FormData对象
        var formData = new window.FormData()
        formData.append('file', e.files[0])
        var _this = this;
        console.log(e.files[0].size)
        var size = e.files[0].size / (1024 * 1024)
        if (size > 500) {
          this.$message.warning('文件不能超过500M')
          return
        }
        _this.filename = e.files[0].name
        this.uploadFile(this.api.upload, formData).then(function (data) {
          if (data.status === 200) {
            e.value = ''
            _this.annex_address = data.data
            _this.$message.success('文件选择成功！')
          } else {

          }
        }).catch(function (err) {

        })
      },
    },
    watch: {
      problem_description: {
        handler: function () {
          var _this = this;
          var _sum = 200; //字体限制为100个
          if (this.problem_description.length > _sum) {
            this.problem_description = String(this.problem_description).slice(0, _sum);
            this.$message.warning('问题描述字数不能超过200字！')
          }
        }
      },
      your_opinion: {
        handler: function () {
          var _this = this;
          var _sum = 200; //字体限制为100个
          if (this.your_opinion.length > _sum) {
            this.your_opinion = String(this.your_opinion).slice(0, _sum);
            this.$message.warning('您的意见字数不能超过200字！')
          }
        }
      },
      other_describe: {
        handler: function () {
          var _this = this;
          var _sum = 20; //字体限制为100个
          if (this.other_describe.length > _sum) {
            this.other_describe = String(this.other_describe).slice(0, _sum);
            this.$message.warning('您的意见字数不能超过20字！')
          }
        }
      }
    },
    filters: {
      intercept(string) {
        let len = 0;
        for (var i = 0; i < string.length; i++) {
          if (string.charCodeAt(i) > 127 || string.charCodeAt(i) == 94) {
            len += 2
          } else {
            len += 1
          }
        }
        var arr = '123ewr啊啊啊'
        console.log(arr.length)
        return len
      }
    }
  }
</script>

<style scoped lang="scss">
  .modular {
    margin-top: 80px;
  }

  textarea {
    resize: none;
    border: 1px solid #ebeef3;
    padding: 10px;
  }

  .textarea {
    height: 100px;
    width: 1000px;
    margin: 0 auto;

    textarea {
      height: 78px;
      width: 978px;
      resize: none;
      border: 1px solid #ebeef3;

      &:focus {
        border: 1px solid #126fed !important;
      }
    }

  }

  .title {
    font-size: .875rem;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    display: flex;
    margin-top: 40px;
    padding-left: 40px;

    span {
      margin-left: auto;
      margin-right: 30px;
    }
  }

  .subtitle {
    font-size: 0.75rem;
    color: #bab9bf;
    height: 20px;
    line-height: 20px;
    margin-bottom: 40px;
    padding-left: 40px;
  }

  .msg {
    width: 1140px;
    margin: 0 auto 80px auto;
    border-radius: 4px;
    background-color: #ffffff;
  }

  .hotline {
    padding: 0 40px;
    height: 69px;
    line-height: 69px;
    border-bottom: 1px solid #f4f5fa;
    display: flex;

    .hotline-left {
      font-size: 1.5rem;

      span {
        color: #126fed;
        margin-left: 20px;
      }
    }

    .hotline-right {
      margin-left: auto;
      color: #a2a1a7;
      font-size: .875rem;
      padding-right: 100px;
    }
  }


  .form-body {
    padding: 40px;
    border-bottom: 1px solid #ebeef3;

    .feedback-term {
      ul {
        padding: 10px 0 30px 0;

        .other {
          width: 550px;
          height: 38px;
          border-radius: 4px;
          border: 1px solid #ebeef3;
          padding-left: 10px;
          margin-left: 20px;
          padding-top: 0;
          padding-bottom: 0;
        }

        li {
          display: flex;

          &:last-of-type {
            div {
              flex: 1;
            }
          }

          div {
            flex: 0.5;
            padding: 0 40px;
            height: 40px;
            line-height: 40px;

            .term {
              font-size: .875rem;
              position: relative;
              padding-left: 30px;
              cursor: pointer;
              height: 18px;
              line-height: 18px;
              display: inline-block;

              &:before {
                content: '';
                width: 6px;
                height: 6px;
                display: inline-block;
                border: 1px solid #ebeef3;
                position: absolute;
                top: 50%;
                margin-top: -8px;
                left: 0;
                border-radius: 50%;
                padding: 5px;
              }
            }

            .active {
              &:before {
                border: 1px solid #126fed;
              }

              &:after {
                content: '';
                background-color: #126fed;
                width: 8px;
                height: 8px;
                display: inline-block;
                border-radius: 50%;
                position: absolute;
                left: 5px;
                top: 6px;
              }
            }
          }
        }

      }

    }

    .evaluate {
      width: 1000px;
      height: 20px;
      background-color: #f4f5fa;
      margin: 30px auto 0 auto;
      cursor: pointer;
      font-size: 0;

      li {
        display: inline-block;
        width: 200px;
        height: 20px;
      }

      .active-evaluate, .hover-active {
        &:first-child {
          background-color: #fae498;
        }

        &:nth-child(2) {
          background-color: #ffc550;
        }

        &:nth-child(3) {
          background-color: #ffa200;
        }

        &:nth-child(4) {
          background-color: #ff8400;
        }

        &:nth-child(5) {
          background-color: #ff5a00;
        }
      }
    }

    .enclosure {
      width: 960px;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      margin: 0 auto;
      border: 1px solid #ebeef3;
      font-size: .875rem;
      color: #bab9bf;
      position: relative;

      i {
        font-size: 1.2rem;
        color: #bab9bf;
      }

      img {
        vertical-align: middle;
        width: 16px;
      }

      input {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }
  }

  .contact {
    padding: 40px;

    .contact-title {
      text-align: center;
      font-size: .875rem;
      font-weight: 600;
      margin-bottom: 50px;
    }

    .contact-form {
      ul {
        display: flex;

        &:last-of-type {
          margin-top: 20px;
        }

        li {
          width: 470px;
          display: flex;

          &:last-of-type {
            margin-left: 60px;
          }

          .form-text {
            width: 100px;
            height: 40px;
            font-size: .875rem;
            font-weight: 600;
            line-height: 40px;
          }

          .form-input {
            position: relative;
            width: 400px;

            img {
              position: absolute;
              left: 10px;
              top: 50%;
              margin-top: -10px;
            }

            input {
              width: 358px;
              height: 38px;
              border: 1px solid #ebeef3;
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 40px;

              &:focus {
                border: 1px solid #126fed !important;
              }
            }
          }
        }
      }
    }

    .submission {
      text-align: center;
      padding: 40px 0;

      button {
        height: 40px;
        line-height: 40px;
        border: none;
        background-color: #126fed;
        color: #ffffff;
        width: 120px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }

  .contact-form {
    width: 1000px;
    margin: 0 auto;
  }

</style>
