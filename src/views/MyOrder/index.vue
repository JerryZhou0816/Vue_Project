<template>
  <div class="orderBox">
    <!-- 头部 -->
    <div class="header"></div>
    <!-- 内容区 -->
    <div class="orderBody">
      <!-- 左边列表文字出 -->
      <el-container class="concent">
        <el-aside width="208px" class="box">
          <div class="demo-fit">
            <div class="block" v-for="fit in fits" :key="fit">
              <el-avatar
                shape="square"
                :size="168"
                :fit="fit"
                :src="url"
              ></el-avatar>
            </div>
            <!-- 左边列表文字出 -->
            <span class="title">{{ userInfo.username }}</span>
            <ul class="myul">
              <li><a href="javascript:;">我的订单</a></li>
              <li><router-link to="/myphoto">我的资料</router-link></li>
              <li><router-link to="/myaddress">我的地址</router-link></li>
              <li><router-link to="/mypreferential">我的优惠</router-link></li>
              <li><router-link to="/myaftersales">售后服务</router-link></li>
              <li><router-link to="/mynew">以旧换新</router-link></li>
            </ul>
          </div>
        </el-aside>
        <!-- 订单列表页 -->
        <el-card class="orderList">
          <div class="orderTitle">
            我的订单
          </div>
          <!-- 订单详情 -->
          <div
            class="contentTitle"
            v-for="(item, index) in orderList"
            :key="index"
          >
            <div class="titleLeft">
              <span class="dataBox">{{ item.createDate }}</span>
              <span class="orderBoxs"
                >订单号：
                <router-link to="/myprogress">{{ item.orderId }}</router-link>
              </span>
              <span class="pricBox">单价</span>
              <span class="numbBox">数量</span>
              <span class="makeBox">商品操作</span>
              <span class="rightBox">实付金额</span>
              <span class="lastBox"
                ><router-link to="/myprogress">查看详情></router-link></span
              >
            </div>
            <!-- 商品列表 -->
            <div>
              <!-- v-for="(goodsList,index) in item.goodsList" :key="goodsList.productId" -->
              <!-- goodsList.productImg -->
              <!-- goodsList.productName -->
              <div
                class="contentList clearfix"
                v-for="(goodsList, index) in item.goodsList"
                :key="goodsList.productId"
              >
                <span class="dataBox clearfix"
                  ><a href="###"><img :src="goodsList.productImg" alt=""/></a
                ></span>
                <span class="orderBoxs clearfix">{{goodsList.productName}}<a href="###"> </a> </span>
                <span class="pricBox clearfix">{{goodsList.salePrice}}</span>
                <span class="numbBox clearfix">{{goodsList.productNum}}</span>
                <span class="makeBox clearfix"><a href="###">删除</a></span>
                <span class="rightBox clearfix">{{goodsList.salePrice}}</span>
                <span class="lastBox clearfix"
                  ><a href="###">查看详情></a></span
                >
              </div>
            </div>
          </div>
          <!-- 内容区域 -->
        </el-card>
      </el-container>
      <!-- 分页器 -->
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="5"
          background
          layout="->,total, sizes, prev, pager,next"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "MyOrder",
  data() {
    return {
      fits: ["fill"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      currentPage4: 1,
    };
  },
  mounted() {
    this.getUserInfo();
    this.getOrderList();
  },

  methods: {
    //订单页发送请求
    getOrderList() {
      //收集发送请求的信息
      const userId = this.userInfo.id;
      console.log(this.userInfo);
      // const page = this.currentPage4
      // const size = this.

      // this.$router.push({
      //   path:'/myorder',
      //   query:{
      //     userId,
      //     page,
      //     // size
      //   }

      // })
    },
    //用户信息
    getUserInfo() {
      this.$store.dispatch("getUserInfo");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.OrderList.userInfo,
      // total: (state) => state.OrderList.orderList.total,
      orderList: (state) => state.OrderList.orderList,
    }),

    // ...mapGetters(['orderItem']),
  },
  watch: {
    userInfo: {
      handler(newVualue, oldValue) {
        if (newVualue) {
          let params = {
            page: this.currentPage4,
            userId: newVualue.id,
            size: 5,
          };
          this.$store.dispatch("getOrderList", params);
        }
      },
    },
  },
};
</script>

<style lang="less">
a {
  color: #527ad9;
}
ul {
  list-style: none;
}
.orderBox {
  height: 100%;
  width: 100%;
  background: #ededed;
  // .header {
  //   height: 50px;
  //   width: 100%;
  //   background: rebeccapurple;
  // }
  .orderBody {
    width: 1220px;
    padding-top: 40px;
    margin: 0 auto;
    // background: #000;
  }
}
a {
  text-decoration: none;
}
// 左侧头像加列表
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  //   line-height: 200px;
}
.block {
  padding-top: 20px;
}
.box {
  border-radius: 8px;
}
.title {
  display: inline-block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 48px;
  font-weight: 700;
}
.myul {
  li {
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #ebebeb;
    a {
      display: block;
      font-size: 14px;
      color: #5079d9;
    }
  }
  li:hover {
    // display: inline-block;
    cursor: pointer;
    transition: all 0.2s ease-out;
    background: #5079d9;
    a {
      text-decoration: none;
      font-size: 16px;
      color: white !important;
    }
  }
}
//订单详情页
.orderList {
  width: 988px;
  padding: 0 24px 10px;
  margin-left: 23px;
  .orderTitle {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    font-weight: 400;
    color: #626262;
    // margin-bottom:2px ;
    border-bottom: 1px solid #ccc;
  }
  .contentTitle {
    clear: both;
    width: 900px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    background: #eeeeee;
    // position: absolute;
    .titleLeft {
      width: 100%;
      height: 36px;
      display: block;
      span {
        width: 36px;
      }
      .dataBox {
        margin-left: 10px;
      }
      .orderBoxs {
        margin-left: 25px;
      }
      .pricBox {
        margin-left: 110px;
      }
      .numbBox {
        margin-left: 80px;
      }
      .makeBox {
        margin-left: 78px;
      }
      .rightBox {
        margin-left: 50px;
      }
      .lastBox {
        margin-left: 50px;
      }
    }
    .contentList {
      height: 82px;
      line-height: 82px;
      padding: 15px 0;
      text-align: center;
      
     
      span {
        height: 82px;
        line-height: 82px;
        display: block;
        float:left;

        img {
          height: 80px;
          width: 80px;
          // display:block;
        }
      }
        .clearfix::after {
          display: block;
          height: 0;
          content: "";
          clear: both;
          visibility: hidden;
        }
      .dataBox {
        margin-left: 10px;
        width: 80px;
      }
      .orderBoxs {
        margin-left: 45px;
        width: 180px;
      }
      .pricBox {
        margin-left: 80px;
        width: 40px;
      }
      .numbBox {
        margin-left: 69px;
        width: 40px;
      }
      .makeBox {
        margin-left: 75px;
        width: 40px;
      }
      .rightBox {
        margin-left: 47px;
        width: 60px;
      }
      .lastBox {
        margin-left: 43px;
        width: 60px;
      }
    }
  }
}
</style>
