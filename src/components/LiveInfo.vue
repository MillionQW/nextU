<template>
<section>
    <div class="container">
        <h3><icon name="star-o" class="star"></icon>我的收藏</h3>
        <div class="collectionList">
            <div class="collection_empty">
                <icon name="inbox"></icon>
                <span>暂无内容</span>
            </div>
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
<style lang="scss">
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
    .star {
        padding-right: 20px;
        width: auto;
        height: 20px;
    }
}

.collectionList {
    position: relative;
    width: 700px;
    height: 600px;
}

.collection_empty {
    position: absolute;
    top: 30%;
    left: 50%;
    text-align: center;
    color: $base_green;
    opacity: .7;
    svg {
        width: auto;
        height: 150px;
    }
    span {
        display: block;
        font-size: 20px;
    }
}
</style>