<template>
  <div id="app">
    <n-header></n-header>
    <main class="main">
      <left-side></left-side>
      <div class="right-side">
        <router-view></router-view>
      </div>
    </main>
    <n-footer></n-footer>
    
  </div>
</template>

<script>
import nHeader from '@/components/Header.vue'
import PersonPage from '@/components/PersonPage.vue'
import LeftSide from '@/components/LeftSide.vue'
import nFooter from '@/components/Footer.vue'
import CreateCenter from '@/components/CreateCenter.vue'
import MyFollow from '@/components/MyFollow.vue'
import MyCollection from '@/components/MyCollection.vue'

export default {
  name: 'app',
  components: {
    nHeader, PersonPage, LeftSide, nFooter, CreateCenter, MyFollow, MyCollection
  }
}
</script>

<style lang="scss">
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';

#app {
  width: 1200px;
  margin: 0 auto;
}

.main {
    min-width: 1349px;
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
.right-side {
    float: right;
    margin-right: 110px;
}
</style>
