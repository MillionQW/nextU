<template>
    <section class="programlist">
        <div class="tabs">
            <div class="parade-btn">
                <i></i>
                <router-link tag="span" to="/" :class="{ active: isParade }" @click.native="toggleArea(true)" >直播预告</router-link>
            </div>
            <div class="review-btn">
                <i></i>
                <router-link tag="span" to="/review" :class="{ active: !isParade }" @click.native="toggleArea(false)">历史回顾</router-link>
            </div>
        </div>
        <div class="program-container">
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
    data() {
        return {
            isParade: true,
        }
    },
    methods: {
        toggleArea(isParade) {
            this.isParade = isParade;
            console.log(this.isParade)
        }
    },
    components: {
        Icon
    },
    computed: {
        ...mapGetters([
            'getReviewList',
        ])
    },
}
</script>
<style lang="scss" scoped>
@import '../../CSS/colors.scss';
@import '../../CSS/common.scss';

//这个嵌套只写大框架
.programlist {
    position: relative;
    width: 1211px;
    background: #fff;
    overflow: hidden;
    border-top: 2px solid #f0f0f0;

    .tabs {
        width: 100%;
        overflow: hidden;
    }
}


//切换按钮
.parade-btn, .review-btn {
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    i {
        display: inline-block;
        width: 48px;
        height: 48px;
        background: url(../../../static/img/未标题-1.png) no-repeat;
    }

    span  {
        display: inline-block;
        font-size: 30px;
        margin-top: 52px;
        padding-bottom: 20px;
        color: #939494;
        cursor: pointer;
        border: 2px solid transparent;

        &:hover, &.active {
            color: $base_green;
            border-bottom-color: $base_green;
        }
    }
}

//两个视频列表
.parade-container, review-container {
    overflow: hidden;
    ul {

    }
}

.parade-container, .review-container {
    width: 92.5%;
    margin: 0 auto;

}
.video-title, .begin-time, .lesson-type, .teacher-introduce, .play-btn {
    position: absolute;
    left: 418px;
    color: #666;
    
    svg {
        padding-right: 17px;
        color: $base_green;
    }
}
.video-item {
    position: relative;
    margin-top: 26px;
    padding-bottom: 55px;
    overflow: hidden;
    border-bottom: 1px solid #d2d2d2;

    .video-cover {
        float: left;
        width: 370px;
        height: 260px;
    }
    .video-title {
        a {
            color: #000;
            font-size: 26px;
        }
    }
    .begin-time {
        top: 66px;        
    }
    .lesson-type {
        top: 120px;
    }
    .teacher-introduce {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        top: 169px;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }
    .play-btn {
        top: 223px;
        left: 968px;
        width: 13%;
        border-radius: 5px;
        text-align: center;
        font-size: 18px;
        padding: 14px 0;
        color: #3c6;
        border: 1px solid #3c6;
        cursor: pointer;

        &:hover {
            color: #fff;
            background: #3c6;
        }
    }
}

</style>