import Vue from 'vue'
import Router from 'vue-router'
import PersonPage from '../components/PersonPage'
import MyFollow from '../components/MyFollow'
import CreateCenter from '../components/CreateCenter'
import MyCollection from '../components/MyCollection'
import MyIntergral from '../components/MyIntergral'
import IntergralShop from '../components/IntergralShop'
import MyFootprint from '../components/MyFootprint'
import MyNews from '../components/MyNews'
import PrivateMessage from '../components/news/PrivateMessage'
import SystemMessage from '../components/news/SystemMessage'
import TheComment from '../components/news/TheComment'
import ParadeContainer from '../components/live/small/ParadeContainer'
import ReviewContainer from '../components/live/small/ReviewContainer'
import LiveContainer from '../components/live/LiveContainer'
import LiveIndex from '../components/live/LiveIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myfollow_default',
      component: MyFollow
    },
    {
      path: '/myintergral',
      component: MyIntergral,
      children: [
        {
          path: '/',
          name: 'intergralshop',
          component: IntergralShop
        }
      ]
    },
    {
      path: '/mycollection',
      name: 'mycollection',
      component: MyCollection
    },
    {
      path: '/myfollow',
      name: 'myfollow',
      component: MyFollow
    },
    {
      path: '/createcenter',
      name: 'createcenter',
      component: CreateCenter
    },
    {
      path: '/myfootprint',
      name: 'myfootprint',
      component: MyFootprint
    },
    {
      path: '/mynews',
      component: MyNews,
      children: [
        {
          path: '/',
          name: 'systemmessage_default',
          component: SystemMessage
        },
        {
          path: '/mynews/systemmessage',
          name: 'systemmessage',
          component: SystemMessage
          
        },
        {
          path: '/mynews/privatemessage',
          name: 'privatemessage',
          component: PrivateMessage
        },
        {
          path: '/mynews/thecomment',
          name: 'thecomment',
          component: TheComment
        }
      ]
    },
    {
      path: '/live',
      component: LiveContainer,
      children: [
        {
          path: '/',
          name: 'parade',
          component: ParadeContainer
        },
        {
          path: '2',
          name: 'review',
          component: ReviewContainer
        }
      ]
    },
    {
      path: '/liveindex',
      name: 'liveindex',
      component: LiveIndex
    }
    
  ]
})
