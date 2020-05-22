<template>
  <div>
    <contact-view></contact-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>联系方式</li>
        <li>CONTACT</li>
      </ul>
    </div>
    <div class="width contact">
      <div class="right" id="allmap"></div>
      <div class="left">
        <ul>
          <li><img src="./../../../static/images/icon_tel.png" alt="">电话</li>
          <li><span>010-61273168</span></li>
        </ul>
        <ul>
          <li><img src="./../../../static/images/icon_mail.png" alt="">邮箱</li>
          <li><span>info@junlelian.cn</span></li>
        </ul>
        <ul>
          <li><img src="./../../../static/images/icon_time.png" alt="">时间</li>
          <li><span>周一至周五 9:00-18:00</span></li>
        </ul>
        <ul>
          <li><img src="./../../../static/images/icon_add.png" alt="">地址</li>
          <li><span>北京市大兴区宏福路3号院鸿坤广场A2座三层</span></li>
        </ul>
      </div>
    </div>
    <go-view></go-view>
  </div>
</template>

<script>
  export default {
    name: "Mode",
    mounted() {
      // 百度地图API功能
      var mp = new BMap.Map("allmap");
      var point = new BMap.Point(116.351699, 39.796363);
      // mp.centerAndZoom(point, 15);
      // var myIcon = new BMap.Icon("./../../../static/images/bottom.svg", new BMap.Size(200, 100))
      var marker = new BMap.Marker(point); // 创建标注
      mp.addOverlay(marker); // 将标注添加到地图中
      // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      mp.centerAndZoom(point, 15);
      var opts = {
        position: point,    // 指定文本标注所在的地理位置
        offset: new BMap.Size(-150, -70)    //设置文本偏移量
      }
      var label = new BMap.Label("北京市大兴区宏福路3号院鸿坤广场A2座三层", opts);  // 创建文本标注对象
      label.setStyle({
        color: "#414351",
        fontSize: "12px",
        height: "20px",
        lineHeight: "20px",
        fontFamily: "微软雅黑",
        padding: "10px 0",
        width: "300px",
        textAlign: "center",
        border: "none",
        boxShadow: "0px 3px 0px #cfcfcf"
      });
      var opts2 = {
        position: point,    // 指定文本标注所在的地理位置
        offset: new BMap.Size(0, 0)    //设置文本偏移量
      }
      var label2 = new BMap.Label("", opts2)
      label2.setStyle({
        width: "20px",
        height: "20px",
        background: "url(./../../../static/images/bottom.svg)",
        border: "none",
      });
      mp.addOverlay(label);
      mp.addOverlay(label2);

    }
  }
</script>

<style scoped lang="scss">
  .contact {
    display: flex;
    margin-bottom: 80px;

    .left {
      flex: 1;
      padding-left: 60px;

      ul {
        li {
          margin: 0;
          color: #126fed;
          font-size: 2.5rem;
          font-weight: 500;
          height: 50px;
          line-height: 50px;
          vertical-align: middle;

          &:last-of-type {
            margin-bottom: 80px;
            height: 20px;
            line-height: 20px;
          }

          img {
            height: 40px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            margin-top: -6px;
          }

          span {
            font-size: 1rem;
            color: #414351;
            display: inline-block;
            vertical-align: middle;
            margin-left: 50px;
          }
        }
      }
    }

    .right {
      width: 740px;
      height: 540px;
      border: 1px solid #b2c5cb;
    }
  }
</style>
