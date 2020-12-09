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
            <span class="title">昵称</span>
            <ul class="myul">
              <li><router-link to="/myorder">我的订单</router-link></li>
              <li><router-link to="/myphoto">我的资料</router-link></li>
              <li><a href="javascript:;">收货地址</a></li>
              <li><router-link to="/mypreferential">我的优惠</router-link></li>
              <li><router-link to="/myaftersales">售后服务</router-link></li>
              <li><router-link to="/mynew">以旧换新</router-link></li>
            </ul>
          </div>
        </el-aside>
        <!-- 头像列表页 -->
        <div class="address">
          <el-card>
            <div slot="header">
                <h2 class="title">售后服务 </h2>
            </div>
            <div class="imgList">
              <img src="../../../static/images/support.png" alt="" />
              <h3>求你了</h3>
            </div>
          </el-card>
        </div>
      </el-container>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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
.address {
  width: 100%;
 
      .title{
    
    font-size: 18px;
    font-weight: 400;
    color: #626262;
  
  }
  .imgList {
    text-align: center;
    
  }
}
</style>
