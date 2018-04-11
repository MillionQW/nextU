<template>
    <nav class="side-nav">
        <ul>
            <li>
                <a :href="index" class="index">首页</a>
            </li>
            <li>
                <a :href="liveIndex" class="live">直播</a>
            </li>
            <li>
                <a :href="lesson" class="lesson">专项课程</a>
            </li>
            <li>
                <a :href="help" class="help">互助</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            index: window['_CONFIG']['INDEX'],
            liveIndex: window['_CONFIG']['_LIVEINDEX'],
            lesson: window['_CONFIG']['LESSON'],
            help: window['_CONFIG']['HELP']
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../CSS/colors.scss';
@import '../../CSS/common.scss';

.side-nav {
    width: 62px;
    height: 596px;
    background: #fff;

    ul {
        margin-top: 104px;
        li {
            margin-bottom: 59px;
            a {
                display: block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                color: #000;
                line-height: 80px;
                font-size: 12px;
                text-align: center;
                background-image: url(../../../static/img/未标题-1.png);
                background-repeat: no-repeat;
                background-position: 12px 12px;

                &:hover {
                    color: $base_green;
                }
            }

            .index {
                background-position: -215px -7px;
                &.active, &:hover {
                    background-position: -174px -7px;
                }

            }
            .live {
                background-position: -1px -52px;
                &.active, &:hover {
                    background-position: -45px -51px;
                }
            }
            .lesson {
                background-position: -131px -6px;
                &.active, &:hover {
                    background-position: -88px -6px;
                }
            }
            .help {
                background-position: -45px -8px;
                &.active, &:hover {
                    background-position: 1px -8px;
                }
            }
        }
    }
}
</style>