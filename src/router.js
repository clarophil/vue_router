import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import User from './User.vue'
import UserProfile from './UserProfile'
import UserPosts from './UserPosts'

Vue.use(VueRouter)

const routes = [
 { path: "/", component: Home},
 { path: '/home/:name?', name:'home',component: Home },
 { path: '/about', name: 'about',component: About },
 { path: '/user/:id?', component: User,
    children: [
    {
        path: 'profile',
        name: 'profile',
        component: UserProfile
    },
    {
        path: 'posts',
        name: 'posts',
        component: UserPosts
    }
    ]
}
]
export default new VueRouter( {routes} )
