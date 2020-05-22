<template>
  <div>
    <synopsis-view></synopsis-view>
    <div class="width modular">
      <ul class="modular-name">
        <li>核心团队</li>
        <li>CORE TEAM</li>
      </ul>
    </div>
    <div class="team">
      <div class="team-item">
        <div class="team-item-body">
          <div class="team-item-body-img"><img src="./../../../static/images/luo.jpg" alt=""></div>
          <ul>
            <li>
              <span class="name">罗含丰</span>
            </li>
            <li><span class="position">创始人/董事长/总裁</span></li>
            <li>中央民族大学法学硕士</li>
            <li>擅长企业管理与营销策划</li>
            <li>信用管理专家</li>
          </ul>
        </div>
      </div>
      <div class="team-item">
        <div class="team-item-body">
          <div class="team-item-body-img"><img src="./../../../static/images/yangfan.png" alt=""></div>
          <ul>
            <li>
              <span class="name">杨帆</span>
            </li>
            <li><span class="position">首席战略顾问</span></li>
            <li>法学博士后、国务院特殊津贴专家</li>
            <li>中国人寿保险公司法律负责人</li>
            <li>资深金融事务专家</li>
          </ul>
        </div>
      </div>
      <div class="team-item">
        <div class="team-item-body">
          <div class="team-item-body-img"><img src="./../../../static/images/photo_team02.png" alt=""></div>
          <ul>
            <li>
              <span class="name">牛庆民</span>
            </li>
            <li><span class="position">合伙人</span></li>
            <li>融通科技副董事长</li>
            <li>中船重工战略顾问</li>
            <li>资深战略规划咨询专家</li>
          </ul>
        </div>
      </div>
      <div class="team-item">
        <div class="team-item-body">
          <div class="team-item-body-img"><img src="./../../../static/images/hao.jpg" alt=""></div>
          <ul>
            <li>
              <span class="name">郝祥保</span>
            </li>
            <li><span class="position">合伙人</span></li>
            <li>太爱肽集团运营总裁</li>
            <li>多家集团企业首席顾问</li>
            <li>资深政府事务专家</li>
          </ul>
        </div>
      </div>
      <div class="team-item">
        <div class="team-item-body">
          <div class="team-item-body-img"><img src="./../../../static/images/xiachun.jpg" alt=""></div>
          <ul>
            <li>
              <span class="name">夏淳</span>
            </li>
            <li><span class="position">合伙人</span></li>
            <li>清谷资本董事长/博士</li>
            <li>主导逆向创新</li>
            <li>国家千人计划特邀专家</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Team",
    mounted() {

    }
  }
</script>

<style scoped lang="scss">


  .team {
    width: 1300px;
    margin: 0 auto 50px auto;
    display: flex;
  }

  .team-item {
    flex: 1;
    padding: 0 10px;
  }

  .team-item-body {
    background-color: #ffffff;
    border-radius: 4px;
    text-align: center;
    padding-bottom: 22px;

    & > ul {
      height: 187px;
    }
  }

  .team-item-body:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

  .team-item-body-img {
    width: 220px;
    height: 260px;
    overflow: hidden;
    margin-bottom: 35px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

  }

  .team-item-body-img img {
    /*margin: 0 auto;*/
    width: 220px;
    /*height: 260px;*/
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    transition: all 0.6s;
  }

  .team-item-body-img img:hover {
    transform: scale(1.2);
  }

  .team-item-body li {
    font-size: .8755rem;
    color: #414351;
    line-height: 30px;
  }

  .team-item-body li .name {
    font-size: 2.25rem;
    color: #414351;
  }

  .position {
    font-size: .875rem;
    color: #126eec;
  }

</style>
