<template>
    <div class="container">
        <div class="lesson-introduction-container">
            <div class="lesson-introduction-title">课程介绍：</div>
            <p class="lesson-introduction-summary">
                      BAT大咖助力 全面升级Android面试！！！安卓面试全新升级课程，已经帮助很多同学在短时间内拿到了满意的off，已经帮助很多同学在短时间内拿到了满意的off，已经帮助很多同学在短时间内拿到了满意的off
            </p>
        </div>
        <div class="teacher-introduction-container">
            <div class="teacher-introduction-title">讲师：</div>
            <div class="teacher-introduction-card">
                <div class="avator"><img src="../../../assets/video_cover.jpg" alt=""></div>
                <div class="teachername"><span>王教授</span><span class="follow-btn">+ 关注</span></div>
                <div class="teacher-introduction-summary">王迪，研究生，文学学士，国家二级心理咨询师。现任人民日报文学部写作项目指导教师。担任创业课堂讲师近一百多 场。他精心制作了这门Android面试课程，从面试官角度触发，深入讲解大部分公司重点考核和使用的面试技术点，助力你在各种面试中脱颖而出，成为职场上炙手可热的开发者。</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../../CSS/colors.scss';
@import '../../../CSS/common.scss';

.lesson-introduction-container {
    padding-bottom: 20px;
    border-bottom: 1px solid #dcdcdc;
}
.lesson-introduction-title {
    color: $base_green;
    font-size: 20px;
}
.lesson-introduction-summary {
    margin-top: 20px;
    text-indent: 2em;
    color: #999;
}
.teacher-introduction-container {
    margin-top: 20px;
    margin-bottom: 80px;
}
.teacher-introduction-title {
    color: $base_green;
    font-size: 20px;
}
.follow-btn {
    float: right;
    padding: 2px 4px;
    font-size: 12px;
    color: $base_green;
    border: 1px solid $base_green;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: #fff;
        background: $base_green;
    }
}
.teacher-introduction-card {
    margin-top: 20px;
    .avator {
        float: left;
        height: 58px;
        img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
        }
    }
    .teachername {
        margin-left: 50px;
        color: #666;
    }
    .teacher-introduction-summary {
        margin-top: 20px;
        margin-left: 50px;
        color: #999;
    }
}
</style>

