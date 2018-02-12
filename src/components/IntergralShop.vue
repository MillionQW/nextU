<template>
<div class="intergral_container">
    <ul class="sort">
        <li>综合</li>
        <li>价格 <icon name="sort"></icon></li>
    </ul>
    <div class="commodityList">
        <div class="commodity">
            <a href="">
                <img src="../assets/commodity_pic.jpg" alt="" class="commodity_pic">
                <span>爱奇艺VIP会员</span>
                <span><icon name="money"></icon> 999</span>
            </a>
        </div>
        <div class="commodity">
            <a href="">
                <img src="../assets/commodity_pic.jpg" alt="" class="commodity_pic">
                <span>爱奇艺VIP会员</span>
                <span><icon name="money"></icon> 999</span>
            </a>
        </div>
        <a href="">
        <div class="commodity">
                <img src="../assets/commodity_pic.jpg" alt="" class="commodity_pic">
                <span>爱奇艺VIP会员</span>
                <span><icon name="money"></icon> 999</span>
        </div>
        </a>
        <a href="">
        <div class="commodity">
                <img src="../assets/commodity_pic.jpg" alt="" class="commodity_pic">
                <span>爱奇艺VIP会员</span>
                <span><icon name="money"></icon> 999</span>
        </div>
        </a>
        <a href="">
        <div class="commodity">
                <img src="../assets/commodity_pic.jpg" alt="" class="commodity_pic">
                <span>爱奇艺VIP会员</span>
                <span><icon name="money"></icon> 999</span>
        </div>
        </a>
        <a href="">
        <div class="commodity">
                <img src="../assets/commodity_pic.jpg" alt="" class="commodity_pic">
                <span>爱奇艺VIP会员</span>
                <span><icon name="money"></icon> 999</span>
        </div>
        </a>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import IntergralShop from './IntergralShop'
export default {
    components: {
        Icon
    }
}
</script>
<style lang="scss" scoped>
@import '../CSS/colors.scss';
.sort {
    li {
        display: inline-block;
        margin-left: 50px;
        font-size: 18px;
        cursor: pointer;
    }
}

.commodityList {
    .commodity {
        margin: 30px 10px;
        margin-left: 18px;
        float: left;
        
        img {
            display: block;
            width: 150px;
            height: 120px;
            border-radius: 3px;

        }
        span {
            padding-top: 5px;
            display: block;
            text-align: center;
            cursor: pointer;
        }
        &:hover span {
            color: $base_green;
        }
        &:hover img{
            box-shadow: 2px 5px 1px 1px #ccc;
        }
    }
}
</style>