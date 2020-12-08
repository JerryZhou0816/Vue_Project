<template>
  <div class="content">
    <Header></Header>
    <Banner></Banner>
    <HotGoods></HotGoods>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "./Banner";
import HotGoods from "./HotGoods";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  name: "home",
  components: {
    Banner,
    HotGoods,
    Header,
    Footer,
  },
};
</script>

<style lang="less">
.content {
  width: 100%;
  height: 100%;
  background-color: #ededed;
}
</style>
