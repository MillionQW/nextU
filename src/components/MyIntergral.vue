<template>
<section>
    <div class="container">
        <h3><icon name="money" class="star"></icon>我的积分</h3>
        <div class="intergral_slider">
            <div class="currentIntergral">
                当前积分：<span class="intergral_num">999</span>
            </div>
            <ul class="intergral_nav">
                <router-link to="/myintergral/" tag="li">积分商城</router-link>
                <router-link to="/myintergral/intergraldetail" tag="li">收支明细</router-link>
                <router-link to="/myintergral/knowintergral" tag="li">了解积分</router-link>
                <router-link to="/myintergral/intergralvoucher" tag="li">积分券</router-link>
                <router-link to="/myintergral/earnintergral" tag="li">赚积分</router-link>
            </ul>
        </div>
        <div class="intergral_main">
            <router-view></router-view>
        </div>
    </div>
</section>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import IntergralShop from './IntergralShop'

export default {
    components: {
        Icon, IntergralShop
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
    .money {
        padding-right: 20px;
        width: auto;
        height: 20px;
    }
}

.intergral_slider {
    float: left;
    margin-left: 40px;
    margin-top: 40px;
    .currentIntergral {
        font-size: 20px;
    }
    .intergral_nav {
        height: 450px;
        margin-top: 20px;
        padding-top: 30px;
        padding-right: 30px;
        border-right: 1px solid #ccc;
        font-size: 18px;
        li {
            padding: 20px;
            cursor: pointer;
        }
    }
}

.intergral_main {
    float: right;
    width: 560px;
    height: 500px;
    margin-top: 60px;

}

.router-link-active {
    color: $base_green;
}
</style>