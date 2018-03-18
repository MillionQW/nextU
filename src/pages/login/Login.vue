<template>
  <div class="container">
      <header class="header">
        <div class="logo"><a href=""></a></div>
      </header>
      <main class="main">
        <div class="box">
          <div class="signHeader">
            <router-link to="/" tag="div" class="signupTab" @click.native="switchTab(0)"><span :class="{active: this.signup}">登录</span></router-link>
            <router-link to="/register" tag="div" class="signinTab" @click.native="switchTab(1)"><span :class="{active: !this.signup}">注册</span></router-link>
          </div>
          <router-view></router-view>
        </div>
      </main>
      <n-footer></n-footer>
  </div>
</template>
<script>
import nFooter from '@/components/Footer.vue';
export default {
  data() {
    return {
      signup: true,
    }
  },
  methods: {
    switchTab(num) {
      this.signup = num === 0 ? true : false;
    }
  },
  components: {
    nFooter
  }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';
html {
  width: 100%;
  height: 100%;
  background: $body_bg;
}

.container {
  min-width: 1349px;
  margin: 0 auto;
  background: $body_bg;
}
.header {
  overflow: hidden;
  height: 341px;
  background: url(../../../static/img/login_bg.jpg);
  background-size: cover;
  .logo {
    width: 175px;
    height: 135px;
    margin: 0 auto;
    margin-top: 30px;
    background: url(../../../static/img/login_logo.png) no-repeat;
    a {
      display: block;
      width: 175px;
      height: 135px;
    }
  }
}
.main {
  
  
  .box {
    width: 475px;
    height: 453px;
    background: #fff;
    margin: 0 auto;
    margin-top: -125px;
    border-radius: 1.5%;
  }
}
.signHeader {
  width: 100%;
  height: 87px;
  .signupTab, .signinTab {
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    span {
      display: block;
      width: 40%;
      margin: 0 auto;
      padding: 25px 0 20px;
      font-size: 25px;
      color: #666;
      &.active {
        color: $green_bg;
        border-bottom: 4px solid $green_bg;
      }
      &:hover {
        color: $green_bg;
        border-bottom: 4px solid $green_bg;
      }
    }
  }
}
footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}


</style>


