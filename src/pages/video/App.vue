<template>
  <div id="app">
    <n-header></n-header>
    <main class="main">
      <router-view></router-view>
    </main>
    <n-footer></n-footer>
    
  </div>
</template>

<script>
import nHeader from '@/components/Header.vue'
import nFooter from '@/components/Footer.vue'
import VideoList from '@/components/video/VideoList.vue'

export default {
  name: 'app',
  components: {
    nHeader, nFooter, VideoList
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