<template>
<div class="container">
    <n-header></n-header>
    <main class="main">
        <side-nav class="side-nav"></side-nav>
        <ul class="aboutList">
            <li class="active"><icon name="podcast"></icon>关于我们 ></li>
            <li><icon name="at"></icon>联系我们 ></li>
            <li><icon name="cogs"></icon>发展历程 ></li>
        </ul>
        <div class="content-wrapper">
            <ul class="inner-title">
                <li>您所在的位置： Next U 直播 > </li>
                <li>关于我们</li>
            </ul>
            <div class="content">
            <h4 class="title">关于我们</h4>
            <p>Teambition 是国内团队协作工具的创导者，通过帮助团队轻松共享和讨论工作中的任务、文件、分享、日程等内容，让团队协作焕发无限可能。Teambition 在网页、桌面、移动环境都打造了体验出众的应用，所以你随时随地都可以和团队协作，其 iPhone 应用还被苹果公司评为 2015 年度最佳应用。目前，已经有超过 3,000,000 用户通过 Teambition 进行团队协作，其中也包括多个行业的龙头企业。Teambition 公司已获得来自戈壁投资、IDG、盘古及北极光的多轮融资，并在 2016 年获得来自腾讯的战略投资。公司于 2014 年入选中国最具投资价值企业 50 强。</p>
            <p>Teambition 是国内团队协作工具的创导者，通过帮助团队轻松共享和讨论工作中的任务、文件、分享、日程等内容，让团队协作焕发无限可能。Teambition 在网页、桌面、移动环境都打造了体验出众的应用，所以你随时随地都可以和团队协作，其 iPhone 应用还被苹果公司评为 2015 年度最佳应用。目前，已经有超过 3,000,000 用户通过 Teambition 进行团队协作，其中也包括多个行业的龙头企业。Teambition 公司已获得来自戈壁投资、IDG、盘古及北极光的多轮融资，并在 2016 年获得来自腾讯的战略投资。公司于 2014 年入选中国最具投资价值企业 50 强。</p>
            <p>Teambition 是国内团队协作工具的创导者，通过帮助团队轻松共享和讨论工作中的任务、文件、分享、日程等内容，让团队协作焕发无限可能。Teambition 在网页、桌面、移动环境都打造了体验出众的应用，所以你随时随地都可以和团队协作，其 iPhone 应用还被苹果公司评为 2015 年度最佳应用。目前，已经有超过 3,000,000 用户通过 Teambition 进行团队协作，其中也包括多个行业的龙头企业。Teambition 公司已获得来自戈壁投资、IDG、盘古及北极光的多轮融资，并在 2016 年获得来自腾讯的战略投资。公司于 2014 年入选中国最具投资价值企业 50 强。</p>
            <p>Teambition 是国内团队协作工具的创导者，通过帮助团队轻松共享和讨论工作中的任务、文件、分享、日程等内容，让团队协作焕发无限可能。Teambition 在网页、桌面、移动环境都打造了体验出众的应用，所以你随时随地都可以和团队协作，其 iPhone 应用还被苹果公司评为 2015 年度最佳应用。目前，已经有超过 3,000,000 用户通过 Teambition 进行团队协作，其中也包括多个行业的龙头企业。Teambition 公司已获得来自戈壁投资、IDG、盘古及北极光的多轮融资，并在 2016 年获得来自腾讯的战略投资。公司于 2014 年入选中国最具投资价值企业 50 强。</p>
        </div>
        </div>
        
    </main>
    <n-footer></n-footer>
</div>
</template>
<script>
import nHeader from '@/components/Header.vue'
import nFooter from '@/components/Footer.vue'
import SideNav from '@/components/live/SideNav.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
    components: {
        nHeader, nFooter, Icon, SideNav
    }
}
</script>
<style lang="scss" scoped>
.container {
    background: #f0f0f0;
}
.main {
    width: 1200px;
    margin: 0 auto;
    margin-top: 10px;
    *zoom:1;
    color: #4d4d4d;
    background: #fff;
}
.main:before,.main:after {
    content: "";
    display: table;
}
.main:after {
    clear: both;
}
li {
    list-style: none;
}
.aboutList {
    float: left;
    width: 10.6%;
    margin-top: 28px;
    margin-bottom: 67px;
    padding: 20px 20px 501px 73px;
    border-right: 1px solid #396;
    li {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #d4d6d6;
        cursor: pointer;
        &.active {
            color: #396;
            border-bottom: 1px solid #396;
        }
        &:hover {
            color: #396;
            border-bottom: 1px solid #396;
        }
    }
    svg {
        vertical-align: -3px;
        margin-right: 10px;
    }
}
.content-wrapper {
    float: left;
    width: 73%;
    padding: 28px 50px;
    color: #878787;
    ul {
        padding-left: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #396;
        li {
            display: inline-block;
            color: #396;
        }
    }
    .content {
        .title {
            font-size: 20px;
        }
        p {
            font-size: 14px;
            line-height: 1.7;
            text-indent: 2em;
        }
    }
}
</style>


