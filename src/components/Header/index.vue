<template>
  <div class="headerContanier">
    <!-- 头部 -->
    <header>
      <!-- logo图标 -->
      <div class="logo">
        <router-link to="/" title="Xamll商城"></router-link>
      </div>
      <!-- 搜索框，全部商品以及登录 -->
      <div class="rightBox">
        <div>
          <el-input
            v-model="searchInfo"
            placeholder="请输入商品信息"
          ></el-input>
          <i class="el-icon-search search"></i>
        </div>
        <div>
          <router-link to="/allgoods"> 全部商品</router-link>
        </div>
        <div>
          <a v-if="!users" href="javascript:;" @click="toLogin">登录</a>
          <a v-else href="javascript:;">{{ users.data.username }}</a>
        </div>

        <i class="xian"></i>
        <!-- 登录下拉 -->
        <div class="user" v-if="users">
          <el-dropdown trigger="hover" @command="logout">
            <!-- 登录图标 -->
            <a class="el-icon-user-solid" href="javascript:;"></a>
            <!-- 移入显示下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/myorder">我的订单</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/myorder">账号资料</router-link>
              </el-dropdown-item>
              <el-dropdown-item>收货地址</el-dropdown-item>
              <el-dropdown-item>售后服务</el-dropdown-item>
              <el-dropdown-item command="ab">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="login" v-else>
          <a
            class="el-icon-user-solid"
            href="javascript:;"
            style="font-size:22px"
            @click="$router.push('/login')"
          ></a>
        </div>
        <div class="shopcart">
          <el-dropdown trigger="hover">
            <a class="el-icon-shopping-cart-2" href="javascript:;"></a>
            <el-dropdown-menu slot="dropdown" size="medium">
              <el-dropdown-item>
                <span>您的购物车竟然是空的!</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="cart-num">
            <i class="num">0</i>
          </span>
        </div>
      </div>
    </header>
    <!-- 导航栏 -->
    <nav
      class="navContainer"
      id="searchBar"
      v-show="$route.path.indexOf('my') === -1"
    >
      <div class="navSub" :class="searchBarFixed == true ? 'isFixed' : ''">
        <ul class="navList">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/allgoods">全部</router-link>
          </li>
          <li>
            <router-link to="/surrounding">品牌周边</router-link>
          </li>
          <li>
            <a href="javascript:;">坚果手机</a>
          </li>
          <li>
            <a href="javascript:;">TNT</a>
          </li>
          <li>
            <a href="javascript:;">官网自营</a>
          </li>
          <li>
            <a href="javascript:;">服务箱包</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "headerIndex",
  data() {
    return {
      searchInfo: "",
      searchBarFixed: false,
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    handlerScroll() {
      // 获取滚动条高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断滚动条超过元素高度时，切换样式
      let offsetTop = document.querySelector("#searchBar").offsetTop;
      scrollTop > offsetTop
        ? (this.searchBarFixed = true)
        : (this.searchBarFixed = false);
    },
    // 退出登录
    logout(command) {
      if (command === "ab") {
        //从本地缓存中移除用户信息
        localStorage.removeItem("USERINFO_KEY");
        this.$message.success("退出登录成功！");
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        return false;
      }
    },
  },

  // 导航栏固定事件
  mounted() {
    // 监听鼠标滚轮事件
    window.addEventListener("scroll", this.handlerScroll);
    // 从localstorage里获取用户数据
  },
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style lang="less">
.headerContanier {
  width: 100%;
  height: 100%;
  background-color: #000000;
  header {
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      a {
        width: 50px;
        height: 40px;
        background: url(../../../static/images/global-logo-red@2x.png);
        background-size: cover;
        display: block;
        background-position: 0 0;
      }
    }
    .rightBox {
      display: flex;
      align-items: center;
      position: relative;
      .el-input {
        width: 280px;
        height: 32px;
        .el-input__inner {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      a {
        color: #c8c8c8;
        display: block;
        font-size: 14px;
        text-decoration: none;
        padding: 0 15px;
      }
      .xian {
        width: 1px;
        height: 15px;
        background-color: #8a8a8a;
        margin: 0 15px 0 30px;
      }
      .search {
        font-weight: bold;
        position: absolute;
        color: #bfcbd9;
        font-size: 18px;
        top: 8px;
        left: 254px;
      }
      .user {
        a {
          font-size: 22px;
          color: #bfcbd9;
        }
      }
      .shopcart {
        display: flex;
        a {
          font-size: 22px;
          color: #bfcbd9;
        }
        .cart-num {
          width: 17px;
          height: 17px;
          text-align: center;
          line-height: 17px;
          position: absolute;
          top: 7px;
          right: -2px;
          //   购物车数量样式切换
          .num {
            display: block;
            border-radius: 50%;

            background-color: #e74c3c;
            color: #fff;
          }
          .no {
            border-radius: 50%;
            color: #fff;
          }
        }
      }
    }
  }
  .navContainer {
    width: 100%;
    height: 90px;
    line-height: 90px;
    background-color: #fff;
    // 滚动条样式
    .isFixed {
      position: fixed;
      top: 0;
      z-index: 999;
      height: 60px;
      line-height: 60px;
      color: #666;
      border-bottom: 1px solid #d4d4d4;
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
      background-color: #ededed;
    }
    .navSub {
      width: 100%;
      .navList {
        width: 1190px;
        margin: 0 auto;
        display: flex;
        li {
          a {
            padding: 0 20px;
            display: block;
            text-decoration: none;
            font-style: normal;
            font-size: 15px;
            transition: all 0.5s;
            &:hover {
              color: #5079d9;
            }
          }
        }
      }
    }
  }
}
</style>
