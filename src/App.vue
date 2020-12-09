<template>
  <div class="main">
    
    <Header></Header>
    <checkout></checkout>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from './pages/Checkout/checkout';
export default {
  components: {
    Header,
    Footer,
    Checkout

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
