import request from '@/utils/request'
import type { category } from './type'
//import { useTokenStore } from '@/stores/token'


//文章分类列表查询
export const articleCategoryListService =()=>{
    // const tokenStore = useTokenStore()
    // return request.get('/category',{headers:{'Authorization':tokenStore.token}})
    return request.get('/category')
}

//文章分类添加接口
export const articleCategoryAddService =(categoryData:category):RetPromise<category>=>{
   return request.post<category,Result<category>>('/category',categoryData)
}
