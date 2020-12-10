import { reqAddOrUpdateShopCart,reqDeleteCart,reqShopCartList,reqUpdateCartIsCheck } from "@/api"

const state = {
  shopCartList:[]
}
const mutations = {
  RECEIVESHOPCARTLIST(state,shopCartList){
    state.shopCartList = shopCartList
  }
}
const actions = {
  
//   async addOrUpdateShopCart({commit},{productId,productNum}){
//     const result = await reqAddOrUpdateShopCart(productId,productNum)
//     if(result.code === 200){
//       return 'ok'
//     }else{
//       // return 'fail'
//       return Promise.reject(new Error('fail'))
//     }
//   },

  async getShopCartList({commit},userInfo){
    const data = await reqShopCartList(userInfo)
    if(data.code === 200){
      commit('RECEIVESHOPCARTLIST',data.result)
    }
  },

//   async updateCart({commit},{productId,checked}){
//     const result = await reqUpdateCartIsCheck(productId,checked)
//     if(result.code === 200){
//       return 'ok'
//     }else{
//       // return 'fail'
//       return Promise.reject(new Error('fail'))
//     }
//   },


 
//   async updateCartAll({commit,dispatch,state},checked){
//     let promises = []
//     state.shopCartList.forEach(item => {
//       if(item.checked === checked) return
//       const promise = dispatch('updateCart',{productId:item.productId,checked})
//       promises.push(promise)
//     })
//     return Promise.all(promises)
//   },



//   async deleteCart({commit},productId){
//     const result = await reqDeleteCart(productId)
//     if(result.code === 200){
//       return 'ok'
//     }else{
//       // return 'fail'
//       return Promise.reject(new Error('fail'))
//     }
//   },


//   deleteCartAll({commit,dispatch,state}){
//     let promises = []
//     state.shopCartList.forEach(item => {
//       if(!item.checked) return
//       const promise = dispatch('deleteCart',item.productId)
//       promises.push(promise)
//     })
//     return Promise.all(promises)
//   }




}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}