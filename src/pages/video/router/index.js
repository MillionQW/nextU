import Vue from 'vue'
import Router from 'vue-router'
import VideoRoom from '../../../components/video/VideoRoom'
import RelatedComment from '../../../components/video/small/RelatedComment'
import LessonIntroduction from '../../../components/video/small/LessonIntroduction'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'videoList_default',
        component: VideoRoom,
        children: [
          {
            path: '',
            name: 'comment',
            component: RelatedComment
          },
          {
            path: 'introduction',
            name: 'introduction',
            component: LessonIntroduction
          }
        ]
      }
    ]
})