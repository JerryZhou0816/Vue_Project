<template>
  <div class="register">
    <div class="registerContainer">
      <div class="Container">
        <h4>注册 XMall 账号</h4>
        <div class="RegisterContent">
          <div class="userName">
            <input
              type="text"
              placeholder="账号"
              v-model="registered.userName"
            />
          </div>
          <div class="userPassword">
            <input
              type="password"
              placeholder="密码"
              v-model="registered.userPwd"
            />
          </div>
          <div class="userPassword2">
            <input type="password" placeholder="密码" />
          </div>
          <div class="check">
            <input type="text" />
          </div>
          <div class="pr">
            <input type="checkbox" id="txt" />
            <label for="txt">
              我已阅读并同意遵守
              <a href="javascript:;">法律声明</a>
              和
              <a href="javascript:;">隐私条例</a>
            </label>
          </div>
          <div class="register">
            <input type="button" value="注册" @click="toRegister" />
          </div>
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
      registered: {
        userName: "",
        userPwd: "",
      },
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      // let { userName, userPwd } = this;
      // let obj = {
      //   userName,
      //   userPwd,
      // };
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  background: url(../../../static/images/bg_9b9dcb65ff@2x.png) repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
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
            // cursor: not-allowed;
            border: 1px solid #afafaf;
            border-radius: 4px;
            font-size: 18px;
            color: #fff;
            background-color: #a9a9a9;
            background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);

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
          height: 41px;
          span {
            display: block;
            margin: 20px 5px 0 0;
            width: auto;
            text-align: center;
            color: #bbb;
            font-size: 14px;
            // cursor: default;
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
