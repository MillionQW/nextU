<template>
<section>
    <div class="container">
        <h3><icon name="map-o" class="map"></icon>我的足迹</h3>
        <div class="browsingContainer">
            <div v-for="(item, index) in footprint" class="browsingHistory">
                <div class="browsingTime">{{item.browsing_time}}</div>
                <ul class="browsingList">
                    <li v-for="video in item.browsing_list">
                        <a href="" class="video_cover">
                            <img :src="video.video_cover" alt="">
                            <h4>{{video.video_title}}</h4>
                        </a>
                    </li>
                </ul>
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
    computed: {
        footprint() {
            console.log(this.$store.getters.getFootprint)
            return this.$store.getters.getFootprint
        }
    },
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
    .map {
        padding-right: 20px;
        width: auto;
        height: 20px;
    }
}

.browsingContainer {
    width: 95%;
    margin: 0 auto;
    .browsingHistory {
        width: 100%;
        margin-top: 20px;
        ul {
            width: 100%;
            overflow: hidden;
            li {
                float: left;
                width: 220px;
                height: 200px;
                margin: 20px 20px 20px 0;
                & + li {
                    margin-left: 20px;
                }
                a {
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
        }
        .browsingTime {
            color: #999;
        }
    }
}
</style>
