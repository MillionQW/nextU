<template>
    <section class="live-area">
        <div class="room-head">
            <h2 class="lesson-title">{{room_info.title}}</h2>
            <div class="live-btn" @click.prevent="startLiving($event)">
                <label class="switch-btn no-radius" v-show="myRoom">
                    <input class="checked-switch" type="checkbox" v-model="closeLive" />
                    <span class="text-switch" data-yes="开始直播" data-no="关闭直播"></span> 
                    <span class="toggle-btn"></span> 
                </label>
            </div>
            <button class="live-flow" @click="getFlow" v-show="myRoom">获取推流码</button>
        </div>
        <Modal v-model="modal1"  title="直播信息">
            <p>rtmp地址：<Input v-model="initData.playUrlRtmp" readonly></Input></p>
            <p>直播码：<Input v-model="initData.streamKey" type="textarea"></Input></p>
        </Modal>
        <div  class="prism-player" id="J_prismPlayer"></div>
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
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import RoomChatbox from './small/RoomChatbox'
import ProgramList from './ProgramList'

export default {
    components: {
        Icon, RoomChatbox, ProgramList
    },
    data() {
        return {
            initData: {},
            room_info: {},
            modal1: false,
            closeLive: false,   
            liveid: 0,
            myRoom: false
        }
    },
    created() {
        this.getInitData();
    },
    mounted() {
        if (localStorage.user) {
            let storage = localStorage.user;
            let user = JSON.parse(storage).user;
            let liveid = user.liveid;
            this.liveid = liveid;
        }
        
    },
    watch:{
        initData: function() {
            this.initPlayer();
        }
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
                 source: this.initData.playUrlFlv,
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
        getInitData() {
            let self = this;
            let url = window.location.href;
            let index = url.indexOf('liveid=')+7;
            let liveid = url.slice(index)
            if (localStorage.user) {
                let user = JSON.parse(localStorrage.user).user;
                if (liveid == user.liveid) {
                    self.myRoom = true;
                }
            }
            $.ajax({
                type:'GET',
                url: `http://www.liuliuliuman.top:8081/livingroom/${liveid}`,
            }).done(function(res) {
                if (res.code === 200) {
                   let initData = res.data;
                   let room_info = {};
                   self.initData = initData;
                   self.room_info = initData.room_info
                }
            }).fail(function(err) {
                console.log(err);
            })
        },
        getFlow() {
            this.modal1 = !this.modal1;
        },
        startLiving(e) {
            this.closeLive = !this.closeLive;
            let self = this;
            if (this.closeLive) {
                $.ajax({
                    type:'POST',
                    url: 'http://www.liuliuliuman.top:8081/livingroom/liveStreamOpen',
                    data: {"liveid": 12},
                    dataType: 'json'
                }).fail(function(err) {
                    console.log(err);
                })
            } else {
                $.ajax({
                    type:'POST',
                    url: 'http://localhost:8081/livingroom/liveStreamClose',
                    data: {"jsonstring": '{"liveid":"12","nickename":"abc","domain_name":"数学","subject_name":"微积分","title":"大学要好好学数学","description":"刘德华改行教数学\n与张学友同框\n直播\n更多精彩尽在@nextu","record_img_url":".../aaa/aaa.jpg"}'},
                    dataType: 'json'
                }).fail(function(err) {
                    console.log(err);
                })
            }
            
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

    .room-head {
        overflow: hidden;
        padding: 10px 0;
        background: #f0f0f0;
        h2 {
            font-size: 20px;
            font-weight: bold;
            float: left;
        }
        .live-btn {
            float: right;
        }
        .live-flow {
            float: right;
            padding: 4px;
            margin-right: 14px;
            margin-top: 4px;
            background: #fcf7f7;
            font-size: 12px;
            border: 1px solid #ccc;
        }
    }

    .prism-player {
        position: relative;
        float: left;
        z-index: 2;
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
}

.switch-btn {position: relative; display: block; vertical-align: top; width: 109px; height: 32px; border-radius: 18px; cursor: pointer;}
.checked-switch {position: absolute; top: 0; left: 0; opacity: 0;}
.text-switch {background-color: #ed5b49; border: 1px solid #d2402e; border-radius: inherit; color: #fff; display: block; font-size: 15px; height: inherit; position: relative; text-transform: uppercase;}
.text-switch:before, .text-switch:after {position: absolute; top: 50%; margin-top: -.5em; line-height: 1; -webkit-transition: inherit; -moz-transition: inherit; -o-transition: inherit; transition: inherit;}
.text-switch:before {content: attr(data-no); right: 11px;}
.text-switch:after {content: attr(data-yes); left: 11px; color: #FFFFFF; opacity: 0;}
.checked-switch:checked ~ .text-switch {background-color: #396; border: 1px solid #068506;}
.checked-switch:checked ~ .text-switch:before {opacity: 0;}
.checked-switch:checked ~ .text-switch:after {opacity: 1;}
.toggle-btn {background: linear-gradient(#eee, #fafafa); border-radius: 100%; height: 30px; left: 1px; position: absolute; top: 1px; width: 28px;}
.toggle-btn::before {color: #aaaaaa; content: "|||"; display: inline-block; font-size: 12px; letter-spacing: -2px; padding: 4px 0; vertical-align: middle;}
.checked-switch:checked ~ .toggle-btn {left: 79px;}
 .text-switch, .toggle-btn {transition: All 0.3s ease; -webkit-transition: All 0.3s ease; -moz-transition: All 0.3s ease; -o-transition: All 0.3s ease;}


.no-radius, .no-radius .toggle-btn{border-radius: 0;}

.circle-style .toggle-btn::before{background: linear-gradient(#dedede, #cacaca); border-radius: 50%; content: ""; height: 14px; margin-top: 6px; padding: 0; width: 14px;}
</style>