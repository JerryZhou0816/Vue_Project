<template>
  <div class="banner">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/b1.webp" />
        </div>
        <div class="swiper-slide">
          <img src="./images/b2.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/b3.webp" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    </div>
    <!-- 推荐列表 -->
    <div class="recommendContainer">
      <ul class="recommendList" v-if="banner[0]">
        <li
          v-for="(item, index) in banner[0].panelContents"
          :key="item.id"
          @click="toDetail(item.productId)"
        >
          <a href="javascript:;">
            <img :src="item.picUrl" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  name: "banner",
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
  computed: {
    ...mapGetters(["banner"]),
  },
  methods: {
    toDetail(productId) {
      this.$router.push({ path: "/detail", query: { productId } });
    },
  },
};
</script>

<style lang="less">
.banner {
  width: 1190px;
  margin: 0 auto;

  .recommendContainer {
    width: 100%;
    height: 200px;

    .recommendList {
      height: 100%;
      margin-top: 15px;
      border-radius: 10px;
      display: flex;
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, 0.1);
      li {
        width: 25%;
        height: 100%;
        position: relative;

        & + li {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          box-sizing: border-box;
          transition: all 0.5s;
          &:hover {
            border: 1px solid rgba(0, 0, 0, 0.1);
            transition: all 0.5s;
          }
          img {
            width: 100%;
            height: 200px;
          }
        }
      }
    }
  }
}
.swiper-slide {
  margin-top: 20px;
  border-radius: 10px;
  img {
    overflow: hidden;
    border-radius: 10px;
    width: 1190px;
    height: 550px;
  }
}
</style>
