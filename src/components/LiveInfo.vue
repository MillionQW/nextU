<template>
<section>
    <div class="container">
        <h3><icon name="camera-retro" class="camera"></icon>我要直播</h3>
        <ul class="info-form">
            <li>房间ID：<span class="liveid">72992</span><button class="btn-enterroom">进入直播间</button></li>
            <li>房间标题：<span class="roomname">72992</span><button class="btn-modify" @click="modify('roomname')">修改</button></li>
            <li>房间描述：<textarea name="" id="" cols="70" rows="5"></textarea><button class="btn-modify">修改</button></li>
            <li>直播类别：<span class="domain">考试</span><button class="btn-modify">修改</button></li>    
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
            value: ''
        }
    },
    components: {
        Icon, InputDialog
    },
    methods:　{
        modify(type, value) {
            
            if (type === 'roomname') {
                this.setkey = '房间标题';
                this.value = $('.roomname').html();
            }
            this.$refs.dialog.openDialog();
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
    }
}

</style>