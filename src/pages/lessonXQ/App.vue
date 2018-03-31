<template>
  <div class="container">
    <n-header></n-header>
    <main class="main">
      <side-nav class="side-nav"></side-nav>
      <div class="lessonXQ-header">
        <div class="inner-wrap">
          <div class="lessonXQ-header-cover"><img src="../../../static/img/lesson_cover.jpg" alt=""></div>
          <h2 class="lessonXQ-header-title">四级通关集训营-入门篇</h2>
        </div>
      </div>
      <div class="lessonXQ-left-container"></div>
      <div class="lessonXQ-right-container"></div>
    </main>
    <n-footer></n-footer>
  </div>
</template>
<script>
import nHeader from '@/components/Header.vue'
import nFooter from '@/components/Footer.vue'
import SideNav from '@/components/live/SideNav.vue'
export default {
  name: 'app',
  components: {
    nHeader, nFooter, SideNav
  }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';
.main {
    min-width: 1349px;
    width: 1349px;
    margin: 0 auto;
    *zoom:1;
}
.lessonXQ-header {
  width: 1212px;
  height: 343px;
  margin-top: 35px;
  background: #fff;
  .inner-wrap {
    padding: 50px 28px 29px 28px;
  }
}
.lessonXQ-header-cover {
  float: left;
  width: 470px;
  height: 266px;
  img {
    width: 100%;
    height: 100%;
  }
}
.lessonXQ-header-title {
  float: left;
  padding-left: 50px;
  font-size: 30px;
  line-height: .9;
}
</style>

