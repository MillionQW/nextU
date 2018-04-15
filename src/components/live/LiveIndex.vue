<template>
    <section class="live-index">
        <div  class="prism-player" id="J_prismPlayer" style=""></div>
        <div class="program-wrap">
            <div class="tabs">
                <div @click="switchList(true)" class="parade-btn" :class="{active: showParade}">
                    <span>直播预告</span>
                </div>
                <div @click="switchList(false)" class="review-btn" :class="{active: !showParade}">
                    <span>历史回顾</span>
                </div>
            </div>
            <div class="program-list">
                <ul class="live-parade" v-show=this.showParade>
                    <li class="live-item living"   v-for="(item, index) in this.previewsList">
                        <div class="inner-item">
                            <span class="start-time">{{item.start}}</span>
                            <a href="" class="live-title">《{{item.title}}》</a>
                            <div class="live-cover" ><img :src="item.previewImgUrl" alt=""></div>
                            <span class="play-btn">抢先看</span>
                        </div>
                    </li>
                </ul>
                <ul class="live-review" v-show=!this.showParade>
                    <li class="live-item"  v-for="(item, index) in this.recordsList">
                        <div class="inner-item" :data-videoUrl="item.recordUrl" @click="playVideo">
                            <span class="start-time">{{item.start}}</span>
                            <a href="javascript:;" class="live-title">《{{item.title}}》</a>
                            <div class="live-cover" ><img :src="item.recordImgUrl" alt=""></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            recordsList: [],
            previewsList: [],
            showParade: false,
            firstVideo: '',
        }
        
    },
    created() {
        this.getInitData();
    },
    mounted() {
        
    },
    watch: {
        firstVideo: function() {
            this.playLiving(this.firstVideo, false);
        }
    },
    methods: {
        switchList(boolean) {
            this.showParade = boolean === true ? true : false;
        },
        getInitData() {
            let self = this;
            $.ajax({
                type: 'GET',
                url: 'http://www.liuliuliuman.top:8081/livingroom/',
            }).done(function(res) {
                if (res.code === 200) {
                    var data = res.data;
                    var records = data.records;
                    let recordsList = [];
                    let length = records.length / 3;
                    if (self.isMobile()) {
                        let j = 0;
                        for (let i = 0; i < length; i++) {
                            recordsList.push(records[j])
                            j += 3;
                        } 
                    } else {
                        let j = 2;
                        for (let i = 0; i < length; i++) {
                            recordsList.push(records[j])
                            j += 3;
                        } 
                    }
                   var previews = data.previews;
                   self.firstVideo = self.isMobile() ? records[0].recordUrl : records[2].recordUrl
                   for (var s in previews) {
                        var start = previews[s].start.slice(10,16)
                        previews[s].start = start
                   }
                   self.previewsList = previews;
                   for (var s in records) {
                        var start = records[s].start.slice(10,16)
                        records[s].start = start
                   }
                   self.recordsList = recordsList;
                }
            }).fail(function(err) {
                console.log(err);
            })
        },
        playLiving(url, boolean) {
            var self = this;
            // 初始化播放器
            var player = new Aliplayer({
                id: "J_prismPlayer",
                    autoplay: true,
                    isLive: boolean,
                    playsinline:true,
                    width:"792px",
                    height:"600px",
                    controlBarVisibility:"always",
                    useH5Prism:false,
                    useFlashPrism:false,
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
        },
        playVideo(e) {
            $('#J_prismPlayer').remove();
            $('.program-wrap').before('<div  class="prism-player" id="J_prismPlayer" style="float:left;position:relative;z-index:2"></div>')
            let url = e.currentTarget.getAttribute('data-videoUrl');
            this.playLiving(url, false)
        },
        isMobile() {
            var ua = navigator.userAgent.toLowerCase();
            var StringPhoneReg = "\\b(ip(hone|od)|android|opera m(ob|in)i"
                + "|windows (phone|ce)|blackberry"
                + "|s(ymbian|eries60|amsung)|p(laybook|alm|rofile/midp"
                + "|laystation portable)|nokia|fennec|htc[-_]"
                + "|mobile|up.browser|[1-4][0-9]{2}x[1-4][0-9]{2})\\b";
                    var StringTableReg = "\\b(ipad|tablet|(Nexus 7)|up.browser"
                + "|[1-4][0-9]{2}x[1-4][0-9]{2})\\b";

            var isIphone = ua.match(StringPhoneReg),
                isTable = ua.match(StringTableReg),
                isMobile = isIphone || isTable;

                if(isMobile) {
                    return true;
                }else {
                    return false;
                }
        }   
    }
    
}
</script>
<style lang="scss" scoped>
@import '../../CSS/colors.scss';
@import '../../CSS/common.scss';

.live-index {
    width: 1214px;
    min-width: 1213px;
    margin: 0 auto;
    margin-bottom: 80px;
    background: #fff;
    overflow: hidden;

    .prism-player {
        position: relative;
        float: left;
        z-index: 2;
    }

    .program-wrap {
        float: right;
        width: 413px;
        background: #fff;
        overflow: hidden;
    }
}

//预告回顾栏
.tabs {
    border-top: 1px solid $body_bg;
    border-bottom: 1px solid $liveIndex_green;
    overflow: hidden;

    .parade-btn, .review-btn {
        float: left;
        width: 50%;
        text-align: center;
        cursor: pointer;

        span {
            display: inline-block;
            padding: 24px 0;
            font-size: 20px;
            color: #333;
            cursor: pointer;

            &:hover, &.active {
                color: #4ea77a;
            }
        }
    }
}

.program-list {
    height: 528px;
    margin-right: -16px;
    overflow: auto;

    .live-parade {
        overflow: hidden;
    }
}

.active {
    background: #73dc96;
}

.live-item {
    
    overflow: hidden;

    .inner-item {
        position: relative;
        float: right;
        width: 93.7%;
        padding-top: 23px;
        border-left: 1px solid $liveIndex_green;
        cursor: pointer;

        &:hover {
            background: #f4f4f4;
        }

        &:hover>.start-time {
            color: $liveIndex_green;
        }
        &:hover a {
            color: $liveIndex_green;
        }

        &:hover>.live-cover {
            display: inline-block;
        }

        &:hover>.play-btn {
            display: inline-block;
        }

        &.active {
            background: #f4f4f4;
            .live-cover, .play-btn {
                display: inline-block;
            }
        }
        
        &:before {
            position: absolute;
            content: '';
            top: 31px;
            left: -5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $liveIndex_green;
        }

        .start-time, .live-title {
            display: inline-block;
        }
        
        .start-time {
            margin-left: 22px;
            vertical-align: middle;
        }

        .live-cover {
            display: none;
            width: 82px;
            height: 46px;
            margin-left: 98px; 
            margin-top: 20px;

            img {
                width: 100%;
            }
        }

            

        .live-title {
            float: right;
            width: 62%;
            padding-right: 52px;
            font-size: 16px;
            color: #666;
        }

        .play-btn {
            display: none;
            width: 47px;
            height: 17px;
            margin-left: 96px;
            color: $liveIndex_green;
            border: 1px solid $liveIndex_green;
            text-align: center;
            border-radius: 13px;
            font-size: 12px;
            cursor: pointer;

            &:hover {
                color: #fff;
                background: $base_green;
            }
        }
    }
}

// 正在播放
.living:first-child {
        background: #f4f4f4;

        .start-time {
            color: $liveIndex_green;
        }
        a {
            color: $liveIndex_green;
        }
        .live-cover {
            display: inline-block;
        }
        .live-title {
             color: #3c6;
        }
        .play-btn {
            display: inline-block;
        }
}

</style>