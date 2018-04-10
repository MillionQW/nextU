<template>
    <header class="header">
        <div class="header-top">
            <h1 class="logo">Next U</h1>
            <div class="search-area">
                <input type="text" class="search-input" ref="searchInput" placeholder="搜索考研/BEC..." @keyup.enter="search">
                <div class="search-icon" @click="search"><icon name="search" class="search-icon"></icon></div>
            </div>
            <div class="login-area" v-show="!username">
                <ul>
                    <li><a :href="loginLink" target="_self" class="login">登录</a></li>
                    <li><a href="">注册</a></li>
                </ul>
            </div>
            <div class="login-area" v-show="username">
                <ul>
                    <li class="user_card_box"><a href="" class="user_card"><img src="../assets/user.jpg" alt=""></a></li>
                    <li><a href="" class="user">{{this.username}}</a></li>
                    <li><a href="" @click="logout">退出</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
    components: {
        Icon
    },
    data(){
        return {
            username: '',
            loginLink: window["_CONFIG"]["LOGIN"]
        }
    },
    mounted() {
        if (localStorage.user) {
            let userinfo = JSON.parse(localStorage.user);
            this.username = userinfo.user.nickname;
        }
    },
    methods: {
        search() {
            let value = this.$refs.searchInput.value;
            window.open(`http://localhost:8081/search.html?search=${value}`)
        },
        logout() {
            localStorage.clear('user')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../CSS/colors.scss';
@import '../CSS/common.scss';

.header {
    min-width: 1349px; 
    height: 65px;
    margin: 0 auto;
    padding-bottom: 21px;
    overflow: hidden;
    background: #fff;
    z-index: 1000;
    
    .header-top {
        width: 1088px;
        height: 100px;
        margin: 0 auto;
        margin-bottom: 15px;
        .logo {
            float: left;
            width: 137px;
            height: 43px;
            padding-top: 5px;
            margin-top: 20px;
            
            text-align: right;
            background: url(../assets/logo.png) no-repeat ;
            background-size: 43px 43px;
            font-size: 27px;
            font-weight: 400;
            line-height: 40px;
            color: $base_green;
        }
        .search-area {
            position: relative;
            float: left;
            width: 504px;
            height: 42px;
            padding-top: 21px;
            margin-left: 190px;
            .search-input {
                width: 504px;
                height: 42px;
                border: 1px solid #dadbdb;
                border-radius: 45px;
                text-indent: 2em;
            }
            .search-icon {
                position: absolute;
                right: -1px;
                top: 21px;
                width: 48px;
                height: 43px;
                border-radius: 0 40px 40px 0;
                background: $green_bg;
                cursor: pointer;
                svg {
                    top: -2px;
                    right: 10px;
                    width: 30px;
                    color: #fff;
                    background: transparent;
                    border-radius: 0;
                }
            }
        }
        .login-area {
            position: relative;
            float: right;
            margin-top: 33px;
            ul li {
                position: relative;
                display: inline-block;

                a {
                    padding-right: 5px;
                    font-weight: 600;
                    color: $base_green;
                }
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                .user {
                    border-right: $base_green 2px solid;
                    color: #414141;
                }
            }
            .user_card_box {
                position: absolute;
                top: -10px;
                left: -45px;
                a {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
//     .header-nav {
//         height: 40px;
//         background: $green_bg;

//         ul {
//             width: 1200px;
//             margin: 0 auto;
//             text-align: right;
//             height: 40px;
//             padding-right: 50px;
//             li {
//                 display: inline-block;
//                 padding-right: 120px;
//                 a {
//                     line-height: 40px;
//                     color: #fff;
//                 }
//             }
//         }
//     }
}

</style>