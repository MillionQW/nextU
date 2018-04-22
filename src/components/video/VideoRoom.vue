<template>
<section class="lv-container">
    <h4 class="title">{{courseSection.name}}</h4>
    <div  class="prism-player" id="J_prismPlayer" style=""></div>
    <div class="play-tools">
        <ul>
            <li><a href="#"><icon name="share-square-o"></icon>分享</a></li>
            <li><a href="#"><icon name="star-o"></icon>收藏</a></li>
            <li><a href="#"><icon name="warning"></icon>举报</a></li>
            <li><a href="#"><icon name="mobile"></icon>手机看直播</a></li>
        </ul>
    </div>
    <video-related></video-related>
</section>
</template>
<script>
import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import VideoRelated from './small/VideoRelated'

export default {
    data() {
        return {
            courseId: '',
            subClassify: '',
            sectionId: '',
            courseSection: '',
            videoUrl: ''
        }
    },
    components: {
        Icon, VideoRelated
    },
    mounted() {
        this.getQuery();
        this.getInitData();
    },
    watch: {
        videoUrl: function() {
            this.initPlayer(this.videoUrl);
        }
    },
    methods: {
        getQuery(){
            let url = location.href;
            let index = url.indexOf('?');
            let query = url.slice(index+1);
            let courIdIndex = query.indexOf('courseId=');
            let secIdIndex = query.indexOf('sectionId=');
            let andSignFirst = query.indexOf('&');
            let andSignLast = query.lastIndexOf('&');
            let courId = query.slice(courIdIndex+9, andSignFirst);
            let secId = secIdIndex = query.slice(secIdIndex+10, andSignLast);
            let subIndex = query.indexOf('subClassify');
            let subClassify = query.slice(subIndex+12, query.length);
            this.courseId = courId;
            this.subClassify = subClassify;
            this.sectionId = secId;
        },
        getInitData() {
            let self = this;
            $.ajax({
                type: 'GET',
                url: `http://39.108.152.157:8080/course/${this.courseId}/${this.sectionId}?subClassify=${this.subClassify}`
            }).done(function(res) {
                if (res.code === 200) {
                    let data = res.data;
                    if (data) {
                        self.courseSection = data.courseSection;
                        self.videoUrl = data.courseSection.videoUrl;
                    }
                }
            })
        },
        initPlayer(url) {
            // 初始化播放器
            var player = new Aliplayer({
            id: "J_prismPlayer",
                 autoplay: true,
                 isLive:false,
                 playsinline:true,
                 width:"1214px",
                 height:"600px",
                 controlBarVisibility:"always",
                 useH5Prism:false,
                 useFlashPrism:true,
                 source: url,
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
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/common.scss';
@import '../../CSS/colors.scss';
.title {
    margin: 20px 0;
    font-size: 20px;
}
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
.play-tools {
    padding-top: 15px;
    padding-bottom: 15px;
    clear: both;
    background: #fff;
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
</style>