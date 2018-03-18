<template>
  <div class="login-container">
    <form action="" class="login-form">
      <p><label for="username" class="username"><i class="user-icon"></i><input type="text" name="username" id="username" placeholder="请输入手机号码或邮箱"></label></p>
      <p><label for="passowrd" class="password"><i class="password-icon"></i><input type="password" name="password" id="password" placeholder="请输入密码"><i class="eye-icon"></i></label></p>
      <a class="forgetPsw">忘记密码</a>
      <button class="login-btn">登录</button>
    </form>
    <div class="more-login">
      <h6>使用第三方帐号登录</h6>
      <ul>
        <li><a href="" class="weixin"></a></li>
        <li><a href="" class="qq"></a></li>
        <li><a href="" class="weibo"></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.validate();
  },
  methods: {
   validate() {
      $().ready(function() {
      $('.login-form').validate({
        rules: {
          username: {
            required: true
          },
          password: {
            required: true
          }
        },
        messages: {
          username: {
            required: "请输入手机或邮箱"
          },
          password: {
            required: "请输入密码"
          }
        }
      });
    })
    }    
  }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';
.login-form {
  width: 67%;
  margin: 0 auto;
  margin-top: 17px;
  .password {
    margin-top: 20px;
  }
  label {
    position: relative;
    display: block;
    input {
      text-indent: 3rem;
    }
    .user-icon, .password-icon, .eye-icon {
      position: absolute;
      left: 22px;
      top: 14px;
      display: inline-block;
      width: 22px;
      height: 22px;
    }
    .user-icon {
      background: url(../../../static/img/login.png) no-repeat;
    }
    .password-icon {
      background: url(../../../static/img/password.png) no-repeat;
    }
    .eye-icon {
      left: 270px;
      top: 23px;
      background: url(../../../static/img/closeeye.png) no-repeat;
      cursor: pointer;
    }
    input {
      width: 305px;
      height: 47px;
      border-radius: 35px;
      border: 1px solid #ccc;
    }
    
  }
  .forgetPsw {
    display: block;
    text-align: right;
    padding-top: 10px;
    padding-right: 20px;
    color: #ccc;
    text-decoration: underline;
    cursor: pointer;
  }
  .login-btn {
    width: 305px;
    height: 45px;
    margin-top: 15px;
    border-radius: 31px;
    color: #fff;
    background: $green_bg;
  }
}
.more-login {
  margin-top: 20px;
  text-align: center;
  h6 {
    position: relative;
    text-align: center;
    color: #dadada;
    font-size: 14px;
    font-weight: normal;
    &:after, &:before {
      content: '';
      position: absolute;
      width: 82px;
      border-top: 1px solid #dadada;
    }
    &:before {
      left: 87px;
      top: 12px;
    }
    &:after {
      top: 10px;
      right: 92px;
    }
  }
  ul {
    margin-top: 20px;
    li {
      display: inline-block;

      a {
        display: inline-block;
        width: 33px;
        height: 33px;
        margin: 0 30px;
      }
      .weixin {
        background: url(../../../static/img/weixin.png) no-repeat;
      }
      .qq {
        background: url(../../../static/img/qq.png) no-repeat;
      }
      .weibo {
        background: url(../../../static/img/weibo.png) no-repeat;
      }
    }
  }
}
</style>