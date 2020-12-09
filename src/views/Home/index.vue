<template>
  <div class="content">
    <Banner></Banner>
    <HotGoods></HotGoods>
  </div>
</template>

<script>
import Banner from "./Banner";
import HotGoods from "./HotGoods";

export default {
  name: "home",
  components: {
    Banner,
    HotGoods,
  },
  mounted() {
    // this.getGoods();
  },
  methods: {
    getGoods() {
      this.$API.reqAllGoodsList();
    },
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
