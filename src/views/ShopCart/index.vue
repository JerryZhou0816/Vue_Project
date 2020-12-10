<template>
  <div class="cart">
    <div class="header"></div>
    <div class="main">
      <div class="store-content page-cart">
        <div class="gray-box">
          <div class="title">
            <h2>购物清单</h2>
          </div>
          <div class="ui-cart">
            <div class="cart-table-title">
              <span class="name">商品信息</span>
              <span class="operation">操作</span>
              <span class="subtotal">小计</span>
              <span class="num">数量</span>
              <span class="price1">单价</span>
            </div>
            <div class="cart-table">
              <div class="cart-group pr">
                <div
                  class="cart-top-items"
                  v-for="(cart, index) in shopCartList"
                  :key="cart.productId"
                >
                  <div class="cart-items clearfix">
                    <!-- 选中按钮 -->
                    <div class="items-choose blue-checkbox-new checkbox-on">
                      <div
                        class="check-box"
                        :checked="cart.isChecked === 1"
                        @click="updateOne(cart)"
                      >
                        <!-- <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt=""> -->
                        <img
                          src="../../../static/images/checkbox-new_631a56a4f6.png"
                        />
                      </div>
                    </div>
                    <!-- 商品图片 -->
                    <div class="items-thumb f1">
                      <img :src="cart.productImg" />
                    </div>
                    <!-- 商品名字 -->
                    <div class=" name1 hide-row f1">
                      <div class="name-table">
                        <a href="javascript:;">{{ cart.productName }}</a>
                      </div>
                    </div>
                    <!-- 操作 X -->
                    <div class="operation">
                      <a href="javascript:;" class="items-delete-btn"> </a>
                    </div>
                    <!-- 价格 -->
                    <div class="price1">
                      {{ cart.salePrice }}
                    </div>
                    <!-- 数量 -->
                    <div class="amount-box">
                      <div class="select-box">
                        <a class="down">-</a>
                        <span class="num">{{ cart.productNum }}</span>
                        <a class="up">+</a>
                      </div>
                    </div>
                    <!-- 小计 -->
                    <div class="subtotal">
                      {{}}
                    </div>
                  </div>
                </div>
                <!-- <div class="cart-top-items">
                             <div class="cart-items clearfix">
                                <div class="items-choose blue-checkbox-new checkbox-on">
                                   <div class="check-box">
                                     <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt="">
                                   </div>
                                </div>
                                <div class="items-thumb f1">
                                    <img src="../../../static/images/dog.jpg">
                                </div>
                                <div class=" name1 hide-row f1">
                                    <div class="name-table">
                                        <a href="javascript:;">Smartisan 明信片</a>
                                    </div>
                                </div>
                                <div class="operation">
                                    <a href="javascript:;" class="items-delete-btn">
                                    </a>
                                </div>
                                <div class="price1">
                                    ¥ 9.9
                                </div>
                                <div class="amount-box">
                                    <div class="select-box">
                                        <span class="down">-</span>
                                        <span class="num">5</span>
                                        <span class="up">+</span>
                                    </div>
                                </div>
                                <div class="subtotal">
                                    ¥ 49.5
                                </div>
                             </div>
                          </div>
                          <div class="cart-top-items">
                             <div class="cart-items clearfix">
                                <div class="items-choose blue-checkbox-new checkbox-on">
                                   <div class="check-box">
                                     <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt="">
                                   </div>
                                </div>
                                <div class="items-thumb f1">
                                    <img src="../../../static/images/dog.jpg">
                                </div>
                                <div class=" name1 hide-row f1">
                                    <div class="name-table">
                                        <a href="javascript:;">Smartisan 明信片</a>
                                    </div>
                                </div>
                                <div class="operation">
                                    <a href="javascript:;" class="items-delete-btn">
                                    </a>
                                </div>
                                <div class="price1">
                                    ¥ 9.9
                                </div>
                                <div class="amount-box">
                                    <div class="select-box">
                                        <span class="down">-</span>
                                        <span class="num">5</span>
                                        <span class="up">+</span>
                                    </div>
                                </div>
                                <div class="subtotal">
                                    ¥ 49.5
                                </div>
                             </div>
                          </div> -->
              </div>
            </div>
            <div class="cart-bottom-bg fix-bottom">
              <div class="fix-bottom-inner">
                <div class="cart-bar-operation">
                  <div class="choose-all">
                    <div class="check-box blue-checkbox-new">
                      <img
                        src="../../../static/images/checkbox-new_631a56a4f6.png"
                        alt=""
                      />
                    </div>
                    <!-- </div> -->
                    <span class="choose-all">全选</span>
                  </div>
                  <div class="delete-choose-goods">删除选中的商品</div>
                </div>
                <div class="shipping">
                  <div class="shipping-box">
                    <div class="shipping-total shipping-num">
                      <h4 class="highlight">
                        已选择 <span>{{ 10 }}</span
                        >件商品
                      </h4>
                      <h5>共计<i>6</i>件商品</h5>
                    </div>
                    <div class="shipping-total shipping-num">
                      <h4 class="highlight">
                        应付总额:
                        <span>￥</span>
                        <i>128.5</i>
                      </h4>
                      <h5>应付总额不含运费</h5>
                    </div>
                  </div>
                  <input
                    type="button"
                    readonly="readonly"
                    class="big-main-btn main-btn"
                    value="点击结算"
                    style="text-aligh:center; margin: 0px; width: 130px; height: 50px; line-height: 50px; font-size: 16px;"
                    @click="$router.push('/checkout')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopCart",
  mounted() {
    this.getShopCartList();
  },
  methods: {
    getShopCartList() {
      this.$store.dispatch("getShopCartList", { userId: 62 });
    },

    // 修改购物车商品的数量
    async changeproductNum(cart, disNum, flag) {
      //第二种版本    disNum可能拿到的是点击+-的值，这个值是变化的量
      //         disNum可能拿到的是输入框输入的值，这个值不是变化的量，而最终修改完成后的值
      if (flag) {
        if (disNum < 1) {
          disNum = 1;
        }
        disNum -= cart.productNum;
      } else {
        if (cart.productNum + disNum < 1) {
          disNum = 1 - cart.productNum;
        }
      }

      try {
        const result = await this.$store.dispatch("addOrUpdateShopCart", {
          productId: cart.productId,
          productNum: disNum,
        });
        if (result === "ok") {
          alert("修改购物车数量成功");
          this.getShopCartList();
        } else {
          alert("修改购物车商品数量失败");
        }
      } catch (error) {
        alert("修改购物车商品数量失败" + error.message);
      }
    },

    // //修改购物车选中状态单个的
    async updateOne(cart) {
      //发请求把后端数据当中checked修改为取反的值
      try {
        const result = await this.$store.dispatch("updateCart", {
          productId: cart.productId,
          checked: cart.isChecked ? 0 : 1,
        });
        //修改成功 重新获取当前页面数据
        if (result === "ok") {
          alert("修改成功");
          this.getShopCartList();
        } else {
          alert("修改状态失败");
        }
      } catch (error) {
        //修改失败 提示
        alert("修改状态失败");
      }
    },

    // 删除单个的购物车信息
    // async deleteOne(cart) {
    //  try {
    //     const result = await this.$store.dispatch("deleteCart", cart.productId);
    //     if (result === "ok") {
    //       alert("删除成功");
    //       this.getShopCartList();
    //     } else {
    //       alert("删除失败");
    //     }
    //   } catch (error) {
    //     alert("删除失败");
    //   }
    // },
    // // 删除所有选中的
    // async deleteAll(){
    //   try {
    //     await this.$store.dispatch('deleteCartAll')
    //     alert('删除成功')
    //     this.getShopCartList()
    //   } catch (error) {
    //     alert('删除失败')
    //   }
    // }
  },
  computed: {
    ...mapState({
      shopCartList: (state) => state.shopcart.shopCartList,
    }),

    checkedNum() {
      return this.shopCartList.reduce((prev, item) => {
        if (item.checked) {
          prev += item.productNum;
        }
        return prev;
      }, 0);

      // allMoney() {
      //   return this.shopCartList.reduce((prev, item) => {
      //     if (item.checked) {
      //       prev += item.productNum * item.salePrice;
      //     }
      //     return prev;
      //   }, 0);
      // },

      // isAllCheck: {
      //   get() {
      //     return (
      //       this.shopCartList.every((item) => item.checked) &&
      //       this.shopCartList.length > 0
      //     );
      //   },
      //       async set(val) {
      //         //要发请求 把所有的购物车信息选中状态全部改为，全选修改后的状态
      //         try {
      //           //this.$store.dispatch('updateCartAll',val?1:0) 是promise  是async函数的返回值promise 不是return后面的promise
      //           // async返回的promise成功和失败看的是return后面的promise
      //           //return后面的promise是成功的，那么async函数返回的promise就是成功的，成功的结果是return 后面promise 成功的结果
      //           const result = await this.$store.dispatch(
      //             "updateCartAll",
      //             val ? 1 : 0
      //           );
      //           alert("修改全选成功");
      //           this.getShopCartList();
      //         } catch (error) {
      //           alert("全选修改失败");
      //         }
      //       },
      //     },
    },
  },
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB,
    Microsoft Yahei, \\5fae\8f6f\96c5\9ed1, STHeiti, \\534e\6587\7ec6\9ed1,
    sans-serif;
  color: #666;
  font-size: 14px;
}
.header {
  width: 100%;
  // height: 100px;
}
.store-content {
  clear: both;
  width: 1220px;
  min-height: 600px;
  padding: 0 0 25px;
  margin: 0 auto;
}
.page-cart {
  padding-top: 40px;
}
.main {
  background-color: #ededed;
  width: 100%;
}
// background-color: aquamarine;
.store-content .gray-box {
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.store-content .gray-box .title {
  padding-left: 30px;
  position: relative;
  z-index: 10;
  height: 60px;
  padding: 0 10px 0 24px;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: #f3f3f3;
  line-height: 60px;
  font-size: 18px;
  color: #333;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 400;
}
.store-content .ui-cart .cart-table-title {
  position: relative;
  z-index: 1;
  line-height: 38px;
  height: 38px;
  padding: 0 0 0 30px;
  font-size: 12px;
  background: #eee;
  border-bottom: 1px solid #dbdbdb;
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.store-content .ui-cart .cart-table-title .name {
  float: left;
  text-align: left;
}
.store-content .ui-cart .cart-table-title span {
  width: 137px;
  float: right;
  text-align: center;
  color: #838383;
}
.store-content .ui-cart .name {
  width: 380px;
  margin-left: 20px;
  color: #323232;
  display: table;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  line-height: 0;
  visibility: hidden;
}
.pr {
  position: relative;
}
.store-content .ui-cart .cart-group .cart-items {
  border-top: none;
}
.store-content .ui-cart .cart-items {
  position: relative;
  height: 140px;
  margin-left: 74px;
  // text-align: center;
}
.store-content .items-choose {
  position: absolute;
  left: -74px;
  top: -30px;
  width: 74px;
  height: 20px;
  padding: 60px 0 0 31px;
  font-size: 12px;
  color: #999;
}
.store-content .items-thumb {
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  width: 80px;
  height: 80px;
}
.items-thumb img {
  width: 80px;
  height: 80px;
}
.fl {
  float: left;
}
.store-content .ui-cart .name {
  width: 380px;
  margin-left: 20px;
  color: #323232;
  display: table;
}
.check-box {
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
}
.blue-checkbox-new {
  background: no-repeat 0 -20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  // -moz-user-select: none;
  // -webkit-user-select: none;
  // -ms-user-select: none;
  // user-select: none;
  vertical-align: middle;
}
.store-content .items-thumb {
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  width: 80px;
  height: 80px;
  background-color: red;
}
.store-content .ui-cart .name-table {
  display: table-cell;
  vertical-align: middle;
  height: 140px;
}
.store-content .ui-cart .name1 {
  width: 380px;
  margin-left: 100px;
  color: #323232;
  display: table;
  position: absolute;
  top: -30px;
  left: 0;
}
.store-content .ui-cart .name-table {
  display: table-cell;
  vertical-align: middle;
  height: 140px;
}
.store-content .name1 a {
  color: #333;
  font-size: 16px;
}
a {
  font-style: normal;
  text-decoration: none;
  color: #5079d9;
  cursor: pointer;
  transition: all 0.15s ease-out;
}
.operation {
  width: 17px;
  height: 17px;
  border-radius: 50%;
}
.store-content .cart-items .items-delete-btn {
  display: inline-block;
  width: 17px;
  height: 17px;
  margin: 0 auto;
  color: #c2c2c2;
  background-image: url("../../../static/images/delete-btn-icon_a35bf2437e@2x.jpg");
  background-size: 100% auto;
  transition: none;
  position: absolute;
  top: 28px;
  right: 60px;
}
.operation .items-delete-btn:hover {
  background-position: 0 17px;
  overflow: hidden;
}
.store-content .ui-cart .cart-items .price1,
.store-content .ui-cart .cart-items .subtotal {
  overflow: hidden;
  float: right;
  width: 137px;
  text-align: center;
  color: #666;
  line-height: 140px;
  font-size: 14px;
}
.cart-items .price1 {
  position: absolute;
  top: -30px;
  right: 411px;
}
.cart-items .subtotal {
  position: absolute;
  top: -29px;
  right: 137px;
}
.amount-box {
  width: 137px;
  height: 140px;
  position: absolute;
  top: 24px;
  right: 257px;
  font-size: 14px;
}
.select-box {
  height: 140px;
}
.select-box .down,
.select-box .up {
  background: url(../../../static/images/cart-updown_8303731e15@2x.jpg)
    no-repeat;
  overflow: hidden;
  float: left;
  width: 34px;
  height: 37px;
  background-size: 100% auto;
  line-height: 40px;
  text-indent: -9999em;
  cursor: pointer;
  background-position: 0 -60px;
}
.select-box .up {
  background-position: 0 0px;
}
.select-box .num {
  position: relative;
  overflow: hidden;
  float: left;
  width: 36px;
  height: 18px;
  margin: 7px 0 0;
  border: none;
  border-radius: 3px;
  line-height: 18px;
  text-align: center;
  font-size: 14px;
}

.fix-bottom {
  height: 90px;
  width: 100%;
  // position: absolute;
  bottom: 0;
  z-index: 1;
  background-position: 50%;
  background: #fdfdfd;
  background: linear-gradient(#fdfdfd, #f9f9f9);
  border-top: 1px solid #e9e9e9;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.04);
}
.cart-bar-operation {
  float: left;
  padding: 35px 26px;
  font-size: 12px;
}
.shipping {
  float: right;
  padding: 20px 30px;
}
.shipping-box {
  display: inline-block;
  padding-top: 1px;
  margin-right: 10px;
}
.choose-all,
.delete-choose-goods,
.page-cart .selected-count {
  float: left;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  position: relative;
}
.blue-checkbox-new {
  float: left;
  margin-right: 9px;
}
.delete-choose-goods {
  position: relative;
  margin-left: 21px;
  color: #bbb;
}
.shipping-box {
  display: inline-block;
  padding-top: 1px;
  margin-right: 10px;
}
.shipping-total:first-child {
  border: none;
}
.shipping-total.shipping-num {
  text-align: right;
}
.shipping-total {
  display: inline-block;
  border-left: 1px solid #e1e1e1;
  padding: 0 20px;
}
.shipping-total h4 {
  color: #323232;
}

h4 {
  display: block;
  // margin-block-start: 1.33em;
  // margin-block-end: 1.33em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
  font-weight: bold;
  font-size: 14px;
  font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB,
    Microsoft Yahei, \\5fae\8f6f\96c5\9ed1, STHeiti, \\534e\6587\7ec6\9ed1,
    sans-serif;
}
h4 {
  font-weight: 400;
}
.page-cart .shipping-total.shipping-num i {
  width: 28px;
  display: inline-block;
  text-align: center;
}
h4 i,
.shipping-total h4 span {
  color: #d44d44;
}
.shipping-total h4 > i {
  font-size: 18px;
  font-weight: 700;
}
i {
  font-style: normal;
}
.shipping-total h5 {
  color: #959595;
  font-size: 14px;
  font-weight: bold;
  font-weight: 400;
}
.shipping-total.shipping-num i {
  width: 28px;
  display: inline-block;
  text-align: center;
}
.shipping-total h5 > i {
  font-size: 16px;
  font-weight: 700;
}
i {
  font-style: normal;
}
.big-main-btn {
  float: right;
  height: 48px;
}
.main-btn {
  border: 1px solid #5c81e3;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  background-color: #678ee7;
  background-image: linear-gradient(180deg, #678ee7, #5078df);
}
</style>
