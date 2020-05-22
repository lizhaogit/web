<template>
  <div>
    <business-view></business-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>商务合作</li>
        <li>COOPERATION</li>
      </ul>
    </div>
    <div class="width people">
      <div class="people-item">
        <div class="people-item-top">
          <img src="./../../../static/images/luxi.png" alt="">
        </div>
        <div class="people-item-bottom">
          <ul class="people-item-bottom-top">
            <li><h2>凯西</h2></li>
            <li><span class="position">客户总监</span></li>
          </ul>
          <ul class="people-item-bottom-center">
            <li>电话：13718106971</li>
            <li>邮箱：zhoucuiping@junlelian.cn</li>
          </ul>
          <ul class="people-item-bottom-bottom"><span>立即联系</span></ul>
        </div>
      </div>
      <div class="people-item">
        <div class="people-item-top">
          <img src="./../../../static/images/qin.png" alt="">
        </div>
        <div class="people-item-bottom">
          <ul class="people-item-bottom-top">
            <li><h2>秦扬广</h2></li>
            <li><span class="position">客户总监</span></li>
          </ul>
          <ul class="people-item-bottom-center">
            <li>电话：13520010967</li>
            <li>邮箱：qinyangguang@junlelian.cn</li>
          </ul>
          <ul class="people-item-bottom-bottom"><span>立即联系</span></ul>
        </div>
      </div>
      <div class="people-item">
        <div class="people-item-top">
          <img src="./../../../static/images/lv.png" alt="">
        </div>
        <div class="people-item-bottom">
          <ul class="people-item-bottom-top">
            <li><h2>吕通</h2></li>
            <li><span class="position">客户总监</span></li>
          </ul>
          <ul class="people-item-bottom-center">
            <li>电话：13581835911</li>
            <li>邮箱：lvtong@junlelian.cn</li>
          </ul>
          <ul class="people-item-bottom-bottom"><span>立即联系</span></ul>
        </div>
      </div>
    </div>
    <go-view></go-view>
  </div>
</template>

<script>
  export default {
    name: "Cooperation"
  }
</script>

<style scoped lang="scss">
  .people {
    margin-bottom: 50px;
    font-size: 0;

    .people-item {
      display: inline-block;
      width: 300px;
      height: 560px;
      background-color: #ffffff;
      border-radius: 4px;
      margin: 0 50px;

      .people-item-top {
        width: 300px;
        height: 300px;
        overflow: hidden;

        img {
          width: 300px;
          height: 300px;
          cursor: pointer;
          transition: all 0.6s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      .people-item-bottom {
        margin-top: 40px;
        height: 220px;

        .people-item-bottom-top {
          text-align: center;

          h2 {
            font-size: 2.25rem;
            color: #414351;
            margin: 0px;
            font-weight: 500;
          }
        }

        .people-item-bottom-center {
          color: #414351;
          font-size: .875rem;
          padding: 0 40px;
          margin-top: 20px;

          li {
            line-height: 30px;
          }
        }

        .people-item-bottom-bottom {
          text-align: center;
          font-size: .8rem;
          color: #126eec;
          height: 50px;
          line-height: 50px;
          margin-top: 20px;
          border-top: 1px solid #f4f5fa;

          span {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
