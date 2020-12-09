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
  data() {
    return {};
  },
  components: {
    Banner,
    HotGoods,
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getHomeData");
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
