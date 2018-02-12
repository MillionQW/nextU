<template>
<section class="videoList">
    <nav class="videoNav">
        <ul>
            <li><a href="3">首页</a></li>
            <li><a href="#">视频区</a></li>
            <button @click="s">ss</button>
            <li v-for="item in getVideoList">{{item}}</li>
        </ul>
    </nav>
</section>
</template>
<script>
import Vue from 'vue'

export default {
    methods: {
        s() {
            console.log(this.getVideoList)
        }
    },
    computed: {
        getVideoList() {
            return this.$store.getters.getVideoList;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';
.videoNav {
    margin-top: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid $base_green;
    ul {
        li {
            display: inline-block;
            padding: 0 5px;
            
            & + li {
                  border-left: 1px solid $base_green;
            }

            a {
                display:inline-block;
                height: 95%;
                color: $base_green;
        
                
            }
        }
    }
}
</style>