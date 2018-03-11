<template>
    <div class="slider">
        <div class="user_info">
            <div class="user_pic">
                <img src="../assets/user.jpg" alt="">
            </div>
            <ul>
                <li><a href="">李明</a></li>
                <li><a href="">LV 6</a></li>
                <li><icon name="mars"></icon></li>
            </ul>
            <ul>
                <li>关注：<a href="">10</a></li>
                <li>粉丝：<a href="">9</a></li>
                <li>消息：<a href="">999</a></li>
            </ul>
        </div>
        <div class="slider_nav">
            <ul>
                <router-link tag="li" to="/myintergral"><icon name="money"></icon><a href="#">我的积分</a></router-link >
                <router-link tag="li" to='/mycollection'><icon name="star-o"></icon><a href="">我的收藏</a></router-link>
                <router-link tag="li" to="/myfootprint"><icon name="map-o"></icon><a href="#">我的足迹</a></router-link>
                <router-link tag="li" to="/myfollow"><icon name="heart-o"></icon><a>我的关注</a></router-link>
                <li><icon name="globe"></icon><a href="">我的圈子</a></li>
                <li><icon name="bullhorn"></icon><a href="">我的活动</a></li>
                <li><icon name="film"></icon><a href="">创作中心</a></li>
                <router-link tag="li" to="/createcenter"><icon name="wrench"></icon><a>创作工具</a></router-link>
                <router-link tag="li" to='/mynews'><icon name="commenting-o"></icon><a href="">我的消息</a></router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
    data() {
        return {
        }
    },
    components: {
        Icon
    }
}
</script>
<style lang="scss" scoped>
@import '../CSS/colors.scss';

.slider {
    float: left;
    margin-top: 50px;
    margin-left: 90px;
    
    .user_info {
        width: 320px;
        height: 255px;
        background: $green_bg;
        box-shadow: 0px -5px 30px 5px #ccc;
        .user_pic {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            padding-top: 20px;
            color: #fff;
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
        ul {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            li {
                display: inline-block;
                padding-right: 15px;
                padding-right: 15px;
                color: #fff;
                a {
                    color: #fff;
                    
                }
            }
        }
    }
}

.slider_nav {
    width: 320px;
    height: 460px;
    padding-top: 10px;
    box-shadow: 2px 6px 10px 5px $green_bd;
    background: #fff;
    ul {
        margin: 0 auto;
        width: 100%;
        padding-left: 0;
        text-align: center;
        
        li {
            padding-top: 15px;
            padding-bottom: 10px;
            color: $base_green;

            a {
                padding-left: 1em;
                color: $base_green;

            }
        }
    }
}

.router-link-active {
    background: $green_bg;
    color: #fff !important;
    a {
        color: #fff !important;
    }
}
</style>