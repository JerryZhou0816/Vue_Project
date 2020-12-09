<template>
  <div>
<<<<<<< HEAD
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
          <a href="javascript:;" @click="toLogin">登录</a>

          <i class="xian"></i>
          <!-- 登录下拉 -->
          <div class="user">
            <el-dropdown trigger="hover">
              <!-- 登录图标 -->
              <a class="el-icon-user-solid" href="##"></a>
              <!-- 移入显示下拉菜单 -->
              <el-dropdown-menu slot="dropdown">
                <router-link to="/myorder">我的订单</router-link>
                <el-dropdown-item>账号资料</el-dropdown-item>
                <el-dropdown-item>收货地址</el-dropdown-item>
                <el-dropdown-item>售后服务</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="shopcart">
            <el-dropdown trigger="hover">
              <a class="el-icon-shopping-cart-2" href="##"></a>
              <el-dropdown-menu slot="dropdown" size="medium">
                <el-dropdown-item>
                  <span>您的购物车竟然是空的!</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="cart-num">
              <i class="num">1</i>
            </span>
          </div>
        </div>
      </header>
      <!-- 导航栏 -->
      <nav class="navContainer">
        <div class="navSub">
          <ul class="navList">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/allgoods">全部</router-link>
            </li>
            <li>
              <a href="##">品牌周边</a>
            </li>
            <li>
              <a href="##">坚果手机</a>
            </li>
            <li>
              <a href="##">TNT</a>
            </li>
            <li>
              <a href="##">官网自营</a>
            </li>
            <li>
              <a href="##">服务箱包</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view></router-view>
=======
>>>>>>> fa40f04b8243a4579395650934baaf4c74dcf756
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "headerIndex",
  data() {
    return {
      searchInfo: "",
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
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
    height: 90px;
    line-height: 90px;
    background-color: #fff;
    .navSub {
      width: 1220px;
      margin: 0 auto;
      .navList {
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
=======
  name: "Header",
  data() {
    return {
      
    }
  }
};
</script>

<style>
>>>>>>> fa40f04b8243a4579395650934baaf4c74dcf756
</style>
