// import {Message} from 'element-ui'

// // axios拦截插件,处理错误返回
// // 每个nuxt的插件都会暴露一个函数
// // 插件的第一个参数是默认的nuxt对象

// export default ({$axios})=>{
//   $axios.onError(res=>{
//     const {statusCode,message}=res.response.data
//     console.log(res.response,'测试错误')
//     if (statusCode) {
//       Message.warning(message)
//     }
//   })
// }

import {Message} from "element-ui";

// axios拦截插件,处理错误返回

// 每个nuxt的插件都会暴露出一个函数
// 插件的第一个参数是默认的nuxt对象
export default (  {$axios,redirect}  ) => {

    // axios的错误拦截
    $axios.onError( res => {
        // 判断错误信息， 提示错误的返回
        const {statusCode, message} = res.response.data;
        if (statusCode===401||statusCode==403) {
            redirect('/user/login')
        }
        console.log(statusCode)
        if(statusCode===400){
            // alert(message);
            Message.warning(message);
        }
    } )
}