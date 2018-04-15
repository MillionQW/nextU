<template>
<section class="room-chat-box">

    <div class="room-head-box">
        <div class="room-head-info">
            <div class="room-head-info-cover">
                <img src="../../../assets/user.jpg" alt="">
            </div>
            <div class="room-head-info-hostname"><a>{{this.nickname}}</a></div>
            <div class="personnal-homepage"><a href="#">个人主页</a></div>
            <div class="room-viewer">
                <span class="num">4255</span>人观看
            </div>
            <div class="follow-btn">+ 关注</div>
        </div>
    </div>

    <div class="tabs">
        <div class="message-btn" :class="{ active: isMessage }" @click="toggleArea(true)" ><icon name="commenting-o"></icon>留言区</div>
        <div class="question-btn" :class="{ active: !isMessage }" @click="toggleArea(false)" ><icon name="question-circle-o"></icon>提问区</div>
    </div>

    <span class="hidding-btn"></span>

    <div class="room-chat-container">
        <div :class="{ toggleLeft: !isMessage }" class="message-area">
            <div class="room-chat-scroller">
                <ul class="room-chat-message">
                    <li class="room-chat-item" v-for="(item, index) in this.getMessageList">
                        <span class="room-chat-username">{{item.username}} :</span>
                        <span class="room-chat-content">{{item.content}}</span>
                        <icon name="commenting"></icon>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="{toggleRight: isMessage }" class="question-area">
            <div class="room-chat-scroller">
                <ul class="room-chat-message">
                    <li class="room-chat-item" v-for="(item, index) in this.getMessageList">
                        <span class="room-chat-username">{{item.username}} :</span>
                        <span class="room-chat-content">{{item.content}}</span>
                        <icon name="commenting"></icon>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="room-chat-tools">
        <span class="lock-screen"><icon name="lock"></icon>锁屏</span>
        <span class="clean-screen"><icon name="trash"></icon>清屏</span>
        <span class="input-num"><span class="num">{{}}</span> / 30</span>
    </div>

    <div class="room-chat-inputfield">
        <textarea class="room-chat-text" ref="chatText"></textarea>
        <span class="send-btn" :class="{bright: send}">发送</span>
    </div>
</section>
</template>
<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
    name: 'RoomChatBox',
    props: ['nickname'],
    data() {
        return {
            isMessage: true,
            inputNum: 0,
            send: false,
        }
    },
    components: {
        Icon
    },
    methods: {
        toggleArea(isMessage) {
            this.isMessage = isMessage;
        },
        checkNum() {
            var num = this.$ref.chatText.value.length;
        }
    },
    computed: {
        ...mapGetters([
                'getMessageList',
            ])
    },
}
</script>
<style lang="scss" scoped>
@import '../../../CSS/colors.scss';
@import '../../../CSS/common.scss';

.room-chat-box {
    position: relative;
    float: left;
    width: 422px;
    height: 601px;
    background: #fff;

    .room-head-box {
        position: relative;
        float: right;
        width: 97%;
        height: 92px;
        border-bottom: 1px solid #eaf5ef;

        .room-head-info-cover {
            position: absolute;
            top: 23px;
            left: 17px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #ccc;

            img {
                width: 100%;
                border-radius: 50%;
            }
        }
        .room-viewer {
            position: absolute;
            top: 58px;
            left: 77px;
            color: #c1c1c1;
            font-size: 13px;

            .num {
                color: $base_green;
            }
        }
        .room-head-info-hostname {
            position: absolute;
            top: 27px;
            left: 77px;
            font-size: 20px;
            font-weight: 600;
            a {
                color: #000;
            }
        }
        .personnal-homepage {
            position: absolute;
            top: 24px;
            right: 26px;
            
            a {
                color: #ccc;
                font-size: 13px;

                &:hover {
                    color: #a7a7a7;
                }
            }
        }
        .follow-btn {
            position: absolute;
            top: 51px;
            right: 20px;
            padding: 4px 8px;
            border-radius: 15px;
            font-size: 13px;
            color: $base_green;
            border: 1px solid $base_green;
            cursor: pointer;

            &:hover {
                background: $base_green;
                color: #fff;
            }
        }
    }

    .tabs {
        float: right;
        width: 97%;
        padding: 12px 0;
        clear: both;
        text-align: center;
        border-bottom: 1px solid #eaf5ef;
        box-sizing: border-box;
        cursor: pointer;
        box-sizing: border-box;
        
        .message-btn, .question-btn {
            float: left;
            width: 19%;
            height: 28px;
            margin: 0 15.5%;
            padding-bottom: 7px;
            box-sizing: border-box;

            &.active, &:hover {
                color: $base_green;
                border-bottom: 2px solid $base_green;
            }
        }

        svg {
            padding-right: 10px;
            vertical-align: -2px;
        }
    }
    
    .hidding-btn {
        position: absolute;
        display: block;
        top: 225px;
        width: 0;
        height: 67px;
        background: #aaa;
        border-top: 30px solid #fff;
        border-left: 15px solid #f4f4f4;
        border-bottom: 30px solid #fff;
        cursor: pointer;
        
        &:after, &:before {
            content: '';
            position: absolute;
            display: block;
            width: 1px;
            height: 21px;
            background: #d4e2da;
        }
        &:after {
            left: -7px;
            top: 14px;
            transform: rotate(-22deg);
        }
        &:before {
            left: -7px;
            top: 33px;
            transform: rotate(22deg);
        }
    }

    .room-chat-container {
        position: relative;
        float: right;
        width: 97%;
        
        .message-area, .question-area {
            position: absolute;
            top: 0;
            left: 47px;
            width: 89%;
            height: 405px;
            padding-right: 13%;
            overflow: auto;
            transition: all .3s;
            
            &::-webkit-scrollbar-track {
                background: #fff;
            }
            .room-chat-scroller {
                .room-chat-message {
                    .room-chat-item {
                            position: relative;
                            margin: 16px 0;
                        .room-chat-username {
                            color: #49a174;
                        }
                        .room-chat-content {
                            padding-left: 8px;
                            color: #989898;
                        }
                        svg {
                            position: absolute;
                            top: 0;
                            right: -39px;
                            color: #bfbfbf;
                        }
                    }
                }
            }
        }

        .message-area {

            &.toggleLeft {
                transform: translateX(-200%);
            }
        }

        .question-area {
            &.toggleRight {
                transform: translateX(200%);
            }
        }
    }

    .room-chat-tools {
        position: absolute;
        bottom: 2px;
        left: 35px;
        width: 82%;
        color: #c6c6c6;

        .lock-screen, .clean-screen {
            cursor: pointer;

            &:hover {
                color: #a7a7a7;
            }
        }

        .input-num {
            display: inline-block;
            float: right;
        }

        svg {
            vertical-align: middle;
            padding-right: 6px;
        }
    }

    .room-chat-inputfield {
        position: absolute;
        bottom: -48px;
        left: 35px;
        width: 88%;

        .room-chat-text {
            width: 79%;
            height: 41px;
            border-radius: 4px;
            border-color: #d1e9dd;
        }

        .send-btn {
            position: absolute;
            right: 6px;
            display: inline-block;
            width: 22%;
            height: 42px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            background: #66b28c;
            color: #fff;
            text-align: center;
            line-height: 40px;
        }
    }
}


</style>