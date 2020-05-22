<template>
  <div class="">
    <el-container>
      <header-view></header-view>
    </el-container>
    <el-container class="main-body">
      <el-aside width="250px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>


          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div class="main-right">
          Welcome to my house！！
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        navList: [
          {name: '/admin/home', navItem: '首页', children: []},
          {name: '/admin/message', navItem: '我的消息', children: []},
          {name: '/admin/account', navItem: '账号信息', children: []},
          {name: '/admin/member', navItem: '会员列表', children: []},
          {
            name: '/admin/ratingReport', navItem: '信用评估管理', children: [
              {name: '/admin/assess/analystList', navItem: '信用评语-分析师', children: []},
              {name: '/admin/assess/auditorList', navItem: '信用评语-审核员', children: []},
              {name: '/admin/highlights/brightAnalystList', navItem: '信用亮点-分析师', children: []},
              {name: '/admin/highlights/brightAuditorList', navItem: '信用亮点-审核员', children: []},
              {name: '/admin/riskWarning/riskAnalystList', navItem: '风险提示-分析师', children: []},
              {name: '/admin/riskWarning/riskAuditorList', navItem: '风险提示-审核员', children: []},
              {name: '/admin/ratingReport/ratingReportAnalystList', navItem: '评级报告-分析师', children: []},
              {name: '/admin/ratingReport/ratingReportAuditorList', navItem: '评级报告-审核员', children: []},
            ]
          },
          {
            name: '/admin/sincerityAuthList', navItem: '信用认证管理', children: [
              {name: '/admin/sincerityAuthList', navItem: '诚信认证', children: []},
              {name: '/admin/systemAuthentication', navItem: '体系认证', children: []},
            ]
          }, {
            name: '/admin/creditPromoteList', navItem: '信用提升管理', children: [
              {name: '/admin/creditPromoteList', navItem: '信用提升', children: []},
            ]
          },
          {name: '/admin/orderManage', navItem: '订单管理', children: []}
        ]

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/style/main.scss";

  $backkground-color: #ffffff;
  $box-shadow-color: #d3d3d3;


  .main-body {
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f4f5fa;
  }

  .el-container {
    width: 100%;
  }

  .el-aside {
    box-shadow: 3px 1px 3px 0px $box-shadow-color;
    background-color: $backkground-color;
  }

  .tac {
    height: 100%;
  }

  .el-menu-vertical-demo {
    border: none;
  }

  .el-menu-vertical-demo li {
    text-align: left;
  }

  .el-main {
    padding: 0;
  }

  .main-right {
    /*padding: 2rem;*/
    /*margin: 40px 40px 0px 40px;*/
    min-height: 100%;
    box-shadow: 0px 0px 5px 3px $box-shadow-color;
    background-color: $backkground-color;
  }

  .el-menu-item {
    height: 50px;
    line-height: 50px;
  }

  .el-menu-item.is-active {
    background-color: $--color-primary;
    color: #ffffff;
  }
</style>
