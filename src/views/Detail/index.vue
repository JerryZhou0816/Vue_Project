<template>
  <div class="detail">
    <div class="heart">
      <!-- 详情 -->
      <div class="shop">
        <!-- 图片列表 -->
        <div class="imageList">
          <img
            v-for="(item, index) in productDet.productImageSmall"
            :key="index"
            @click="changeState(index)"
            :class="flag === index ? 'active' : ''"
            :src="item"
          />
          <!-- <img
          @click="changeState(index)"
          :class="flag === index ? 'active' : ''"
          src="https://resource.smartisan.com/resource/1501eaf68c9771e5599eec45a5f6320a.jpg"
        /> -->
        </div>
        <!-- 大图 -->
        <!-- @mousemove="move" -->
        <div class="bigImage" v-if="productDet.productImageSmall">
          <!-- <img
          src="https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg"
        /> -->
          <img :src="productDet.productImageSmall[index]" />

          <!-- <div class="mask" ref="mask"></div> -->

          <!-- 放大镜---------------------------------------- -->
          <!-- <div class="magnifier" ref="magnifier">
          <img :src="bigImage[index].src" ref="bigBigImage" />
        </div>-->
        </div>

        <!-- 右 -->
        <div class="rightContainer">
          <div class="top">
            <h4>{{ productDet.productName }}</h4>
            <div>
              <h6>
                <span>{{ productDet.subTitle }}</span>

                <i> {{ productDet.salePrice }} </i>
                <em class="iconfont icon-qian"></em>
              </h6>
            </div>
          </div>
          <div class="middle">
            <span class="num">数量</span>
            <div class="sub" @click="changeNum(false)">-</div>
            <span>{{ productNum }}</span>
            <div class="add" @click="changeNum(true)">+</div>
          </div>
          <div class="bottom">
            <el-button
              type="primary"
              size="medium"
              class="btn"
              @click="$router.push('/shopcart')"
              >加入购物车</el-button
            >
            <el-button class="btn" @click="toCheckout">现在购买</el-button>
          </div>
        </div>
      </div>

      <!-- 产品信息 -->
      <div class="productInfo">
        <div>
          <span>产品信息</span>
        </div>
        <!-- <img
        src="https://resource.smartisan.com/resource/a1f3fbf662376e8684e528f05721b286.jpg"
      />    -->
        <!-- <img
        :src="productDet.productImageBig"
      /> -->
        <div v-html="productDet.detail" class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      productId: "",
      flag: 0, //标志
      productNum: 1,
      index: 0,
    };
  },

  //需要全部商品页对接
  beforeMount() {
    this.productId = this.$route.query.productId;
    console.log(this.productId);
  },
  mounted() {
    this.getProductDet();
  },
  computed: {
    // ...mapState({['productDet']})
    ...mapState({ productDet: (state) => state.detail.productDet }),
  },
  methods: {
    //获取商品详情
    getProductDet() {
      this.$store.dispatch("getProductDet", this.productId);
    },

    // 点击添加active类/改变大图
    changeState(index) {
      this.index = index;
      this.flag = -1;
      this.flag = index;
      //   console.log(this.flag);
      //   console.log(index);
    },

    //数量加减
    changeNum(type) {
      if (type) {
        this.productNum = this.productNum + 1;
      } else {
        if (this.productNum > 1) {
          this.productNum = this.productNum - 1;
        }
      }
    },
    //添加购物车
    async addCart() {
      let { productId, productNum } = this;
      let userId = 62;
      const productInfo = {
        productId,
        productNum,
        userId,
      };
      try {
        const result = await this.$store.dispatch("addShopCart", productInfo);
        console.log(result);
        if (result === "ok") {
          alert("添加购物车成功");
          this.$router.push("/shopcart");
        } else {
          alert("添加购物车失败");
          // this.$router.push('/login')
        }
      } catch (error) {
        alert("请求添加购物车失败");
      }
    },
    //去结算页面,带上商品ID
    toCheckout() {
      this.$router.push({
        path: "/checkout",
        query: { productId: this.productId, productNum: this.productNum },
      });
    },

    // handleChange(value) {
    //   console.log(value);
    // },
  },
};
</script>

