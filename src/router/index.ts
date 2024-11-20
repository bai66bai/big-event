import { createRouter,createWebHistory } from "vue-router";
//导入组件
import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'
import ArticleCategory from "@/views/article/ArticleCategory.vue";
import ArticleManage from "@/views/article/ArticleManage.vue";
import UserAvatar from "@/views/user/UserAvatar.vue";
import UserInfo from "@/views/user/UserInfo.vue";
import UserResetPassword from "@/views/user/UserResetPassword.vue";
//定义路由关系
const routes =[
    {path:'/login',component:LoginVue},
    {path:'/',component:LayoutVue,
        redirect:'/article/category',
        children:[
        { path:'/article/category',component:ArticleCategory},
        { path:'/article/manage',component:ArticleManage},
        { path:'/user/avater',component:UserAvatar},
        { path:'/user/info',component:UserInfo},
        { path:'/user/resetPassword',component:UserResetPassword}
    ]},
]

//创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router