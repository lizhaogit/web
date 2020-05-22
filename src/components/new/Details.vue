<template>
  <div>
    <new-view></new-view>
    {{$route.query.type}}
    <div class="width modular">
      <ul class="modular-name" v-if="$route.query.type==='1'">
        <li>信用文化</li>
        <li>CREDIT CULTURE</li>
      </ul>
      <ul class="modular-name" v-if="$route.query.type==='2'">
        <li>行业资讯</li>
        <li>INDUSTRY NEWS</li>
      </ul>
      <ul class="modular-name" v-if="$route.query.type==='3'">
        <li>政策法规</li>
        <li>POLICIES & RULES</li>
      </ul>
      <ul class="modular-name" v-if="$route.query.type==='4'">
        <li>专家解读</li>
        <li>ANALYSIS OF EXPERTS</li>
      </ul>
    </div>
    <div class="info-body">
      <div class="width info">
        <div class="info-left">
          <h1>{{data.news_centres_title}}</h1>
          <li class="info-field">
            <span>{{data.news_centres_time | formatDate}}</span><span>{{data.news_centres_source}}</span></li>
          <div class="content" v-html="data.news_centres_content"></div>
          <!--<li class="info-left-bottom">-->
          <!--<span class="" type="button">下一篇<img src="./../../../static/images/icon_return.png" alt=""></span>-->
          <!--</li>-->
        </div>
        <div class="info-right">
          <li class="return">
            <router-link tag="span" :to="{path:$route.query.url,query: $route.query}"><img
              src="./../../../static/images/icon_return.png"
              alt="">返回列表
            </router-link>
          </li>
          <h1>热门新闻</h1>
          <p v-for="item in hotData">
            <router-link
              :to="{name:'detailsLink',query:{type:$route.query.type,id:item.news_centres_id,url:$route.query.url,menu:'新闻中心'}}"
              target="_blank">{{item.news_centres_title | intercept}}
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../../util/util.js'

  export default {
    name: "Details",
    data() {
      return {
        page: 1,
        pageSize: 5,
        total: 0,
        data: [],
        hotData: []
      }
    },
    methods: {
      getData() {
        var _this = this
        this.get(this.api.newsInfo, {
          id: this.$route.query.id
        }).then(function (data) {
          if (data.status === 200) {
            if (data.data.code === 200) {
              _this.data = data.data.data
            } else {
              _this.$message.error(data.data.data.message)
            }
          }
        }).catch(function (err) {

        })
      },
      getHot() {
        var _this = this
        this.get(this.api.hotNews, {
          type: this.$route.query.type
        }).then(function (data) {
          if (data.status === 200) {
            if (data.data.code === 200) {
              _this.hotData = data.data.data
            }
          }
        }).catch(function (err) {

        })
      }
    },
    mounted() {
      this.getData()
      this.getHot()
    },
    watch: {
      page: {
        handler: function (val, oldval) {
          this.getData()
        }
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        if (time == null) {
          return '-'
        } else {
          return formatDate(date, 'yyyy-MM-dd');
        }
      },
      getMonth(date) {
        var time = new Date(date)
        var month = time.getMonth() + 1
        if (month < 10) {
          month = '0' + month
        }
        return month
      },
      getTime(date) {
        var time = new Date(date)
        var day = time.getDate()
        if (time.getDate() < 10) {
          day = '0' + day
        }
        return day
      },
      intercept(string) {
        if (string.length > 20) {
          string = string.substring(0, 20)
          string += '...'
        }
        return string;
      }
    }
  }
</script>

<style scoped lang="scss">
  .info-body {
    padding: 30px 0;
    background-color: #ffffff;
    margin-bottom: 50px;

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }

    .info {
      display: flex;

      .info-left {
        width: 820px;
        padding: 0 10px;


        .info-field {
          span {
            font-size: 0.875rem;
            margin: 0 20px;
            color: #909090;
          }
        }

        .info-left-bottom {
          padding: 40px 0;
          text-align: center;

          span {
            padding: 8px 20px;
            border: none;
            background-color: #f4f5fa;
            color: #3081ec;
            cursor: pointer;
            font-size: 0.875rem;

            img {
              transform: rotate(180deg);
              margin-left: 5px;
              vertical-align: middle;
            }
          }
        }
      }

      .info-right {
        width: 240px;
        padding: 0 60px;

        h1 {
          text-align: right;
        }

        p {
          border-top: 1px solid #ebeef3;
          margin: 0;
          padding: 10px 0;
          line-height: 1.6875rem;

          &:last-child {
            border-bottom: 1px solid #ebeef3;
          }

          a {
            font-size: 1.125rem;
            color: #ADC0C6;
            margin: 0;

            &:hover {
              color: #126fed;
            }
          }

        }

        .return {
          text-align: right;

          span {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #f4f5fa;
            display: inline-block;
            color: #126eed;
            font-size: 0.875rem;
            cursor: pointer;

            img {
              margin-right: 5px;
              vertical-align: middle;
              margin-bottom: 3px;
            }
          }
        }
      }
    }

  }

  .content {
    padding: 40px 0;
    line-height: 30px;
  }
</style>
