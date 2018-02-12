import Vue from 'vue'
import Router from 'vue-router'
import VideoList from '../../../components/video/VideoList'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'videoList_default',
        component: VideoList
      },
      {
        path: '/s',
        name: 's',
        component: VideoList
      }
    ]
})