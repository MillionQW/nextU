<template>
<section class="container">
    <h3><icon name="wrench" class="wrench"></icon>创作中心</h3>
    <a href="" class="moreTools">更多工具>></a>
    <ul class="toolList">
        <li>
            <icon name="envelope-o"></icon><h4>投稿工具 <span>多任务  断点续传</span></h4>
            <button>立即下载</button>
        </li>
        <li>
            <icon name="film"></icon><h4>视频压制工具<span>一键压制 无损转码</span></h4>
            <button>立即下载</button>
        </li>
    </ul>
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
    .wrench {
        padding-right: 20px;
    }
}

.toolList {
    width: 500px;
    margin: 0 auto;
    color: $base_green;
    li {
        position: relative;
        margin-top: 40px;
        margin-bottom: 100px;
        svg {
            display: inline-block;
            width: auto;
            height: 2.5em;
            padding: 10px 20px;
            border-radius: 8px;
            border: 4px solid $base_green;
                
        }
        h4 {
            position: absolute;
            top: 5px;
            left: 100px;
            display: inline-block;
            font-weight: 400;
            font-size: 20px;
            span {
                position: absolute;
                display: inline-block;
                top: 30px;
                left: 0;
                width: 200px;
                font-size: 14px;
            }
        }
        button {
            position: absolute;
            top: 15px;
            right: 40px;
            padding: 5px 10px;
            border: 0;
            border-radius: 5px;
            color: #fff;
            background: $green_bg;
        }
    }
    
    
}



.moreTools {
    display: block;
    padding-top: 20px;
    padding-right: 15px;
    text-align: right;
    color: #ccc;
}
</style>