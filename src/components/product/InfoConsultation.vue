<template>
  <div>
    <product-view></product-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>第三方征信服务</li>
        <li>THIRD PARTY CREDIT SERVICE</li>
      </ul>
    </div>
    <div class="width">
      <p class="service-text">
        <em>第</em>三方征信服务是依托于参股子公司北京君乐联征信有限公司提供第三方征信服务。包括提供针对目标企业的信用信息征集、调查和咨询服务，包括银行信贷客户信用调查，合格供应商信用认证，出具基础信用报告、标准信用报告、深度信用报告以及招投标信用报告等各类专项信用报告、调研报告和评价报告。
      </p>
      <div>
        <img class="wow animated zoomIn" src="././../../../static/images/img_cpfw_dsfzxfw.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoConsultation"
  }
</script>

<style scoped lang="scss">
  .service-text {
    font-size: .875rem;
    color: #314154;
    text-indent: 1.75rem;

    em {
      color: #156eee;
      font-size: 2rem;
    }
  }
</style>