<style lang="less">
.detail {
  background-color: #eee;
  width: 100%;
  // height: 19999px;
  height: 100%;
  .heart {
    height: 100%;
    width: 1220px;
    margin: 0 auto;
    .shop {
      width: 1220px;
      height: 562px;
      background-color: white;
      margin: 0px auto;
      // margin-top: 30px;
      border: 1px solid #e6e6e6;
      border-radius: 15px;
      display: flex;
      position: relative;
      top: 20px;
      font-size: 16px;

      // justify-content: space-around;

      .imageList {
        width: 80px;
        height: 500px;
        position: relative;
        top: 60px;
        left: 60px;
        img {
          width: 80px;
          height: 80px;
          border: 1px solid #e6e6e6;
          border-radius: 5px;
          margin-bottom: 6px;
          &.active {
            border: 3px solid #e6e6e6;
            box-sizing: border-box;
          }
        }
      }
      .bigImage {
        width: 440px;
        height: 440px;
        margin-left: 80px;
        margin-top: 60px;
        position: relative;
        //   align-items: center;
        img {
          width: 440px;
          height: 440px;
        }
        // .mask {
        //   width: 220px;
        //   height: 220px;
        //   background-color: rgba(0, 0, 0, 0.5);
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   &:hover {
        //     display: block;
        //   }
        // }
        //放大镜--------------------------------------------------------
        // .magnifier {
        //   width: 440px;
        //   height: 440px;
        //   position: absolute;
        //   top: 0;
        //   left: 450px;
        //   background-color: pink;
        //   display: none;
        //   z-index: 100;
        //   overflow: hidden;
        //   img {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 880px;
        //     height: 880px;
        //   }
        //   &:hover {
        //     display: block;
        //   }
        // }
      }

      .rightContainer {
        position: relative;
        left: 20px;
        top: 40px;
        width: 450px;
        .top {
          h4 {
            font-size: 24px;
            font-weight: 400;
            padding: 10px 0;
          }
          div {
            h6 {
              font-size: 12px;
              font-weight: 400;
              height: 23px;
              line-height: 23px;
              span {
                color: #e6e6e6;
                font-weight: 700;
              }
              em {
                font-size: 12px;
                color: #d44d44;
                float: right;
              }
              i {
                font-size: 20px;
                font-weight: 700;
                color: #d44d44;
                float: right;
              }
            }
          }
        }
        .middle {
          border-top: 1px solid #e6e6e6;
          border-bottom: 1px solid #e6e6e6;
          margin: 25px 0;
          height: 80px;
          line-height: 80px;
          display: flex;
          .num {
            color: #999;
          }
          .sub {
            width: 25px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            border: 1px solid #999;
            border-radius: 50%;
            margin: 0 20px;
            font-weight: 700;
            color: #999;
            box-shadow: 0px 0px 10px 2px #e6e6e6;
            box-sizing: border-box;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .add {
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          border: 1px solid #999;
          border-radius: 50%;
          margin-left: 20px;
          font-weight: 700;
          color: #999;
          box-shadow: 0px 0px 10px 2px #e6e6e6;
          box-sizing: border-box;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .productInfo {
      width: 1220px;
      margin: 0px auto;
      position: relative;
      top: 40px;
      background-color: white;
      border-radius: 20px;
      div {
        height: 60px;
        border: 1px solid #e6e6e6;
        border-bottom: none;
        border-radius: 15px 15px 0 0;
        background-color: #f3f3f3;
        span {
          position: relative;
          height: 60px;
          line-height: 60px;
          left: 20px;
          font-size: 18px;
        }
      }

      .image {
        width: 1220px;
        height: 100%;
        // z-index: 10000;
      }
    }
  }
}
</style>
