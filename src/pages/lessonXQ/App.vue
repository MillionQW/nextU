<template>
  <div class="container">
    <n-header></n-header>
    <main class="main">
      <side-nav class="side-nav"></side-nav>
      <div class="lessonXQ-header">
        <div class="inner-wrap">
          <div class="lessonXQ-header-cover"><img src="../../../static/img/lesson_cover.jpg" alt=""></div>
          <h2 class="lessonXQ-header-title">四级通关集训营-入门篇</h2>
          <div class="rating-container">
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <div class="student-wrap"><span class="student">{{initData.student}}</span>人学过</div>
            <div class="level-wrap">课程等级：<span class="level">{{initData.level}}</span></div>
          </div>
          <div class="lesson-description">简介：{{initData.desc}}</div>
          <a href="" class="start-btn">开始学习</a>
        </div>
      </div>
      <div class="lessonXQ-left-container">
        <ul class="lesson-nav">
          <li :class="{active: active === 'content'}">章节</li>
          <li>评论</li>
          <li>问答</li>
        </ul>
        <div class="lesson-container">
          <ul class="lesson-content">
            <li class="lesson-charpter" v-for="(item, index) in content" :key="index">
              {{item.title}}
              <ul class="lesson-section">
                <li v-for="(item, index) in item.section" :key="index"><a>
                  第{{index+1}}课时 {{item.title}}
                  <span class="lesson-time">{{item.time}}</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
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
  },
  data() {
    return {
      initData: {},
      content: [],
      active: 'content'
    }
  },
  mounted() {
    this.getInitData()
  },
  methods: {
    getInitData() {
      let self = this;
      $.ajax({
        type: 'POST',
        url: 'https://easy-mock.com/mock/5a844150e92b195f8f13fad6/example/lessonxq'
      }).done(function(res) {
        if (res.code === 200) {
          let initData = res.data;
          self.initData = initData;
          self.content = initData.content;
          console.log(self.content)
        }
      })
    }
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
  position: relative;
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
.rating-container {
  margin-top: 38px;
  margin-left: 517px;
  color: #878787;
  .rating, .student-wrap, .level-wrap {
    float: left;
    margin-right:80px;
  }
  .student, .level {
    color: #396;
  }
}
.lesson-description {
  width: 550px;
  margin-top: 108px;
  margin-left: 517px;
  color: #878787;
}
.start-btn {
  position: absolute;
  display: inline-block;
  width: 110px;
  height: 35px;
  right: 30px;
  bottom: 30px;
  line-height: 34px;
  text-align: center;
  color: #fff;
  background: #396;
  border-radius: 35px;
  &:hover {
    opacity: .8;
  }
}
.lessonXQ-left-container {
  width: 835px;
  margin-top: 15px;
  margin-bottom: 50px;
  overflow: hidden;
  background: #fff;
  .lesson-nav {
    height: 40px;
    margin-left: 28px;
    margin-right: 28px;
    border-bottom: 1px solid #878787;
    li {
      display: inline-block;
      margin-right: 50px;
      line-height: 43px;
      font-weight: bold;
      &.active {
        color: #396;
      }
    }
  }
  .lesson-container {
    padding: 20px 0 28px 66px;
    .lesson-charpter {
      font-weight: bold;
      .lesson-section {
        padding-left: 30px;
        color: #878787;
        font-weight: normal;
        li {
          padding: 10px 0 10px 0;
          .lesson-time {
            float: right;
            padding-right: 40px;
          }
        }
      }
    }
  }
}
</style>

