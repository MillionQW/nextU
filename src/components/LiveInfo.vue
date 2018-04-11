<template>
<section>
    <div class="container">
        <h3><icon name="camera-retro" class="camera"></icon>我要直播</h3>
        <ul class="info-form" v-show="isanchor">
            <li>房间ID：<span class="liveid">{{this.liveid}}</span><a href="" class="btn-enterroom">进入直播间</a></li>
            <li>房间标题：<input id="title"/></li>
            <li>课程名称：<input id="subject_name" /></li> 
            <li>直播类别：<input id="domain_name"/></li>  
            <li>直播封面：<input id="img_url"/></li>  
            <li>房间描述：<textarea name="" id="description" cols="70" rows="5"></textarea><button class="btn-modify">修改</button></li>
            <li><a @click="settingRoom" class="createRoom">成为主播</a></li>
        </ul>
        <ul class="info-form" v-show="!isanchor">
            <li>真实姓名：<input/></li>
            <li>身份证号：<input/></li>
            <li>手机号码：<input/></li>
            <li><a @click="createRoom" class="createRoom">成为主播</a></li>
        </ul>
    </div>
    <input-dialog ref="dialog" class="dialog" :setkey="setkey" :value="value"></input-dialog>
</section>

</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// import InputDialog from './dialog/InputDialog'
import InputDialog from './dialog/InputDialog'
export default {
    data() {
        return {
            setkey: '',
            value: '',
            isanchor: false,
            liveid: 0
        }
    },
    components: {
        Icon, InputDialog
    },
    mounted() {
        document.title = "创建房间";
        this.isAnchor();
    },
    methods:　{
        modify(type, value) {
            if (type === 'roomname') {
                this.setkey = '房间标题';
                this.value = $('.roomname').html();
            }
            this.$refs.dialog.openDialog();
        },
        isAnchor() {
            if (localStorage.user) {
                let user = JSON.parse(localStorage.user).user;
                let isanchor = user.isanchor
                this.isanchor = isanchor === 0 ? false : true;
            }
        },
        createRoom() {
            var self = this;
            $.ajax({
                type: 'POST',
                url: 'http://www.liuliuliuman.top:8081/livingroom/createLivingRoom'
            }).done(function(res) {
                alert('创建房间成功');
                if (localStorage.user) {
                    let res = {data:{liveid:12}}
                    let storage = JSON.parse(localStorage.user);
                    storage.user.isanchor = 1;
                    storage.user.liveid = res.data.liveid;
                    self.liveid = res.data.liveid;
                    let stringUser = JSON.stringify(storage);
                    localStorage.setItem('user', stringUser);
                    self.isanchor = true;
                }
            })
            
        },
        settingRoom() {
            let self = this;
            let title = $('#title').val();
            let subject_name = $('#subject_name').val();
            let domain_name = $('#domain_name').val();
            let img_url = $('#img_url').val();
            let desc = $('#description').val();
            let json = {
                "liveid": self.liveid,
                "title": title,
                "subject_name": subject_name,
                "domain_name": domain_name,
                "img_url": img_url,
                "description": desc,
            }
            let jsonString = JSON.stringify(json);
            console.log(jsonString)
            $.ajax({
                type: 'POST',
                data: jsonString,
                url: 'http://www.liuliuliuman.top:8081/livingroom/updateLivingRoomSetting'
            }).done(function(res) {
                if (res.code === 200) {
                    alert('设置房间信息成功')
                }
            })
        }
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
    background: #fff;
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
    .camera {
        padding-right: 20px;
        width: auto;
        height: 20px;
    }
}
.info-form {
    padding: 20px;
    color: #656766;
    li {
        margin-bottom: 40px;
        span {
            color: #9a9a9a;
        }
        input {
            border: 1px solid #999;
        }
        button {
            margin-left: 20px;
            font-size: 12px;
            background: #fff;
        }
        .btn-enterroom {
            padding: 1px 7px;
            color: #5cc591;
            border: 1px solid #5cc591;
            border-radius: 10px;
        }
        .btn-modify {
            padding: 1px 7px;
            color: #bbb9b9;
            border: 1px solid #bbb9b9;
            border-radius: 10px;
        }
        .createRoom, {
            display: inline-block;
            width: 95px;
            height: 35px;
            margin-left: 116px;
            color: #fff;
            line-height: 2;
            text-align: center;
            border-radius: 5px;
            background: #396;
            cursor: pointer;
            &:hover {
                opacity: .8;
            }
        }
    }
}

</style>