import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '../../../components/login/LoginForm';
import RegisterForm from '../../../components/login/RegisterForm';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: LoginForm
        },
        {
            path: '/register',
            component: RegisterForm
        }       
    ]
})