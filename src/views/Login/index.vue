<template>
  <div class="login">
    <div class="Container">
      <div class="LoginContainer">
        <!-- 登录的头像以及标题 -->
        <div class="title">
          <h4>使用XMall 账号 登录官网</h4>
        </div>
        <!-- 登录的主体 收集用户的数据 -->
        <div class="content">
          <div class="userName">
            <input
              type="text"
              v-model="userName"
              name="userName"
              placeholder="账号"
            />
          </div>
          <div class="userPassword">
            <input type="password" v-model="password" placeholder="密码" />
          </div>
          <div class="check">
            <input type="text" v-model="code" placeholder="请输入验证码" />
          </div>
          <div class="pr">
            <input type="checkbox" id="txt" />
            <label for="txt">记住密码 </label>
            <div>
              <a href="javascript:;" class="regiter" @click="toRegister"
                >注册 XMall账号</a
              >
              <!-- 这个忘记密码功能暂时不做了 -->
              <a href="javascript:;" class="forget">忘记密码？</a>
            </div>
          </div>
          <!-- <div class="login">
            <input type="button" value="登录" @click="login" />
          </div> -->
          <el-button
            type="primary"
            style="height:50px;margin-top:10px;width:100%; font-size:18px"
            @click="login"
            >登录</el-button
          >
          <!-- :disabled="!(password && userName)" -->
          <el-button
            style="height:50px;margin-top:15px;width:100%; font-size:18px;margin-left:0;"
            @click="Return"
            >返回</el-button
          >
          <div class="line"></div>
          <div class="footer">
            <span>其他账号登录：</span>
            <a href=""
              ><img
                src="../../../static/images/other-login.png"
                alt=""
                @click="img"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "../../api/mockIndex";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      code: "",
    };
  },

  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    // 点击登录按钮 进行登录
    async login() {
      let { userName, password, code } = this;
      console.log(userName, password);
      if (!userName.trim() || !password.trim()) {
        this.$message.warning("用户名或者密码不能为空");
        return;
      }
      // 是否填写了验证码
      if (!code.trim()) {
        this.$message.warning("请完成验证");
        return;
      }
      try {
        const result = await reqLogin();
        if (result.code === 200) {
          //成功后，将用户名和密码存储到localStorage里面
          localStorage.setItem("USERINFO_KEY", JSON.stringify(result.data));
          this.$message.success("登录成功");
          // 跳转到主页面
          this.$router.replace("/");
        } else {
          this.$message.error("登录失败");
        }
      } catch (error) {
        this.$messaeg.error("获取登录失败");
      }
    },

    // 点击返回按钮，会到主页
    Return() {
      this.$router.replace("/");
    },
    // 点击图片，提示该功能尚未开发
    img() {
      this.$message.warning("此功能尚未开发");
      return;
    },
  },
  mounted() {},
};
</script>

<style lang="less">
.login {
  background: url(../../../static/images/bg_9b9dcb65ff@2x.png) repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .Container {
    margin-top: 50px;
    .LoginContainer {
      width: 400px;
      height: 600px;
      margin: 0 auto;
      padding: 50px;
      border: 1px solid #dadada;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #fff;
      .title {
        height: 92px;
        margin: 23px 0 50px;
        padding: 75px 0 0;
        box-sizing: content-box;
        position: relative;
        background: url(../../../static/images/smartisan_4ada7fecea.png)
          no-repeat bottom;
        h4 {
          position: absolute;
          height: 20px;
          line-height: 20px;
          font-weight: 400;
          color: #333;
          font-size: 20px;
          bottom: 0;
          width: 100%;
          text-align: center;
        }
      }
      .content {
        width: 100%;
        height: 410px;
        font-size: 14px;
        .userName {
          height: 50px;
          margin-bottom: 15px;
          input {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-indent: 10px;
            font-size: 18px;
            &:focus {
              outline: none;
            }
          }
        }
        .userPassword {
          height: 50px;
          margin-bottom: 15px;
          input {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 18px;
            text-indent: 10px;
            &:focus {
              outline: none;
            }
          }
        }
        .check {
          height: 44px;
          margin-bottom: 15px;
          input {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 18px;
            text-indent: 10px;
            &:focus {
              outline: none;
            }
          }
        }
        .pr {
          // display: flex;
          height: 19px;
          // text-align: center;
          margin-bottom: 15px;
          font-size: 14px;
          white-space: nowrap;
          position: relative;
          color: #646464;
          input {
            vertical-align: middle;
            margin-top: -2px;
            margin-bottom: 1px;
            margin-right: 4px;
            width: 19px;
            height: 19px;
            border: 1px solid #646464;
          }

          div {
            float: right;
            font-size: 16px;
            .regiter {
              display: inline-block;
              padding-right: 8px;
              border-right: 1px solid #ccc;
              color: #5079d9;
            }
            .forget {
              display: inline-block;
              margin-left: 8px;
              color: #5079d9;
            }
          }
        }
        .login {
          height: 50px;
          margin-top: 25px;
          input {
            width: 100%;
            height: 100%;
            cursor: not-allowed;
            border: 1px solid #afafaf;
            border-radius: 4px;
            font-size: 18px;
            color: #fff;
            background-color: #33448b;
            // background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);

            &:focus {
              outline: none;
            }
            // &.active {
            //   cursor: not-allowed;
            //   border: 1px solid #afafaf;
            //   border-radius: 4px;
            //   font-size: 12px;
            //   color: #fff;
            //   background-color: #a9a9a9;
            //   background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);
            // }
          }
        }
        .line {
          padding-top: 10px;
          border-bottom: 1px solid #ccc;
        }
        .footer {
          display: flex;
          white-space: nowrap;
          height: 41px;
          span {
            display: block;
            margin: 20px 5px 0 0;
            width: auto;
            color: #bbb;
            font-size: 14px;
            cursor: default;
            color: #999;
          }
          img {
            display: block;
            height: 15px;
            margin-top: 22px;
          }
        }
      }
    }
  }
}
</style>
