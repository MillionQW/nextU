<template>
<footer>
    <div class="copyright">
        <ul>
            <li>版权所有 @广东金融学院</li>
            <li>地址: 广州市天河区迎福路527号</li>
            <li>邮编： 510520</li>
            <li>邮箱： webmaster@pku.edu</li>
            <li><a :href="aboutUrl" class="aboutUs" target="_blank">关于我们</a></li>
        </ul>
    </div>
</footer>
</template>
<script>
export default {
    data() {
        return {
            aboutUrl: window["_CONFIG"]["ABOUT"]
        }
    }
}
</script>
<style lang="scss">
@import '../CSS/colors.scss';

footer {
    clear: both;
    min-width: 1349px;
    height: 50px;
    margin-top: 50px;
    background: $green_bg;

    ul {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        li {
            display: inline-block;
            margin-top: 1.5em;
            padding-left: 1em;
            padding-right: 1em;
            border-right: 1px solid #fff;
            vertical-align: bottom; 
            color: #fff;
        }
    }
}

li:last-child {
    border-right: 0;
}
.aboutUs {
    color: #fff;
}
</style>