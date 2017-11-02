<template>
  <div id="app" :class="{'aside-folded':asideFolded}">
    <!-- <img src="./assets/logo.png"> -->
    <v-header></v-header>
    <v-menu></v-menu>

    <div class="content">
      <div class="wrapper">
        <transition mode="out-in" enter-active-class="animated fadeInDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>

  </div>
</template>
<style scoped>
.animated{animation-duration: 0.5s;}
</style>
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
