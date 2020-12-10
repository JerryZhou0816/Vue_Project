<template>
  <div class="register">
    <div class="registerContainer">
      <div class="Container">
        <h4>注册 XMall 账号</h4>
        <div class="RegisterContent">
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
          <div class="userPassword2">
            <input type="password" v-model="password2" placeholder="确认密码" />
          </div>
          <div class="check">
            <input type="text" v-model="code" placeholder="请输入验证码" />
          </div>
          <div class="pr">
            <input type="checkbox" v-model="isChecked" id="txt" />
            <label for="txt">
              我已阅读并同意遵守
              <a href="javascript:;">法律声明</a>
              和
              <a href="javascript:;">隐私条例</a>
            </label>
          </div>
          <!-- <div class="register">
            <input type="button" @click="register" value="注册" />
          </div> -->
          <!-- 注册按钮 -->
          <el-button
            type="primary"
            style="height: 44px;width:100%;margin-bottom: 15px; font-size:18px"
            @click="register"
          >
            <!-- :disabled="
              !(password && password2 && userName && code && isChecked)
            " -->
            注册</el-button
          >
          <div class="line"></div>
          <div class="footer">
            <span
              >如果您已拥有 XMall 账号，则可以在此
              <a href="javascript:;" @click="toLogin">登录</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      password: "",
      password2: "",
      code: "",
      isChecked: "",
    };
  },
  // 组件路由守卫
  // 在渲染该组件的对应的路由被confirm前调用不能获取该组件实例this
  // 因为当守卫执行前，组件实例还没有被创建
  beforeRouterEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.state.users.usesrInfo.userName) {
        next("/");
      } else {
        next();
      }
    });
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    //注册的回调函数
    async register() {
      let { userName, password, password2, code, isChecked } = this;
      // 判断是账号密码是否为空
      if (!userName || !password || !password2) {
        this.$message.warning("账号密码不能为空");
        return;
      }
      // 确认密码与原密码不一致
      if (password !== password2) {
        this.$message.warning("确认密码与原密码不一致");
        return;
      }
      // 是否填写了验证码
      if (!code.trim()) {
        this.$message.warning("请完成验证");
        return;
      }
      // 是否勾选同意相关注册协议
      if (!isChecked) {
        this.$message.warning("您未同意我们的相关注册协议");
        return;
      }
      // 符合条件后延迟1s跳转到登录界面
      this.$message.success("注册成功，即将跳转到登录页面");
      setTimeout(() => {
        this.$router.replace("/login");
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  background: url(../../../static/images/bg_9b9dcb65ff@2x.png) repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .registerContainer {
    margin-top: 100px;
    .Container {
      width: 500px;
      height: 560px;
      margin: 0 auto;
      border: 1px solid #dadada;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #fff;
      h4 {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        font-weight: 700;
        color: #666;
        text-align: center;
        border-bottom: 1px solid #dcdcdc;
      }
      .RegisterContent {
        width: 100%;
        height: 432px;
        // background-color: hotpink;
        font-size: 14px;
        padding: 50px;
        box-sizing: border-box;
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
        .userPassword2 {
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
            text-indent: 10px;
            font-size: 18px;
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
          a {
            color: #5079d9;
          }
        }
        .register {
          height: 50px;
          margin: 25px 0;
          input {
            width: 100%;
            height: 100%;
            cursor: not-allowed;
            border: 1px solid #afafaf;
            border-radius: 4px;
            font-size: 17px;
            color: #fff;
            background-color: #33448b;
            // background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);

            &:focus {
              outline: none;
            }
          }
        }
        .line {
          padding-top: 10px;
          border-bottom: 1px solid #ccc;
        }
        .footer {
          height: 41px;
          span {
            display: block;
            margin: 20px 5px 0 0;
            width: auto;
            text-align: center;
            font-size: 14px;
            cursor: default;
            color: #999;
            a {
              color: #5079d9;
            }
          }
        }
      }
    }
  }
}
</style>
