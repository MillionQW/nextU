<template>
    <div class="parade-container">
        <ul>
            <li class="video-item" v-for="(item, index) in this.initData">
                <div class="video-cover"><img :src="item.recordImgUrl" alt=""></div>
                <h3 class="video-title"><a href="">{{item.title}}</a></h3>
                <span class="begin-time"><icon name="clock-o"></icon>开课时间：{{item.start}}</span>
                
                <span class="lesson-type"><icon name="book"></icon>{{item.domainName}}</span>
                <span class="teacher-introduce"><icon name="user-circle-o"></icon>{{item.description}}</span>
                <span class="play-btn">观看回放</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
    computed: {
        ...mapGetters([
            'getReviewList',
        ])
    },
    data() {
        return {
            initData: {}
        }
    },
    components: {
        Icon
    },
    created() {
        this.getInitData();
    },
    methods: {
        getInitData() {
            let self = this;
            $.ajax({
                type: 'POST',
                data: {
                    liveid: 12
                },
                url: 'http://www.liuliuliuman.top:8081/liverecord/byLiveId'
            }).done(function(res) {
                if (res.code === 200) {
                    let records = res.data;
                    let recordsList = [];console.log(records)
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
                    self.initData = recordsList;
                    console.log(self.initData)
                }
            })
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
@import '../../../CSS/colors.scss';
@import '../../../CSS/common.scss';



.parade-container, .review-container {
    width: 92.5%;
    margin: 0 auto;

}
.video-title, .begin-time, .lesson-type, .teacher-introduce, .play-btn {
    position: absolute;
    left: 418px;
    color: #666;
    
    svg {
        padding-right: 17px;
        color: $base_green;
    }
}
.video-item {
    position: relative;
    margin-top: 26px;
    padding-bottom: 55px;
    overflow: hidden;
    border-bottom: 1px solid #d2d2d2;

    .video-cover {
        float: left;
        width: 370px;
        height: 260px;
        img {
            width: 100%;
        }
    }
    .video-title {
        a {
            color: #000;
            font-size: 26px;
        }
    }
    .begin-time {
        top: 66px;        
    }
    .lesson-type {
        top: 120px;
    }
    .teacher-introduce {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        top: 169px;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }
    .play-btn {
        top: 223px;
        left: 968px;
        width: 13%;
        border-radius: 5px;
        text-align: center;
        font-size: 18px;
        padding: 14px 0;
        color: #3c6;
        border: 1px solid #3c6;
        cursor: pointer;

        &:hover {
            color: #fff;
            background: #3c6;
        }
    }
}
</style>