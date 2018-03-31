<template>
  <div class="container">
      <div class="evaluation">
          <div class="evaluation-start">
              <span>评价</span><span class="start"></span>
          </div>
          
          <form action="" class="message-border">
              <textarea name="" id="" cols="122" rows="5"></textarea>
              <button class="submit-btn">提交</button>
          </form>         
      </div>
      <div class="comment-list">
        <div class="comment-container">
            <div class="avator"><img src="../../../assets/video_cover.jpg" alt=""></div>
            <div class="user-info clearfix">
                <div class="username">张小娴</div>
                <div class="start"></div>
            </div>
            <div class="comment">课程很全面，主流的网络请求框架都包括在里面，还有深入的源码解读，理解更透彻了，还有一些面试经常问的线程之 类，还有MVP之类的</div>
            <div class="message-date">2018-3-11</div>
        </div>
        <div class="comment-container">
            <div class="avator"><img src="../../../assets/video_cover.jpg" alt=""></div>
            <div class="user-info clearfix">
                <div class="username">张小娴</div>
                <div class="start"></div>
            </div>
            <div class="comment">课程很全面，主流的网络请求框架都包括在里面，还有深入的源码解读，理解更透彻了，还有一些面试经常问的线程之 类，还有MVP之类的</div>
            <div class="message-date">2018-3-11</div>
        </div>
        <div class="comment-container">
            <div class="avator"><img src="../../../assets/video_cover.jpg" alt=""></div>
            <div class="user-info clearfix">
                <div class="username">张小娴</div>
                <div class="start"></div>
            </div>
            <div class="comment">课程很全面，主流的网络请求框架都包括在里面，还有深入的源码解读，理解更透彻了，还有一些面试经常问的线程之 类，还有MVP之类的课程很全面，主流的网络请求框架都包括在里面，还有深入的源码解读，理解更透彻了，还有一些面试经常问的线程之 类，还有MVP之类v里面，还有深入的源码解读，理解更透彻了，还有一些面试经常问的线程之 类，还有MVP之类的课程很全面，主流的网络请求框架都包括在里面，还有深入的源码解读，理解更透彻了，还有一些面试经常问的线程之 类，还有MVP之类</div>
            <div class="message-date">2018-3-11</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.evaluation-start {
    margin-bottom: 20px;
}
.message-border {
    overflow: hidden;
    .submit-btn {
        float: right;
        display: block;
        margin-top: 20px;
        padding: 2px 10px;
        overflow: hidden;
        color: #fff;
        border-radius: 3px;
        background: #32b16c
    }
}
.comment-list {
    margin-bottom: 20px;
}
.comment-container {
    overflow: hidden;
    margin-top: 20px;
    border-bottom: 1px solid #dcdcdc;
    .avator {
        float: left;
        height: 58px;
        img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
        }
    }
    .user-info {
        float: left;
        margin-left: 20px;
        .username {
            color: #666;
        }
    }
    .comment {
        margin-top: 26px;
        margin-left: 73px;
        line-height: 1.7;
        color: #afb0b0;
    }
    .message-date {
        margin-top: 20px;
        margin-left: 72px;
        margin-bottom: 20px;
        color: #c8c9c9;
    }
}
</style>


