<template>
  <div class="body-top">
    <img src="./../../../static/images/img_banner06.jpg" alt="">
    <div class="open">
      <img class="wow animated fadeInRightBig" src="./../../../static/images/words_banner06.png" alt="">
      <h4 class="wow animated fadeInRightBig">行业动态全知晓</h4>
      <h5 class="wow animated fadeInRightBig">最新行业资讯第一时间掌握</h5>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "NewsChart",
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
      text-align: left;

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
