import Vue from "vue";
import VueRouter from "vue-router";
import User from "../components/User";
Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const UserHome = {
    template: `
      <div>
        welcome to UserHome: 
        {{ $route.params.id }}
      </div>
    `
}

const UserProfile = {
    template: `
      <div>
        UserProfile
      </div>
    `
}
const UserProfilePreview = {
    template: `<div>UserProfilePreview</div>`
}
const UserPosts = {
    template: `
      <div>
        UserPosts
      </div>
    `
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    // 动态路径参数 以冒号开头
    {
        path: '/user/:id', 
        component: User,
        children: [
            // 当 /user/:id 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            {
                path: '',
                component: UserHome
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                components: {
                    default: UserProfile,
                    helper: UserProfilePreview
                }
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: UserPosts
            }
        ]
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//     router
// }).$mount('#app')

export default router;