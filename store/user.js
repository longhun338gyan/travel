//保存数据的属性 state
//如果不使用函数的方式会报警告
// export const state = {
//   userInfo: {
//     token: '',
//     user: {}

//   }
// }
export const state = () => {
  return {
    userInfo: {
      token: '',
      user: {}
    }
  }
}
//同步修改数据 mutations
export const mutations = {
  //state就是上面的state,这个参数是固定默认的
  //data使用调用的该方法的时候传入的数据
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  //清楚用户数据
  clearUserInfo( state ){
    state.userInfo = {
        token: "",
        user: {}
    }
  }
}
//异步修改数据
export const actions = {

}