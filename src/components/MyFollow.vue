<template>
<section class="container">
    <h3><icon name="heart-o" class="heart"></icon>我的关注</h3>
    <div class="followList">
        <div class="following">
            <a href="">
                <img src="../assets/user.jpg" class="avatar" alt="">
                <span class="following_name">李教授</span>
                <span class="following_num"><span class="flwing_num">345</span>人已关注</span>
            </a>
            <a href="" class="video_cover">
                <img src="../assets/video_cover.jpg" alt="">
                <h4>如何学好马克思主义</h4>
            </a>
        </div>
        <div class="following">
            <a href="">
                <img src="../assets/user.jpg" class="avatar" alt="">
                <span class="following_name">李教授</span>
                <span class="following_num"><span class="flwing_num">345</span>人已关注</span>
            </a>
            <a href="" class="video_cover">
                <img src="../assets/video_cover.jpg" alt="">
                <h4>如何学好马克思主义</h4>
            </a>
        </div><div class="following">
            <a href="">
                <img src="../assets/user.jpg" class="avatar" alt="">
                <span class="following_name">李教授</span>
                <span class="following_num"><span class="flwing_num">345</span>人已关注</span>
            </a>
            <a href="" class="video_cover">
                <img src="../assets/video_cover.jpg" alt="">
                <h4>如何学好马克思主义</h4>
            </a>
        </div><div class="following">
            <a href="">
                <img src="../assets/user.jpg" class="avatar" alt="">
                <span class="following_name">李教授</span>
                <span class="following_num"><span class="flwing_num">345</span>人已关注</span>
            </a>
            <a href="" class="video_cover">
                <img src="../assets/video_cover.jpg" alt="">
                <h4>如何学好马克思主义</h4>
            </a>
        </div><div class="following">
            <a href="">
                <img src="../assets/user.jpg" class="avatar" alt="">
                <span class="following_name">李教授</span>
                <span class="following_num"><span class="flwing_num">345</span>人已关注</span>
            </a>
            <a href="" class="video_cover">
                <img src="../assets/video_cover.jpg" alt="">
                <h4>如何学好马克思主义</h4>
            </a>
        </div><div class="following">
            <a href="">
                <img src="../assets/user.jpg" class="avatar" alt="">
                <span class="following_name">李教授</span>
                <span class="following_num"><span class="flwing_num">345</span>人已关注</span>
            </a>
            <a href="" class="video_cover">
                <img src="../assets/video_cover.jpg" alt="">
                <h4>如何学好马克思主义</h4>
            </a>
        </div>
    </div>
</section>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
    components: {
        Icon
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
    background: #fff;
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

.followList {
    overflow: hidden;
    width: 790px;
    margin: 0 auto;
}
.following {
    float: left;
    width: 220px;
    height: 230px;
    margin: 20px;
    margin-top: 45px;
    a {
        position: relative;
        display: inline-block;
        margin-bottom: 10px;
        .avatar {
            width: 50px;
            height: 50px;
            margin-left: 5px;
            margin-right: 5px;
            border-radius: 50%;
        }
        .following_name {
            position: absolute;
            top: 5px;
        }

    }

    .video_cover {

        img {
            width: 220px;
            height: 144px;
            border-radius: 5px;
        }
        h4 {
            padding-top: 2px;
            text-align: center;
            font-weight: 500;
            &:hover {
                color: $base_green;
            }
        }
        &:hover h4 {
            color: $base_green;
        }
        &:hover img{
            box-shadow: 2px 5px 1px 1px #ccc;
        }
    }
}
.flwing_num {
    color: $base_green;
}
</style>