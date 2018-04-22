<template>
  <div class="container">
    <n-header></n-header>
    <main class="main">
      <side-nav class="side-nav"></side-nav>
      <div class="lessonXQ-header">
        <div class="inner-wrap">
          <div class="lessonXQ-header-cover"><img src="../../../static/img/lesson_cover.jpg" alt=""></div>
          <h2 class="lessonXQ-header-title">{{courseVO.name}}</h2>
          <div class="rating-container">
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <div class="student-wrap"><span class="student">{{courseVO.studyCount}}</span>人学过</div>
            <div class="level-wrap">课程等级：<span class="level">{{courseVO.level}}</span></div>
          </div>
          <div class="lesson-description">简介：{{courseVO.brief}}</div>
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
              {{item.name}}
              <ul class="lesson-section">
                <li v-for="(item, index) in item.subCourseSectionList" :key="index"><a :href="`\/\/www.liuliuliuman.top:8081/video.html#/?courseId=${item.courseId}&sectionId=${item.id}&subClassify=${subClassify}`" target="_blank">
                  第{{index+1}}课时 {{item.name}}
                  <span class="lesson-time">{{item.time}}</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="lessonXQ-right-container">
        <div class="lesson-teacher-container">
          <div class="teacher-avtor">
            <img :src="courseVO.tPicture" alt="">
          </div>
          <h4 class="teacher-name">
            {{courseVO.name}}
          </h4>
          <p class="teacher-desc">{{courseVO.tBrief}}</p>
          <a class="follow-btn">关注</a>
        </div>
        <div class="lesson-relate-container">
          <h4 class="relate-caption">相关课程</h4>
          <ul class="relateList">
            <li class="relate-item" v-for="(item, index) in relative" :key="index"><a href="">{{item.name}}</a></li>
          </ul>
        </div>
      </div>
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
      courseVO: {},
      content: [],
      relative: [],
      active: 'content',
      token: '',
      courseId: 28,
      subClassify: 'cet4'
    }
  },
  mounted() {
    this.getQueryString();
    this.getToken();
    this.getInitData();
  },
  methods: {
    getQueryString() {
      let url = location.href;
      let index = url.indexOf('?');
      let query = url.slice(index + 1);
      let idIndex = query.indexOf('courseId=');
      let andSign = query.indexOf('&');
      let courseId = query.slice(idIndex+9, andSign);
      let subIndex = query.indexOf('subClassify');
      let subClassify = query.slice(subIndex+12, query.length);
      this.courseId = courseId;
      this.subClassify = subClassify;
    },
    getToken() {
      if (localStorage.user) {
        let user = JSON.parse(localStorage.user);
        let token = user.token;
        this.token = token;
      }
    },
    getInitData() {
      let self = this;
      $.ajax({
        type: 'GET',
        url: `http://39.108.152.157:8080/course/${this.courseId}?subClassify=${this.subClassify}&token=${self.token}`
        // url: 'https://easy-mock.com/mock/5a844150e92b195f8f13fad6/example/lessonxq'
      }).done(function(res) {
        if (res.code === 200) {
          console.log(res)
          let initData = res.data;
          self.initData = initData;
          self.courseVO = initData.courseVO;
          self.content = initData.sectionList;
          self.relative = initData.recommendCourse;
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
  float: left;
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
          a {
            color: #878787;
          }
          .lesson-time {
            float: right;
            padding-right: 40px;
          }
        }
      }
    }
  }
}
.lessonXQ-right-container {
  float: right;
  margin-right: 135px;
  color: #4d4d4d;
  .lesson-teacher-container {
    width: 355px;
    height: 325px;
    margin-top: 15px;
    background: #fff;
    .teacher-avtor {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      padding-top: 25px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .teacher-name {
      margin-top: 20px;
      text-align: center;
    }
    .teacher-desc {
      margin-top: 10px;
      padding: 0 13px;
      text-align: center;
    }
    .follow-btn {
      display: block;
      width: 60px;  
      margin: 0 auto;
      margin-top: 20px;
      padding: 2px 4px;
      color: #396;
      font-size: 14px;
      text-align: center;
      border: 1px solid #396;
      border-radius: 11px;
      cursor: pointer;
      &:hover {
        background: #396;
        color: #fff;
        opacity: .8;
      }
    }
  }
  .lesson-relate-container {
    width: 355px;
    height: 250px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #fff;
    .relate-caption {
      padding: 18px;
    }
    .relateList {
      padding-left: 18px;
      .relate-item {
        padding-bottom: 10px;
        a {
          color: #4d4d4d;
        }
      }
    }
  }
}
</style>

