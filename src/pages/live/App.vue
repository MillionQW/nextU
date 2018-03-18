<template>
  <div id="app">
    <n-header></n-header>
    <main class="main">
        <side-nav class="side-nav"></side-nav>
        <router-view>
        </router-view>
    </main>
    <n-footer></n-footer>
    
  </div>
</template>

<script>
import nHeader from '@/components/Header.vue';
import nFooter from '@/components/Footer.vue';
import LiveContainer from '@/components/live/LiveContainer.vue';
import SideNav from '@/components/live/SideNav.vue';
import LiveIndex from '@/components/live/LiveIndex.vue';


export default {
  name: 'app',
  components: {
    nHeader, nFooter,LiveContainer, SideNav, LiveIndex
  }
}
</script>

<style lang="scss" scoped>
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';

header {
  position: fixed;
  top: 0;
  width: 100%;
}
.main {
    width: 1349px;
    min-width: 1349px;
    margin: 0 auto;
    margin-top: 86px;
    *zoom:1;
}
.main:before,.main:after {
    content: "";
    display: table;
}
.main:after {
    clear: both;
}
.side-nav {
  position: fixed;
  left: 0;
  top: 90px;
}
</style>

