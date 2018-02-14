<template>
    <section class="live-area">
        <div  class="prism-player" id="J_prismPlayer" style=""></div>
        <room-chatbox></room-chatbox>
        <div class="play-tools">
            <ul>
                <li><a href="#"><icon name="share-square-o"></icon>分享</a></li>
                <li><a href="#"><icon name="star-o"></icon>收藏</a></li>
                <li><a href="#"><icon name="warning"></icon>举报</a></li>
                <li><a href="#"><icon name="mobile"></icon>手机看直播</a></li>
            </ul>
        </div>
        <program-list></program-list>
    </section>
</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import RoomChatbox from './small/RoomChatbox'
import ProgramList from './ProgramList'

export default {
    components: {
        Icon, RoomChatbox, ProgramList
    },
    
    created() {
        this.getInitDate();
    },
    mounted() {
        this.initPlayer();
    },
    methods: {
        initPlayer() {
            // 初始化播放器
            var player = new Aliplayer({
            id: "J_prismPlayer",
                 autoplay: true,
                 isLive:true,
                 playsinline:true,
                 width:"792px",
                 height:"600px",
                 controlBarVisibility:"always",
                 useH5Prism:false,
                 useFlashPrism:true,
                 source:"http://live.liuliuliuman.top/nextu/livestream.flv",
                 cover:"",
                 skinLayout:[{"name":"bigPlayButton","align":"blabs","x":30,"y":80},
                        {"name":"H5Loading","align":"cc"},
                        {"name":"errorDisplay","align":"tlabs","x":0,"y":0},
                        {"name":"infoDisplay","align":"cc"},
                        {"name":"controlBar","align":"blabs","x":0,"y":0,"children":[{"name":"progress","align":"tlabs","x":0,"y":0},
                        {"name":"playButton","align":"tl","x":15,"y":26},
                        {"name":"fullScreenButton","align":"tr","x":20,"y":25},
                        {"name":"timeDisplay","align":"tl","x":10,"y":24},
                        {"name":"setButton","align":"tr","x":20,"y":25},
                        {"name":"streamButton","align":"tr","x":20,"y":23},
                        {"name":"volume","align":"tr","x":20,"y":25}]},
                        {"name":"fullControlBar","align":"tlabs","x":0,"y":0,"children":[{"name":"fullTitle","align":"tl","x":25,"y":6},
                        {"name":"fullZoom","align":"cc"},
                        {"name":"fullNormalScreenButton","align":"tr","x":24,"y":13},
                        {"name":"fullTimeDisplay","align":"tr","x":10,"y":12}]}]
                 },function(player){
                    console.log("播放器创建了。");
                  }
            );
        },
        getInitDate() {
            $.ajax({
                url: 'http://www.liuliuliuman.top:8081/livingroom/12',
                success: function(res) {
                    console.log(res);
                }
            })
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../CSS/colors.scss';
@import '../../CSS/common.scss';

.live-area {
    width: 1214px;
    min-width: 1213px;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;

    .prism-player {
        position: relative;
        float: left;
        z-index: 2;
    }
    

    .play-tools {
        padding-top: 15px;
        padding-bottom: 15px;
        clear: both;
        ul {
            padding-left: 24px;
            li {
                display: inline-block;
                padding-right: 54px;

                a {
                    display: inline-block;
                    color: #c1c1c1;

                    &:hover {
                        color: #a7a7a7;
                    }

                    svg {
                        display: inline-block;
                        vertical-align: bottom;
                        padding-right: 11px;
                    }
                }
            }
        }
    }
}
</style>