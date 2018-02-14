import Vue from 'vue'
import Router from 'vue-router'
import ParadeContainer from '../../../components/live/small/ParadeContainer'
import ReviewContainer from '../../../components/live/small/ReviewContainer'
import LiveContainer from '../../../components/live/LiveContainer'
import LiveIndex from '../../../components/live/LiveIndex'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: LiveContainer,
            children: [
                {
                    path: '/',
                    name: 'parade',
                    component: ParadeContainer
                },
                {
                    path: 'review',
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