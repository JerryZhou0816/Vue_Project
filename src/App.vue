<template>
  <div>
    <Header v-show="$route.path !== '/login'"></Header>
    <Footer v-show="$route.path !== '/login'"></Footer>
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
<style></style>
