<template>
  <div>
    <product-view></product-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>信用顾问咨询</li>
        <li>CREDIT CONSULTING SERVICE</li>
      </ul>
    </div>
    <div class="width img-text">
      <img src="./../../../static/images/img_cpfw_consult.jpg" alt="">
      <p>
        <em>为</em>大型企业集团提供信用评级一站式咨询服务，协助企业成功获得发行<i>企业债、公司债、短期融资券、中期票据、资产证券化ABS、非金融企业债务融资工具PPN</i>等所需要的<i>主体评级级别</i>和<i>债项评级级别</i>，为企业提供信用评级诊断、信用品质提升、信用提升实施和信用顾问等咨询服务。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ConsultantConsultation"
  }
</script>

<style scoped lang="scss">
  .img-text {
    margin-bottom: 50px;
    position: relative;

    img {
      width: 740px;
      height: 460px;
    }

    p {
      position: absolute;
      background-color: #ffffff;
      padding: 30px 50px;
      width: 540px;
      height: 140px;
      color: #414351;
      text-indent: 1.75rem;
      line-height: 35px;
      font-size: .875rem;
      border-radius: 2px;
      right: 0;
      top: 40px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      em {
        color: #126fed;
        font-size: 2.5rem;
      }

    }
  }
</style>
