<template>
  <div>
    <product-view></product-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>信息咨询服务</li>
        <li>INFORMATION CONSULTING SERVICE</li>
      </ul>
    </div>
    <div class="width">
      <div class="info-service">
        <div class="info-service-left box-shadow">
          <div class="info-service-left-top">
            <h1>融资策划咨询</h1>
            <p>
              为中小企业提供融资策划服务。包括为企业进行股权融资、债权融资而提供的信用评级报告、商业计划书和信用提升报告等资料，策划融资方案，并提供资金撮合服务。
            </p>
          </div>
          <div class="info-service-left-bottom">
            <img src="./../../../static/images/img_cpfw_info01.jpg" alt="">
          </div>
        </div>
        <div class="info-service-right">
          <div class="info-service-right-top">
            <div class="info-service-right-top-left box-shadow">
              <div class="info-service-right-top-left-text">
                <h1>银行信贷咨询</h1>
                <p>为小微企业主以及个人提供银行信贷咨询策划服务，帮助贷款需求方提高信贷综合评分，策划信贷方案，提高银行信贷额度，加快信贷审批流程。</p>
              </div>
              <div class="info-service-right-top-left-img">
                <img src="./../../../static/images/img_cpfw_info02.jpg" alt="">
              </div>
            </div>
            <div class="info-service-right-top-right box-shadow">
              <div class="info-service-right-top-right-img">
                <img src="./../../../static/images/img_cpfw_info03.jpg" alt="">
              </div>
              <div class="info-service-right-top-right-text">
                <h1>IT信息咨询</h1>
                <p>
                  提供各类软件平台、网站的设计开发服务，包括信用信息标准设计、征信平台以及信用评价平台开发。
                </p>
              </div>
            </div>
          </div>
          <div class="info-service-right-bottom box-shadow">
            <div class="info-service-right-bottom-text">
              <h1>广告信息咨询</h1>
              <p>提供各类广告设计、营销策划、文案策划和活动策划服务。</p>
            </div>
            <div class="info-service-right-bottom-img">
              <img src="./../../../static/images/img_cpfw_info04.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoConsultationService"
  }
</script>

<style scoped lang="scss">
  h1 {
    margin: 0;
    color: #1370ed;
    font-size: 2.5rem;
    font-weight: 500;
  }

  p {
    font-size: .875rem;
    color: #314154;
    line-height: 30px;
  }

  .box-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #ffffff;
  }

  img {
    cursor: pointer;
    transition: all 0.6s;
  }

  img:hover {
    transform: scale(1.2);
  }

  .info-service {
    height: 740px;
    margin-bottom: 50px;
    display: flex;

    .info-service-left {
      width: 400px;

      .info-service-left-top {
        height: 250px;
        width: 340px;
        padding: 30px 30px 0 30px;

      }

      .info-service-left-bottom {
        width: 400px;
        height: 460px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

    }

    .info-service-right {
      width: 690px;
      height: 740px;
      margin-left: 100px;

      .info-service-right-top {
        display: flex;
        height: 500px;

        .info-service-right-top-left {
          width: 300px;

          .info-service-right-top-left-text {
            height: 250px;
            padding: 30px 30px 0 30px;
          }

          .info-service-right-top-left-img {
            height: 220px;
            width: 100%;
            overflow: hidden;
          }
        }

        .info-service-right-top-right {
          width: 300px;
          margin-left: 90px;

          .info-service-right-top-right-img {
            height: 220px;
            overflow: hidden;
          }

          .info-service-right-top-right-text {
            height: 250px;
            padding: 30px 30px 0 30px;
          }
        }
      }

      .info-service-right-bottom {
        height: 200px;
        margin-top: 40px;
        display: flex;

        .info-service-right-bottom-text {
          width: 330px;
          padding: 30px;
        }

        .info-service-right-bottom-img {
          width: 300px;
          overflow: hidden;
        }
      }

    }
  }
</style>
