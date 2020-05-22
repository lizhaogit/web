<template>
  <nav class="nav">
    <ul class="pagination">
      <li>
        <a href="javascript:void(0)" class="disabled" @click="goPageClick(1)" aria-label="Previous">首页</a>
      </li>
      <li>
        <a href="javascript:void(0)" class="disabled" @click="goPageClick(value-1)" aria-label="Previous">上一页</a>
      </li>
      <li v-if="value > 6"><a href="javascript:void(0)">...</a></li>
      <li v-if=" pageNum < 10" v-for="(i,index) in pageNum"
          v-bind:class="{current:value == i}">
        <a href="javascript:void(0)" @click="goPageClick(i)"> {{i}}</a>
      </li>
      <li v-if="pageNum >= 10" v-for="i in value+4 > pageNum ? (6+pageNum-value) : 10"
          v-bind:class="{current: (value<6?i:value-6+i )== value}">
        <a href="javascript:void(0)" @click="goPageClick(value<6?i:value-6+i)">
          {{value<6?i:value-6+i}}</a>
      </li>
      <li v-if="value +4 < pageNum "><a href="javascript:void(0)">...</a></li>
      <li style="position: relative">
        <a href="javascript:void(0)" @click="goPageClick(value+1)" aria-label="Next">下一页</a>
      </li>
      <!--<li class="pl-2">共{{pageNum}}页</li>-->
    </ul>
    <ul class="goPage">
      <li>
        <a href="javascript:void(0)" class="disabled" @click="goPageClick(pageNum)" aria-label="Previous">末页</a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        goPage: '',
        pageNum: Math.ceil(this.total / this.pageSize)
      }
    },
    props: {
      total: {
        type: Number
      },
      pageSize: {
        type: Number
      },
      value: {
        type: Number
      }
    },
    methods: {
      goPageClick(page) {
        if (!isNaN(page)) {
          page = Number(page);
          if (page <= 0 | page > this.pageNum) {
            this.$message.warning('该页码不存在！')
            return;
          } else {
            this.$emit("input", page)
            this.goPage = ''
          }
        } else {
          this.$message.warning('该页码不存在！')
        }
      }
    },
    mounted() {
    },
    watch: {
      total: {
        handler: function (val, oldval) {
          console.log(val)
          this.pageNum = Math.ceil(this.total / this.pageSize)
        }
      }
    },
  }

</script>
<style scoped lang="scss">
  .nav {
    display: flex;

    ul {
      font-size: 0;
      display: inline-block;

      li {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        border: 1px solid #ebeef3;
        padding: 0 18px;
        margin-right: 10px;
        border-radius: 4px;

        a {
          color: #414351;
          font-size: 1rem;
        }
      }

      .current {
        background-color: #1270ee;

        a {
          color: #ffffff;
        }
      }
    }

    .goPage {
      margin-left: auto;
    }

  }

</style>
