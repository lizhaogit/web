<template>
  <div class="body-top">
    <img class="" src="./../../../static/images/img_banner05.jpg" alt="">
    <div class="open">
      <img class="wow animated fadeInRightBig" src="./../../../static/images/words_banner05.png" alt="">
      <h4 class="wow animated fadeInRightBig">创新型综合信用服务机构</h4>
      <h5 class="wow animated fadeInRightBig">金融科技<span class="spot"></span>信用赋能</h5>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "EntSynopsis",
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
  }

  .body-top > img {
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
    margin-top: -120px;
    text-align: left;
  }

  .open img {
    width: 500px;
  }

  .open h4 {
    color: #ffffff;
    font-size: 3rem;
    margin: 20px 0;
  }

  h5 {
    font-size: 1.8rem;
    margin-top: 20px;
    color: #ffffff;

    .spot {
      &:before {
        background-color: #ffffff;
      }
    }

    font {
      color: #1f284f;
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
