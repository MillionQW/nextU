<template>
<section class="container">
    <h3><icon name="commenting-o" class="commenting fa-lg"></icon>我的消息</h3>
    <div class="news_slider">
        <ul class="news_nav">
            <router-link tag="li" to="/mynews/privatemessage"><icon name="envelope-o"></icon>私信</router-link>
            <router-link tag="li" to="/mynews/thecomment"><icon name="comments-o"></icon>评论</router-link>
            <router-link tag="li" to="/mynews/systemmessage"><icon name="bullhorn"></icon>系统消息</router-link>
        </ul>
    </div>
    <div class="news_main">
        <router-view></router-view>
    </div>
</section>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import PrivateMessage from './news/PrivateMessage'
import TheComment from './news/TheComment'
import SystemMessage from './news/SystemMessage'

export default {
    data() {
        return {}
    },
    components: {
        Icon, PrivateMessage, TheComment, SystemMessage
    }
}
</script>
<style lang="scss" scoped>
@import '../CSS/colors.scss';

.container {
    float: right;
    width: 800px;
    height: 720px;
    margin-top: 50px;
    box-shadow: 2px 2px 10px 5px $green_bd;
}

h3 {
    width: 700px;
    margin: 0 auto;
    color: $base_green;
    padding-top: 30px;
    padding-left: 63px;
    font-weight: normal;
    font-size: 25px;
    border-bottom: 1px solid $base_green;
    .heart {
        width: auto;
        height: 20px;
        padding-right: 20px;
    }
}

.news_slider {
    float: left;
    margin-left: 40px;
    margin-top: 40px;
    .currentnews {
        font-size: 20px;
    }
    .news_nav {
        height: 450px;
        margin-top: 20px;
        padding-top: 30px;
        padding-right: 30px;
        border-right: 1px solid #ccc;
        font-size: 18px;
        li {
            padding: 20px;
            cursor: pointer;

            svg {
                padding-right: 5px;
            }
        }
    }
}

.news_main {
    float: left;
    width: calc(80% - 60px);
    height: 500px;
    margin-top: 60px;
    margin-left: 10px;

}

.commenting {
    width: 20px;
}

.router-link-active {
    color: $base_green;
}
</style>