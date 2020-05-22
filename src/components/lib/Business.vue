<template>
  <div class="body-top">
    <img src="./../../../static/images/img_banner09.jpg" alt="">
    <div class="open">
      <img class="wow animated fadeInLeftBig" src="./../../../static/images/words_banner09.png" alt="">
      <h4 class="wow animated fadeInLeftBig">成为合作伙伴</h4>
      <h5 class="wow animated fadeInLeftBig">开创互利共荣的全新局面</h5>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: "Business",
    mounted() {
      new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: false, // act on asynchronously loaded content (default is true)
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

    img {
      width: 100%;
      transition: all 0.6s;
    }

    .open {
      width: 550px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -500px;
      margin-top: -105px;
      text-align: left;
      padding-left: 450px;

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
</style>
