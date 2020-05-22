<template>
  <div class="back" id="app">
    <header-view></header-view>
    <router-view/>
    <footer-view></footer-view>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }

</script>
<style>
  #app {
    font-family: Helvetica, "Microsoft YaHei", 'Avenir', STHeiti, Tahoma;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }

  .back {
    background-image: url('./../static/images/bg_main_1920_1080.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .modular-name {
    display: inline-block;
    background-image: url('./../static/images/img_title.png');
    background-repeat: no-repeat;
    padding: 0 50px;
  }


  .modular-name li:first-child {
    font-size: 1.3rem;
    color: #303133;
    margin-bottom: 4px;
  }

  .modular-name li:last-child {
    font-size: .8rem;
    color: #C0C4CC;
  }

</style>
