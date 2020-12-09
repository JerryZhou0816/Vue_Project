<template>
  <div>
<<<<<<< HEAD
    <Header v-show="$route.path !== '/login'"></Header>
    <router-view></router-view>
    <Footer v-show="$route.path !== '/login'"></Footer>
=======
    <ShopCart></ShopCart>
>>>>>>> fa40f04b8243a4579395650934baaf4c74dcf756
  </div>
</template>
<script>
<<<<<<< HEAD
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
=======
import ShopCart from './views/ShopCart'
export default {
  name: 'App',
  components:{
    ShopCart
  }
}
>>>>>>> fa40f04b8243a4579395650934baaf4c74dcf756
</script>
<style>
</style>
