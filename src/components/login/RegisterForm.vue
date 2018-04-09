<template>
  <div class="login-container">
    <form action="" class="register-form">
      <label for="username" class="username"><i class="user-icon"></i><input name="username" type="text" id="username" placeholder="请输入手机号码或邮箱"></label>
      <label for="code" class="code"><i class="code-icon"></i><input type="text" id="nickname" placeholder="请输入昵称" ></label>
      <label for="password" class="password"><i class="password-icon"></i><input type="password" id="password" name="password" placeholder="请输入密码"><i class="eye-icon"></i></label>
      <label for="protocol" class="protocol"><input type="checkbox" value="know" id="protocol" class="protocol-input">我已阅读并同意<a class="protocol-link">《Next U 协议》</a></label>
      <button class="register-btn">确定</button>
    </form>
    <msg-dialog v-show="showDialog" :dialog-option="dialogOption" ref="dialog"></msg-dialog>
  </div>
</template>
<script>
import MsgDialog from '../dialog/MsgDialog';
export default {
    data() {
        return {
            showDialog: false,
            dialogOption: {
                text: '你已经完成注册！马上开始NexU课程吧！',
                confirmButtonText: '跳转到登录页'
            }
        }
    },
    mounted() {
        document.title = "注册 -NextU"
        this.validate();
    },
    methods: {
        validate() {
            let self = this;
            $().ready(function() {
                $(".register-btn").click(function(e) {
                    var val = $("#username").val();
                    e.preventDefault();
                    if (/^((1[3-8][0-9])+\d{8})$/.test(val) || /^\w+@\w+(\.\w+){1,2}$/.test(val)) {
                        self.register(); 
                        return;
                    } else {
                        $('.username').append("<label class='user-error' style='color: #f00'>手机或邮箱格式不正确</label>");
                        return false;
                    }
                   
                })
                $('.register-form').validate({
                    rules: {
                        username: {
                            required: true,
                            minlength: 2
                        },
                        password: {
                            required: true,
                            minlength: 5
                        }
                    },
                    messages: {
                        username: {
                            required: "请输入用户名",
                            minlength: "用户名长度不能小于2个字母"
                        },
                        password: {
                            required: "请输入密码",
                            minlength: "密码长度不能小于5个字母"
                        }
                    }
                });
            
            })
             
        },
        register() {
            let self = this;
            let username = $("#username").val();
            let password = $("#password").val();
            let nickname = $("#nickname").val();
            console.log(username,password,nickname)
            let json = JSON.parse(`{"userid":"${username}","password":"${password}","nickname":"${nickname}"}`)
            $.ajax({
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                url: 'http://www.liuliuliuman.top:8081/user/add',
                data: json
            }).done(function(res) {
                if (res.code === 200) {
                    self.showDialog = true;
                    self.$refs.dialog.confirm().then(() => {
                        self.$router.push({path: '/'});
                        self.$emit("jumpLogin", true)
                    })
                }
            }).fail(function(err) {
                console.log(err)
            })
        }
    },
    components: {
        MsgDialog
    }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/normalize.css';
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';
.register-form {
  width: 67%;
  margin: 0 auto;
  margin-top: 17px;
  .password {
    margin-top: 20px;
  }
  .code {
    margin-top: 20px;
  }
  .protocol {
      margin-left: 5px;
      line-height: 3;
      color: #d9d9d9;
      .protocol-link {
          
          cursor: pointer;
          color: #7ab695
      }
  }
  label {
    position: relative;
    display: block;
    input {
      text-indent: 3rem;
    }
    .user-icon, .code-icon, .password-icon, .eye-icon {
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
    .code-icon {
        top: 16px;
        background: url(../../../static/img/code.png) no-repeat;
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
    .getCode {
        position: absolute;
        display: block;
        right: 27px;
        top: 14px;
        color: #7ab695;
        cursor: pointer;
    }
    input {
      width: 305px;
      height: 47px;
      border-radius: 35px;
      border: 1px solid #ccc;
    }
    .protocol-input {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 4px;
        border-radius: 50%;
        background: #fff;
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
  .register-btn {
    width: 305px;
    height: 45px;
    margin-top: 15px;
    border-radius: 31px;
    color: #fff;
    background: $green_bg;
  }
}
#username-error {
    color: #f00;
}
</style>