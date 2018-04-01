<template>
<section>
    <div class="container">
        <h3><icon name="camera-retro" class="camera"></icon>我要直播</h3>
        
    </div>
    <input-dialog class="dialog" setkey="类别" value="考试"></input-dialog>
</section>

</template>
<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// import InputDialog from './dialog/InputDialog'
import InputDialog from './dialog/InputDialog'
export default {
    components: {
        Icon, InputDialog
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
.dialog {
    position: absolute;
}

</style>