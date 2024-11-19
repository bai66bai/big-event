//导入request.js请求工具
import request from "@/utils/request"
import type { loginForm } from "./type";

//提供调用注册接口的函数
export const userRegisterService = (registerData:loginForm)=>{
    //借助UrlSearchParams完成传递
    const params = new URLSearchParams()
    for(let key in registerData){
        params.append(key,registerData[key as keyof loginForm])
    }
   return request.post('/user/register',params);
}

//提供调用登录接口的函数
export const userLoginService = (loginData:loginForm)=>{
    //借助UrlSearchParams完成传递
    const params = new URLSearchParams()
    for(let key in loginData){
        params.append(key,loginData[key as keyof loginForm])
    }
   return request.post('/user/login',params)
}