<template>
  <div class="consulting-bottom">
    <img src="./../../../static/images/bg_AD_djxf.jpg" alt="">
    <ul class="consulting-text">
      <li><h1>大家信夫</h1></li>
      <li>一站式信用服务平台</li>
      <li><a href="http://www.dajiaxinfu.com" target="_blank"><span class="">进入大家信夫平台</span></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Godajiaxinfu"
  }
</script>

<style scoped lang="scss">

  .consulting-bottom {
    position: relative;

    .consulting-text {
      position: absolute;
      width: 1000px;
      height: 116px;
      top: 50%;
      left: 50%;
      margin-left: -500px;
      margin-top: -58px;
      text-align: center;
      color: #ffffff;
      font-size: .875rem;

      li {
        margin-bottom: 10px;
      }

      h1 {
        margin: 0;
        font-weight: 500;
      }

      span {
        background-color: #ffffff;
        color: #126fed;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        width: 142px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
</style>
