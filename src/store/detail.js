import {
    reqAddCart,
    reqProductDet
} from '../api'

const state = {
    productDet: {}
}
const mutations = {
    //接受数据
    RECEIVEPRODUCTDET(state, productDet) {
        state.productDet = productDet
    },
}
const actions = {
    //获取详情
    async getProductDet({
        commit
    }, productId) {
        const detResult = await reqProductDet(productId)
        if (detResult.code === 200) {
            commit('RECEIVEPRODUCTDET', detResult.result)
        }

    },
    //添加购物车
    async addShopCart({
        commit
    }, {
        productId,
        productNum
    }) {
        const result = await reqAddCart(productId, productNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }

}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}