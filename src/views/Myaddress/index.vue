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
              <li><router-link to="/myaddress">我的地址</router-link></li>
              <li><router-link to="/mypreferential">我的优惠</router-link></li>
              <li><router-link to="/myaftersales">售后服务</router-link></li>
              <li><router-link to="/mynew">以旧换新</router-link></li>
            </ul>
          </div>
        </el-aside>
        <!-- 地址列表页 -->
        <div class="address">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="titles">收货地址</span>
              <!-- Form -->
              <el-button
                type="text"
                @click="dialogFormVisible = true"
                style="float: right; padding: 3px 0"
                >添加地址</el-button
              >

              <el-dialog
                title="收货地址"
                :visible.sync="dialogFormVisible"
                center
                width="30%"
              >
                <el-form :model="form">
                  <el-form-item>
                    <el-input
                      v-model="form.name"
                      autocomplete="off"
                      placeholder="收货人姓名"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="form.name"
                      autocomplete="off"
                      placeholder="收货人地址"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="form.name"
                      autocomplete="off"
                      placeholder="收货人手机号"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="checked">设为默认</el-checkbox>
                <div slot="footer" class="dialog-footer" width="90%">
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </div>
            <div>
              <div class="addressTitle clearfix one">姓名</div>
              <div class="addressTitle clearfix two">详细地址</div>
              <div class="addressTitle clearfix three">电话</div>
            </div>
          </el-card>
          <div class="addressList">
            <span class="ones">明明</span>
            <span class="twos">河北省保定市哈哈哈</span>
            <span class="threes">15122222222</span>
             <el-link type="primary" class="four">主要链接</el-link>
             <el-button type="primary" icon="el-icon-edit" size="mini" class="four"></el-button>
             <el-button type="danger" icon="el-icon-delete" size="mini" class="four"></el-button>
          </div>
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
      checked: false,
      fits: ["fill"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
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
  .titles {
    font-size: 18px;
    font-weight: 400;
    color: #626262;
  }
  .imgList {
    text-align: center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  //  地址头样式
  .addressTitle {
    float: left;
    width: 137px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    border-bottom-color: rgba(0, 0, 0, 0.08);
  }
  .one {
    margin-left: 20px;
  }
  .two {
    margin-left: 150px;
  }
  .three {
    margin-left: 200px;
  }
  .addressList {
    // align-items: center;
    height: 115px;
    line-height: 115px;
    border: 1px solid rgba(102, 102, 102, .3);
    // text-align: center;
    .ones {
    margin-left: 40px;
  }
  .twos {
    margin-left: 230px;
  }
  .threes {
    margin-left: 240px;
  }
  .four{
      margin-left: 30px;
  }

  }
}
</style>
