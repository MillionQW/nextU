<template>
  <div id="app">
    <n-header></n-header>
    <main class="main">
      <side-nav class="side-nav"></side-nav>
      <div class="search-container">
          <h2 class="search-title">搜索：{{this.searchWord}}</h2>
          <div class="category-container clearfix">
            <h3 class="category" v-show="livePreviews">直播回顾</h3>
            <div class="result-item"  v-for="(item, index) in this.livePreviews" :key="index">
              <div class="result-cover"><img :src="item.previewImgUrl" alt=""></div>
              <h4 class="result-title" :title="item.title">{{item.title}}</h4>
              <p class="result-teacher"><icon name="user-o"></icon>王教授</p>
              <p class="result-summary">{{item.description}}</p>
            </div>
          </div>
          <div class="category-container clearfix">
            <h3 class="category" v-show="livingrooms">直播间</h3>
            <a class="result-item" :href="' http://www.liuliuliuman.top:8081/live?liveid='+item.liveid" target="_blank"  v-for="(item, index) in this.livingrooms" :key="index">
              <div class="result-cover"><img :src="item.imgUrl" alt=""></div>
              <h4 class="result-title" :title="item.title">{{item.title}}</h4>
              <p class="result-teacher"><icon name="user-o"></icon>王教授</p>
              <p class="result-summary">{{item.description}}</p>
            </a>
          </div>
          <div class="category-container clearfix">
            <h3 class="category" v-show="liveRecords">直播预告</h3>
            <div class="result-item"  v-for="(item, index) in this.liveRecords" :key="index">
              <div class="result-cover"><img :src="item.recordImgUrl" alt=""></div>
              <h4 class="result-title" :title="item.title">{{item.title}}</h4>
              <p class="result-teacher"><icon name="user-o"></icon>王教授</p>
              <p class="result-summary">{{item.description}}</p>
            </div>
          </div>
          <div class="category-container clearfix">
            <h3 class="category" v-show="courses">课程</h3>
            <div class="result-item"  v-for="(item, index) in this.courses" :key="index">
              <div class="result-cover"><img :src="item.picture" alt=""></div>
              <h4 class="result-title" :title="item.title">{{item.name}}</h4>
              <p class="result-teacher"><icon name="user-o"></icon>王教授</p>
              <p class="result-summary">{{item.brief}}</p>
            </div>
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
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'app',
  data() {
    return {
      searchWord: '',
      livePreviews: '',
      livingrooms: '',
      liveRecords: '',
      courses: '',
      searchUrl: window['_CONFIG']['SEARCH']
    }
  },
  components: {
    nHeader, nFooter, SideNav, Icon
  },
  created() {
    this.getSearchRes();
    this.setTitle();
  },
  methods: {
    // 处理搜索字符串
    handleSearchWord(str) {
      str = str.slice(str.indexOf('search=')+7);
      let end = str.indexOf('&') === -1 ? undefined : str.indexOf('&');
      let word = str.slice(0, end);
      this.searchWord = word;
    },
    // 得到搜索结果
    getSearchRes() {
      let self = this;
      let search = decodeURIComponent(location.search);
      let searchUrl = window["_CONFIG"]["SEARCH"];
      search = this.handleSearchWord(search);
      $.ajax({
        type: 'POST',
        url: `http://www.liuliuliuman.top:8081/livingroom/searchRel?search=${self.searchWord}`
      }).done(function(res) {
        if (res.code = 200) {
          let initData = res.data;
          self.livePreviews = initData.livePreviews;
          self.livingrooms = initData.livingrooms;
          self.liveRecords = initData.liveRecords;
          self.courses = initData.courses;
        }
      }).fail(function(err) {
        console.log(err);
      })
    },
    setTitle() {
      document.title = `搜索 - ${this.searchWord}`
    }
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
.search-container {
  margin-top: 20px;
  .search-title {
    font-size: 20px;
    font-weight: normal;
  }
}
.category {
  margin: 10px 0;
}
.result-item {
  display: inline-block;
  float: left;
  width: 220px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  color: #4d4d4d;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  .result-cover {
    width: 220px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
  .result-title {
    padding: 14px 17px 2px 17px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .result-teacher {
    padding-right: 20px;
    margin-top: 5px;
    font-size: 12px;
    text-align: right;
    color: #396;
    svg {
      margin-right: 2px;
      vertical-align: text-bottom;
    }
  }
  .result-summary {
    height: 82px;
    padding: 5px 19px;
    font-size: 13px;
    color: #989898;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
}

</style>