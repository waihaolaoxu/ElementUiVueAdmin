<template>
  <div id="app" :class="{'aside-folded':asideFolded}">
    <!-- <img src="./assets/logo.png"> -->
    <v-header></v-header>
    <v-menu></v-menu>

    <div class="container">
      <div class="wrapper">
        <!-- <div class="here">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div> -->
        <transition mode="out-in" enter-active-class="animated fadeInUp">
          <router-view></router-view>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import header from './components/block/Header'
import menu from './components/block/Menu'
import bus from './state'
export default {
  name: 'app',
  data(){
    return {
      asideFolded: true
    }
  },
  created(){
      var _self = this;
      bus.$on('asideToggle', function (asideFolded) {
          _self.asideFolded = asideFolded;
      })
  },
  components: {
    'v-header': header,
    'v-menu': menu
  }
}
</script>

<style lang="scss">
@import './assets/app/css/app.scss'
</style>
