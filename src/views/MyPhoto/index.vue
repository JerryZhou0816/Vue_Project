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
              <li><router-link to="">收货地址</router-link></li>
              <li><router-link to="/mypreferential">我的优惠</router-link></li>
              <li><router-link to="/myaftersales">售后服务</router-link></li>
              <li><router-link to="/mynew">以旧换新</router-link></li>
            </ul>
          </div>
        </el-aside>
        <!-- 头像列表页 -->
        <el-card class="photoList">
          <div slot="header">
            <h2 class="photoTitle">我的资料</h2>
          </div>
          <!-- 内容区域 -->
          <div class="photoConent">
            <div class="demo-fit">
              <div class="block" v-for="fit in fits" :key="fit">
                <el-avatar
                  shape="square"
                  :size="100"
                  :fit="fit"
                  :src="url"
                ></el-avatar>
              </div>
            </div>
            <div class="textContnt">
              <h3>修改头像</h3>
              <!-- 修改头像按钮 -->
              <el-button
                type="primary"
                size="small"
                @click="centerDialogVisible = true"
                >上传头像</el-button
              >
              <el-dialog
                :visible.sync="centerDialogVisible"
                width="30%"
              >
                <el-card>
                  <div slot="header">设置头像</div>
                  <div>
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                </el-card>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="centerDialogVisible = false"
                    >确 定</el-button
                  >
                </span>
              </el-dialog>
            </div>
          </div>
        </el-card>
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
      centerDialogVisible: false,
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
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
.photoList {
  margin-left: 23px;
  width: 100%;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
// 头像样式
.photoConent {
  
  .demo-fit {
    float: left;

    .clearfix::after {
      display: block;
      height: 0;
      content: "";
      clear: both;
      visibility: hidden;
    }
  }

  .textContnt {
    margin-left: 5px;
    float: left;
    margin-top: 65px;
    h3 {
      text-align: center;
    }
    .clearfix::after {
      display: block;
      height: 0;
      content: "";
      clear: both;
      visibility: hidden;
    }
  }
}
</style>
