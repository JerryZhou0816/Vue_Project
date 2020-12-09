<template>
  <div class="login">
    <div class="LoginContainer">
      <div class="title">
        <h4>使用XMall 账号 登录官网</h4>
      </div>
      <div class="content">
        <div class="userName">
          <input type="text" placeholder="账号" />
        </div>
        <div class="userPassword">
          <input type="password" placeholder="密码" />
        </div>
        <div class="check">
          <input type="text" />
        </div>
        <div class="pr">
          <input type="checkbox" id="txt" />
          <label for="txt">记住密码 </label>
          <div>
            <a href="javascript:;" class="regiter">注册 XMall账号</a>
            <a href="javascript:;" class="forget">忘记密码？</a>
          </div>
        </div>
        <div class="login">
          <input type="button" value="登录" />
        </div>
        <div class="return">
          <input type="button" value="返回" />
        </div>
        <div class="line"></div>
        <div class="footer">
          <span>其他账号登录：</span>
          <img src="../../../static/images/other-login.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less">
.login {
  background: url(../../../static/images/bg_9b9dcb65ff@2x.png) repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  .LoginContainer {
    width: 400px;
    height: 674px;
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
      // background-image: url(/static/images/smartisan_4ada7fecea.png);
      // background-size: 130px;
      // background-position: top center;
      // background-repeat: no-repeatstatic\images\smartisan_4ada7fecea.png;

      background: url(../../../static/images/smartisan_4ada7fecea.png) no-repeat
        bottom;
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
      height: 432px;
      // background-color: hotpink;
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
      .return {
        height: 48px;
        line-height: 48px;
        border-radius: 5px;
        background-color: #f9f9f9;
        border: 1px solid #e1e1e1;
        margin-top: 10px;
        margin-bottom: 15px;
        width: 100%;
        font-size: 18px;
        color: #646464;
        input {
          width: 100%;
          height: 100%;
          border: 0;
          color: #646464;
          background-color: #f9f9f9;

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
</style>
