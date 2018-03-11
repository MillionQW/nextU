<template>
  <section class="videoRelated">
      <div class="tabs">
          <div class="comment-btn">
              <router-link tag="span" to="/"  :class="{ active: switchTabs === 'comment' }" @click.native="toggleArea(true)" >相关评论</router-link>
          </div>
          <div class="introduction-btn">
              <router-link tag="span" to="/introduction"  :class="{ active: switchTabs === 'introduction' }" @click.native="toggleArea(true)" >视频简介</router-link>
          </div>
          <div class="recommand-btn">
              <router-link tag="span" to="/recommand"  :class="{ active: switchTabs === 'recommand' }" @click.native="toggleArea(true)" >相关推荐</router-link>
          </div>
      </div>
      <div class="related-container">
              <router-view></router-view>
      </div>
  </section>
</template>
<script>

export default {
    data() {
        return {
            switchTabs: 'comment'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../CSS/colors.scss';
@import '../../../CSS/common.scss';
.videoRelated {
    position: relative;
    width: 1211px;
    margin-top: 18px;
    background: #fff;
    overflow: hidden;

    .tabs {
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid#f0f0f0;
    }
}

//切换按钮
.comment-btn, .introduction-btn, .recommand-btn {
    float: left;
    width: 13%;
    text-align: center;
    cursor: pointer;
    span  {
        display: inline-block;
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 17px;
        padding-bottom: 18px;
        color: #939494;
        cursor: pointer;
        border: 2px solid transparent;

        &:hover, &.active {
            color: $base_green;
            border-bottom-color: $base_green;
        }
    }
}
.related-container {
    width: 1068px;
    margin: 0 auto;
    margin-top: 36px;
}
</style>


