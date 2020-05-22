<template>
  <div class="body-top">
    <img src="./../../../static/images/img_banner10.jpg" alt="">
    <div class="open">
      <h4 class="wow animated fadeInRightBig">招贤纳士</h4>
      <img class="wow animated fadeInRightBig" src="./../../../static/images/words_banner10.png"
           alt="">
      <h5 class="wow animated fadeInRightBig">与您共创未来</h5>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "RecruitPage",
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
      position: absolute;
      top: 50%;
      left: 34%;
      margin-left: -500px;
      margin-top: -105px;
      text-align: left;
      padding-left: 450px;
      letter-spacing: 8px;

      img {
        width: 500px;
        margin-left: 40px;
        margin-top: -15px;
        margin-bottom: -15px;
      }

      h4 {
        color: #ffffff;
        font-size: 3rem;
        margin: 0;
      }

      h5 {
        color: #ffffff;
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 9rem;
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
