<template>
  <div class="body-top">
    <img src="./../../../static/images/img_banner08.jpg" alt="">
    <div class="open">
      <img class="wow animated fadeInLeftBig" src="./../../../static/images/words_banner08.png" alt="">
      <h4 class="wow animated fadeInLeftBig">金融科技<i class="spot"></i>信用赋能</h4>
      <h5 class="wow animated fadeInLeftBig">信用定价的综合化和信用价值的应用化</h5>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "ContactPoster",
    mounted() {
      new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        live: false, // act on asynchronously loaded content (default is true)
      }).init();
    }
  }
</script>


<style scoped lang="scss">
  .body-top {
    position: relative;
    overflow: hidden;
    font-size: 0;

    &:hover {
      & > img {
        transform: scale(1.2);
      }
    }

    & > img {
      width: 100%;
      transition: all 0.6s;
      -webkit-animation-name: slide-down;
      -webkit-animation-timing-function: linear;
      -webkit-animation-duration: 1s;
    }

    .open {
      width: 1000px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -500px;
      margin-top: -100px;
      text-align: right;

      img {
        width: 500px;
      }

      h4 {
        color: #ffffff;
        font-size: 3rem;
        margin: 20px 0;
      }

      h5 {
        color: #ffffff;
        font-size: 2rem;
        margin: 0;
      }
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
