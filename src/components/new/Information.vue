<template>
  <div>
    <new-view></new-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>行业资讯</li>
        <li>INDUSTRY NEWS</li>
      </ul>
    </div>
    <div class="width list">
      <div class="list-body">
        <ul class="list-item" v-for="item in data">
          <div class="list-time">
            <li class="list-time-body">
              <span class="day">{{item.news_centres_time | getTime}}</span>
              <span class="month">{{item.news_centres_time | getMonth}}月</span>
            </li>
          </div>
          <div class="list-img" v-if="item.news_centres_image!=null">
            <img :src="item.news_centres_image" alt="">
          </div>
          <div class="list-text">
            <ul>
              <router-link tag="li"
                           :to="{name:'detailsLink',query:{type:'2',id:item.news_centres_id,url:$route.path,page:page,menu:'新闻中心',submenu:'行业资讯'}}"
                           class="list-text-title">
                {{item.news_centres_title}}
              </router-link>
              <li class="list-text-info">
                <p>{{item.news_centres_content | intercept}}</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div class="page">
        <page-view :total="total" :pageSize="pageSize" v-model="page"></page-view>
      </div>
    </div>
  </div>
</template>

<script>
  import merge from 'webpack-merge'

  export default {
    name: "Policy",
    data() {
      return {
        page: this.$route.query.page * 1 || 1,
        pageSize: 5,
        total: 0,
        data: []
      }
    },
    methods: {
      getData() {
        var _this = this
        this.get(this.api.news, {
          type: '2',
          pageSize: this.pageSize,
          offset: this.page
        }).then(function (data) {
          if (data.status === 200) {
            if (data.data.code === 200) {
              _this.data = data.data.data.items
              _this.total = data.data.data.totalRows
            } else {
              _this.$message.error(data.data.data.message)
            }
          }
        }).catch(function (err) {

        })
      }
    },
    mounted() {
      this.getData()
    },
    watch: {
      page: {
        handler: function (val, oldval) {
          this.$router.push({
            query: merge(this.$route.query, {'page': val})
          })
          this.getData()
        }
      }
    },
    filters: {
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
          if (len > 152) {
            string = string.substring(0, 96)
            string += '...'
          }
        }
        return string
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-body {
    margin: 0 10px 50px 10px;

    .list-item {
      height: 260px;
      width: 100%;
      line-height: 260px;
      display: flex;
      border-top: 1px solid #edeef3;
      padding: 0 20px;
      transition: all 0.3s;

      &:hover {
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
      }

      & > div {
        display: inline-block;
        height: 260px;
        line-height: 260px;
      }

      .list-time {

        .list-time-body {
          width: 80px;
          height: 90px;
          display: inline-block;
          background-image: url("./../../../static/images/img_news_title.png");
          background-repeat: no-repeat;
          position: relative;
          vertical-align: middle;

          span {
            position: absolute;
            line-height: 40px;
          }

          .day {
            font-size: 40px;
            color: #414351;
            top: 0;
            left: 0;
          }

          .month {
            bottom: 0;
            right: 0;
            font-size: 24px;
            color: #adc0c6;
          }
        }
      }

      .list-img {
        width: 220px;
        height: 260px;
        line-height: 260px;
        padding-left: 40px;
        text-align: center;

        img {
          vertical-align: middle;
          width: 100%;
        }
      }

      .list-text {
        padding-left: 40px;

        ul {
          display: inline-block;
          line-height: 30px;
          text-align: left;
          vertical-align: middle;

          .list-text-title {
            font-size: 1.5rem;
            color: #414351;
            cursor: pointer;
          }

          p {
            font-size: 0.875rem;
            color: #909090;
          }
        }
      }
    }
  }

  .page {
    margin-bottom: 50px;
    text-align: left;

  }
</style>
