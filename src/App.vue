<template>
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
