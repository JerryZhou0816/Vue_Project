<template>
  <div class="hotContainer">
    <!-- 热门商品 -->
    <div class="hotContent">
      <div class="hotTitle">
        <h4>热门商品</h4>
      </div>
      <div class="hotGoods" v-for="(hot, index) in hotList" :key="hot.id">
        <div
          class="hotItem"
          v-for="(hotItem, index) in hot.panelContents"
          :key="hotItem.id"
          @click="toDetail(hotItem.productId)"
        >
          <div class="good-img">
            <a href="javascript:;">
              <img :src="hotItem.picUrl" alt="" />
            </a>
          </div>
          <h3>{{ hotItem.productName }}</h3>
          <h6>{{ hotItem.subTitle }}</h6>
          <div class="price">
            <p>
              <span>¥{{ hotItem.salePrice }}.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 官网推荐 -->
    <div class="handpickContent" v-for="(rec, index) in recommend" :key="index">
      <div class="hotTitle">
        <h4>{{ rec.name }}</h4>
      </div>
      <div class="handpickContainer">
        <div
          class="handpickFirst"
          @click="toDetail(rec.panelContents[0].productId)"
        >
          <a href="javascript:;" class="cover-link"> </a>
          <img :src="rec.panelContents[0].picUrl" alt="" />
        </div>
        <div
          v-if="recItem.sortOrder !== 0"
          class="handpickItem"
          v-for="(recItem, index) in rec.panelContents"
          :key="recItem.id"
          @click="toDetail(recItem.productId)"
        >
          <div class="good-img">
            <a href="javascript:;">
              <img :src="recItem.picUrl" alt="" />
            </a>
          </div>
          <h3>{{ recItem.productName }}</h3>
          <h6>{{ recItem.subTitle }}</h6>
          <div class="price">
            <div></div>
            <p>
              <span>¥{{ recItem.salePrice }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部推荐 -->
    <div class="recommendContainer">
      <ul class="recommendList">
        <li>
          <a href="javascript:;">
            <img src="./images/hot1.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/hot2.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/hot3.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/hot4.jpg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "hot",
  computed: {
    ...mapState({
      hotList: (state) =>
        state.home.indexData.filter((item) => item.type === 2),
      recommend: (state) =>
        state.home.indexData.filter((item) => item.type === 3),
    }),
  },
  methods: {
    toDetail(productId) {
      this.$router.push({ path: "/detail", query: { productId } });
    },
  },
};
</script>

<style lang="less">
.hotContainer {
  width: 1190px;
  height: 100%;
  margin: 0 auto;

  // 热门推荐
  .hotContent {
    margin-top: 30px;
    border-radius: 10px;
    overflow: hidden;
    .hotTitle {
      padding-left: 30px;
      padding: 0 10px 0 24px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #d4d4d4;
      background: linear-gradient(#fbfbfb, #ececec);
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
      color: #333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      h4 {
        font-size: 18px;
        font-weight: 400;
        color: #626262;
      }
    }
    .hotGoods {
      height: 430px;
      text-align: center;
      display: flex;
      background-color: #fff;
      .hotItem {
        width: 50%;
        height: 100%;
        position: relative;
        transition: all 0.5s;
        &:hover {
          transform: translateY(-2px);
          box-shadow: 1px 1px 20px #999;
          z-index: 3;
        }
        h3 {
          font-size: 16px;
          padding: 10px 0;
          color: #424242;
        }
        h6 {
          color: #d0d0d0;
          padding: 10px;
        }
        .price {
          span {
            color: #c0392b;
            font-size: 18px;
            font-weight: bold;
          }
        }

        .good-img {
          img {
            width: 206px;
            height: 206px;
            display: block;
            margin: 50px auto 10px;
          }
        }
      }
    }
  }
  //   官方推荐样式
  .handpickContent {
    width: 1190px;
    margin: 20px auto 0;
    border-radius: 10px;
    overflow: hidden;
    .hotTitle {
      width: 100%;
      padding-left: 30px;
      padding: 0 10px 0 24px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #d4d4d4;
      background: linear-gradient(#fbfbfb, #ececec);
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
      color: #333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      h4 {
        font-size: 18px;
        font-weight: 400;
        color: #626262;
      }
    }
    .handpickContainer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-color: #fff;

      .handpickFirst {
        width: 50%;
        height: 430px;
        position: relative;

        &:hover {
          box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
          transition: all 0.5s ease;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
      .handpickItem {
        width: 25%;
        height: 430px;
        background: #fff;
        text-align: center;
        transition: all 0.5s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 1px 1px 20px #999;
        }
        h6 {
          color: #d0d0d0;
          padding: 10px;
        }

        .price span {
          color: #c0392b;
          font-size: 18px;
          font-weight: bold;
        }
        .good-img {
          img {
            width: 206px;
            height: 206px;
            display: block;
            margin: 50px auto 10px;
          }
        }
      }
    }
  }
  .recommendContainer {
    width: 100%;
    height: 200px;
    padding-bottom: 70px;
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
          img {
            width: 100%;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
