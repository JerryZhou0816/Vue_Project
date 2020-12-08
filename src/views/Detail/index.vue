<template>
  <div class="detail">
    <!-- 详情 -->
    <div class="shop">
      <!-- 图片列表 -->
      <div class="imageList">
        <!-- @click="changeState(index)" -->
        <!-- :class="flag === index ? 'active' : ''" -->
        <img
          @click="changeState(0)"
          :class="flag === 0 ? 'active' : ''"
          src="https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg"
        />
        <img
          @click="changeState(1)"
          :class="flag === 1 ? 'active' : ''"
          src="https://resource.smartisan.com/resource/1501eaf68c9771e5599eec45a5f6320a.jpg"
        />
      </div>
      <!-- 大图 -->
      <div class="bigImage">
        <!-- <img
          src="https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg"
        /> -->
        <img :src="bigImage[index].src" />
      </div>
      <!-- 右 -->
      <div class="rightContainer">
        <div class="top">
          <h4>优点智能 E1 推拉式智能指纹密码锁</h4>
          <div>
            <h6>
              <span>推拉一下，轻松开关</span>

              <i> 1111.00 </i>
              <em class="iconfont icon-qian"></em>
            </h6>
          </div>
        </div>
        <div class="middle">
          <span class="num">数量</span>
          <div class="sub" @click="changeNum(false)">-</div>
          <span>{{ count }}</span>
          <div class="add" @click="changeNum(true)">+</div>
          <!-- <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="数量"
            style=""
          ></el-input-number> -->
        </div>
        <div class="bottom">
          <el-button type="primary" size="medium" class="btn" @click="addCart"
            >加入购物车</el-button
          >
          <el-button class="btn" @click="toCheckout">现在购买</el-button>
          <!-- <div class="btn1">加入购物车</div>
          <div class="btn">现在购买</div> -->
        </div>
      </div>
    </div>

    <!-- 产品信息 -->
    <div class="productInfo">
      <div>
        <span>产品信息</span>
      </div>
      <img
        src="https://resource.smartisan.com/resource/a1f3fbf662376e8684e528f05721b286.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      flag: 0,
      count: 1,
      index: 0,
      //   num: 1,
      // defaultIndex: 0, //这个数据是图片下标，控制显示的图片是哪张，
      // 大图切换假
      bigImage: [
        {
          src:
            "https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg",
        },
        {
          src:
            "https://resource.smartisan.com/resource/1501eaf68c9771e5599eec45a5f6320a.jpg",
        },
      ],
    };
  },
  methods: {
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
        this.count = this.count + 1;
      } else {
        if (this.count > 1) {
          this.count = this.count - 1;
        }
      }
    },
    //去结算页面
    toCheckout() {},
    //添加购物车

    // handleChange(value) {
    //   console.log(value);
    // },
  },
};
</script>

<style lang="less" >
.detail {
  background-color: #eee;
  width: 100%;
  height: 10000px;

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
      //   align-items: center;
      img {
        width: 440px;
        height: 440px;
      }
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
          // position: relative;
          // top: 25px;
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
      //   .buttom {
      //     .btn1 {
      //       //   display: flex;
      //       display: block;
      //       width: 145px;
      //       height: 50px;
      //       background-color: blue;
      //     }
      //   }
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
    img {
      width: 1220px;
    }
  }
}
</style>
