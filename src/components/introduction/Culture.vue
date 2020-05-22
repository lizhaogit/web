<template>
  <div>
    <synopsis-view></synopsis-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>总裁致辞</li>
        <li>VOICE OF CHAIRMAN</li>
      </ul>
    </div>
    <div class="width speech">
      <div class="speech-body">
        <div class="speech-img">
          <img src="./../../../static/images/luo.jpg" alt="">
        </div>
        <div class="speech-right">
          <ul>
            <li class="speech-title"><span class="name">罗含丰</span><span class="position">创始人</span></li>
            <li class="speech-text">
              <p>
                从古至今，信用从来就是最宝贵的资源，无论我们忽视还是重视。人而无信，不知其可，从事信用行业，既可自警自励，以全修身之德，更可服务社会，以尽治国之责。如此传统而朴素的想法，终孕育出君乐联这样一个极具社会使命感的信用管理服务机构。</p>
              <p>
                君乐联生于中国社会信用体系建设的春天，共同的价值观和事业追求让行业精英汇聚如此。君乐联的诞生背景和文化基因决定了她会是一个少见、理想的精英平台。分享精神和共赢追求将让君乐联从此真正伟大，信用责任与快乐心态将让你我从此紧密相连。</p>
              <p>
                理想的旗帜始终在飘扬，合作的号角已经在吹响。无论对内决定社会权力、资金和资源的再次分配，还是对外影响全球治理权力的东西转移，社会管理信用变革将彻底改变我们、造福世界。积极选择、主动拥抱，让我们在信用的阳光中享受快乐吧！</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="width modular">
      <ul class="modular-name">
        <li>文化愿景</li>
        <li>CULTURE & VISION</li>
      </ul>
    </div>
    <div class="width vision">
      <div class="vision-body">
        <div class="vision-body-left"><img src="./../../../static/images/logo-small.png" alt=""></div>
        <div class="vision-body-right">
          <li class="vision-name"><span>君乐联</span></li>
          <li>
            <p>
              是一个崇尚快乐、提倡共享的团队，“君子快乐的联合”是公司初创团队的真实写照；“愿您快乐与我们相联”则是创始人发自内心的美好期许。“君乐联”这个名字恰如其分的描绘了公司“对内注重价值认同、对外追求客户满意的愿景，也是全体君乐联人的毕生追求。”</p>
          </li>
        </div>
      </div>
    </div>
    <div class="width word-text">
      <div class="word-text-body">
        <div class="word-text-body-item">
          <p>坚持，是成功之母<img src="./../../../static/images/bg_line.png" alt=""></p>
          <li><span>座右铭</span></li>
        </div>
        <div class="word-text-body-item">
          <p>让信用成为全社会的通行证<img src="./../../../static/images/bg_line.png" alt=""></p>
          <li><span>企业愿景</span></li>
        </div>
      </div>
    </div>
    <div class="width word-text">
      <div class="word-text-body">
        <div class="word-text-body-item">
          <p>诚信、务实、创新、团结<img src="./../../../static/images/bg_line.png" alt=""></p>
          <li><span>企业精神</span></li>
        </div>
        <div class="word-text-body-item">
          <p><span>客户至上、服务第一、创新为本、效率优先</span><img src="./../../../static/images/bg_line.png" alt=""></p>
          <li><span>经营理念</span></li>
        </div>
      </div>
    </div>
    <div class="width idea">
      <div class="idea-body">
        <div class="idea-item">
          <ul>
            <li>
              <img src="./../../../static/images/img_company_icon01.png" alt="">
            </li>
            <li><span class="position">人才理念</span></li>
            <li><span class="idea-text">以人为本、以优为准、人尽其才、才尽其用</span></li>
          </ul>
        </div>
        <div class="idea-item">
          <ul>
            <li>
              <img src="./../../../static/images/img_company_icon02.png" alt="">
            </li>
            <li><span class="position">市场理念</span></li>
            <li><span class="idea-text">善于发现、善于把握、善于创造</span></li>
          </ul>
        </div>
        <div class="idea-item">
          <ul>
            <li>
              <img src="./../../../static/images/img_company_icon03.png" alt="">
            </li>
            <li><span class="position">服务理念</span></li>
            <li><span class="idea-text">客户是起点，客户是终点</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Culture",
    mounted() {

    }
  }
</script>

<style scoped lang="scss">

  .speech-body {
    margin: 0 10px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 0;
    height: 300px;
    vertical-align: middle;

    .speech-img {
      display: inline-block;
      vertical-align: middle;
      height: 302px;
      line-height: 302px;

      img {
        vertical-align: middle;
      }
    }

    .speech-right {
      display: inline-block;
      vertical-align: middle;

      ul {
        display: inline-block;
        vertical-align: top;
        padding-left: 40px;
        width: 830px;
      }
    }

  }

  .speech-text p {
    font-size: .8755rem;
    color: #414351;
    line-height: 30px;
    text-indent: 1.751rem;
  }

  .speech-title {
    height: 40px;
    line-height: 40px;
    padding-left: 50px;
    background-image: url('./../../../static/images/icon_speech.png');
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: 40px 40px;
    margin: 20px 0;
  }

  .speech-title .name {
    font-size: 36px;
    color: #414351;
    margin-right: 15px;
  }


  /* 文化愿景 */

  .vision-body {
    background-color: #ffffff;
    height: 180px;
    padding: 40px 80px;
    font-size: 0;
    margin: 0 10px;
    border-radius: 4px;
  }

  .vision-body-left,
  .vision-body-right {
    height: 180px;
    display: inline-block;
    vertical-align: top;
  }

  .vision-body-left {
    width: 160px;
    text-align: center;
    line-height: 180px;
    margin-right: 80px;
  }

  .vision-body-left img {
    width: 160px;
    vertical-align: middle;
  }

  .vision-body-right {
    width: 780px;
  }

  .vision-name {
    font-size: 36px;
    color: #414351;
    margin: 20px 0;
  }

  .vision-body-right p {
    font-size: .8755rem;
    color: #414351;
    line-height: 30px;
    text-indent: 1.751rem;
  }

  .word-text-body {
    margin: 40px 10px;
    display: flex;
  }

  .word-text-body-item {
    flex: 1;

    li {
      height: 40px;
      line-height: 40px;
      text-align: center;

      span {
        font-size: .875rem;
        color: #126EEC;
      }
    }
  }

  .word-text-body .word-text-body-item:first-child {
    padding-right: 10px;
  }

  .word-text-body .word-text-body-item:last-child {
    padding-left: 10px;
  }

  .word-text-body-item p {
    width: 100%;
    height: 140px;
    line-height: 140px;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 2.5rem;
    text-align: center;
    color: #414351;
    margin-bottom: 0;
    position: relative;

    img {
      position: absolute;
      width: 260px;
      height: 6px;
      left: 50%;
      margin-left: -130px;
      bottom: -6px;
    }
  }

  .word-text-body-item p span {
    font-size: 1.75rem;
  }

  .idea-body {
    margin: 80px 10px;
    display: flex;
  }

  .idea-body .idea-item {
    width: 380px;
    height: 300px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .idea-body .idea-item:nth-child(2) {
    margin: 0 20px;
  }

  .idea-item img {
    margin-top: 40px;
  }

  .idea-item ul li:nth-child(2) {
    margin-top: 40px;
    margin-bottom: 10px;
  }

  .idea .idea-text {
    color: #414351;
    font-size: 14px;
  }
</style>
