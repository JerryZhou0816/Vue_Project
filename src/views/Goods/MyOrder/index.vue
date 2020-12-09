<template>
  <div class="orderBox">
    <!-- 头部 -->
    <div class="header"></div>
    <!-- 内容区 -->
    <div class="orderBody">
      <!-- 左侧区域 -->
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
            <span class="title">昵称</span>
            <ul class="myul">
              <li><a href="javascript:;">我的订单</a></li>
              <li><router-link to="/myorder/myphoto">我的资料</router-link></li>
              <li><a href="javascript:;">我的优惠</a></li>
              <li><a href="javascript:;">我的优惠</a></li>
              <li><a href="javascript:;">售后服务</a></li>
              <li><a href="javascript:;">以旧换新</a></li>
            </ul>
          </div>
        </el-aside>
        <!-- 订单列表页 -->
        <el-card class="orderList">
          <div slot="header">
            <h2 class="orderTitle">我的订单</h2>
          </div>
          <!-- 内容区域 -->
          <div class="orderContent">
            <div class="contentTitle">
              <table>
                <thead>
                  <tr>
                    <th width="29%">
                      <span class="orderCOntentOne">2020-12-01 11:01</span>
                      <i
                        >订单号：<a href="javascript:;" style="color:#5f8ddd"
                          >45465654654</a
                        ></i
                      >
                    </th>
                    <th width="20%">单价</th>
                    <th width="10%">数量</th>
                    <th width="19%">商品操作</th>
                    <th>实付金额</th>
                    <th>
                      <a href="javascript:;" style="color:#5f8ddd">查看详情></a>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <!-- 详细内容展示 -->
            <div class="orderItem">
              <div class="orderItemLeft">
                <div class="ordercar">
                  <div>
                    <img src="../../../static/images/shop.jpg" alt="" />
                  </div>
                  <a href="##">明信片</a>
                </div>
                <span class="one">￥9.9</span>
                <span class="two">2</span>
                <div class="btn">
                  <el-button type="danger" size="small">删除此订单</el-button>
                </div>
              </div>
              <div class="orderItemRight">
                <span >￥5559</span>
                <span >交易关闭</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-container>

    </div>
     <!-- 分页器 -->
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              background
              layout="->,total, sizes, prev, pager,next"
              :total="400"
            >
            </el-pagination>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
    };
  },
};
</script>

<style lang="less">
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
    font-size: 18px;
    font-weight: 400;
    color: #626262;
  }
}
.orderContent {
  width: 100%;
  .contentTitle {
    width: 100%;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    background: #eeeeee;
    table {
      width: 899px;
      .orderCOntentOne {
        margin-right: 20px;
      }
    }
  }
  .orderItem {
    width: 100%;
    height: 82px;
    padding: 15px 0;
    line-height: 82px;
    position: absolute;
    .orderItemLeft {
      color: rgb(98, 98, 98);
      font-size: 14px;
      display: flex;
      height: 82px;
      width: 680px;
      // position: absolute;
      .ordercar {
        // line-height: 82px;
        display: flex;
        height: 100%;
        //  top:0;
        //  left: 0;
        width: 322px;
        div {
          cursor: pointer;
          width: 82px;
          height: 82px;
          display: flex;
          justify-content: center;
          align-content: center;
          //  display:inline-block;
          img {
            //  line-height: 82px;
            height: 80px;
            width: 80px;
            //  display: block;
          }
        }
        a {
          margin-left: 20px;
          text-decoration: none;
          font-size: 14px;
        }
      }
      .one {
       margin-left:11px ; 
      }
      .two {
        margin-left:115px ;
      }
      .btn {
          margin-left:90px ;
      }
    }
    .orderItemRight{
      height: 100%;
      width: 219px;
      position: relative;
      right: -680px;
      top: -82px;
      // border-left: 1px solid  #626262;
      // background: #000;
      span{
        margin-left: 45px;
    }
    }
  }
}
</style>
