<template>
<div class="news_container">
    <h3><icon name="bullhorn" class="bullhorn"></icon>系统消息</h3>
    <div class="news_container">
        <ul>
            <li v-for="(item, index) in systemNews" class="news_item">
                <a href="#" class="newsTitle">{{item.news_title}}</a>
                <span class="newsTime">{{item.news_time}}</span>
                <p class="newsContent">{{item.news_content}}</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
    components: {
        Icon
    },
    computed: {
        systemNews() {
            return this.$store.getters.getSystemNews
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../CSS/colors.scss';
@import './src/css/news_common.scss';

.bullhorn {
    padding-right: 5px;
}
</style>