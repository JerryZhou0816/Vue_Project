<template>
<<<<<<< HEAD
  <div class="main">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
.main {
  width: 100%;
  height: 3000px;
  overflow: hidden;
  min-height: calc(100vh - 454px);
  background: #ededed;
}
</style>
=======
  <div id="app">
    <router-link to="/login">点击我</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped></style>
>>>>>>> 登录页
