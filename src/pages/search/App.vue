<template>
  <div id="app">
    <n-header></n-header>
    <main class="main">
      <side-nav class="side-nav"></side-nav>
      <div class="search-container">
          <h2 class="search-title">搜索：{{this.searchWord}}</h2>
          <div class="category-container">
            <h3 class="category" v-show="livingrooms">直播回顾</h3>
            <div class="result-item"  v-for="(item, index) in this.livePreviews" :key="index">
              <div class="result-cover"><img :src="item.previewImgUrl" alt=""></div>
              <div class="result-title">{{item.title}}</div>
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

export default {
  name: 'app',
  data() {
    return {
      searchWord: '',
      livePreviews: '',
      livingrooms: '',
      liveRecord: ''
    }
  },
  components: {
    nHeader, nFooter, SideNav
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
      search = this.handleSearchWord(search);
      $.ajax({
        type: 'POST',
        url: `https://easy-mock.com/mock/5a844150e92b195f8f13fad6/example/search?search=${self.searchWord}`
      }).done(function(res) {
        if (res.code = 200) {
          let initData = res.data;
          self.livePreviews = initData.livePreviews;
          self.livingrooms = initData.livingrooms;
          self.liveRecord = initData.liveRecord;
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
  float: left;
  width: 220px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 6px;
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
  }
}

</style>