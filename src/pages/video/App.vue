<template>
  <div id="app">
    <n-header></n-header>
    <main class="main">
      <side-nav class="side-nav"></side-nav>
      <router-view></router-view>
    </main>
    <n-footer></n-footer>
    
  </div>
</template>

<script>
import nHeader from '@/components/Header.vue'
import nFooter from '@/components/Footer.vue'
import SideNav from '@/components/live/SideNav.vue'
import VideoRoom from '@/components/video/VideoRoom.vue'

export default {
  name: 'app',
  components: {
    nHeader, nFooter, VideoRoom, SideNav
  }
}
</script>

<style lang="scss">
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';

.main {
    width: 1200px;
    margin: 0 auto;
    *zoom:1;
}
.main:before,.main:after {
    content: "";
    display: table;
}
.main:after {
    clear: both;
}

</style>