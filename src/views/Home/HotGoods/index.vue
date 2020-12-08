<template>
  <div class="hotContainer">
    <!-- 热门商品 -->
    <div class="hotContent">
      <div class="hotTitle">
        <h4>热门商品</h4>
      </div>
      <div class="hotGoods">
        <div class="hotItem">
          <div class="good-img">
            <a href="##">
              <img src="./images/item1.png" alt="" />
            </a>
          </div>
          <h3>支付测试商品 IPhone X 全面屏 全面绽放</h3>
          <h6>此仅为支付测试商品 拍下不会发货</h6>
          <div class="price">
            <div></div>
            <p>
              <span>¥1.00</span>
            </p>
          </div>
        </div>
        <div class="hotItem">
          <div class="good-img">
            <a href="##">
              <img src="./images/item2.png" alt="" />
            </a>
          </div>
          <h3>支付测试商品 IPhone X 全面屏 全面绽放</h3>
          <h6>此仅为支付测试商品 拍下不会发货</h6>
          <div class="price">
            <div></div>
            <p>
              <span>¥1.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 官网推荐 -->
    <div class="handpickContent">
      <div class="hotTitle">
        <h4>官方精选</h4>
      </div>
      <div class="handpickContainer">
        <div class="handpickFirst">
          <img src="./images/item3.jpg" alt="" />
        </div>
        <div class="handpickItem">
          <div class="good-img">
            <a href="##">
              <img src="./images/item4.jpg" alt="" />
            </a>
          </div>
          <h3>支付测试商品 IPhone X 全面屏 全面绽放</h3>
          <h6>此仅为支付测试商品 拍下不会发货</h6>
          <div class="price">
            <div></div>
            <p>
              <span>¥1.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hot",
};
</script>

<style lang="less">
.hotContainer {
  width: 1190px;
  height: 1000px;
  margin: 0 auto;
  .hotContent {
    margin-top: 30px;
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
        h3 {
          font-size: 16px;
          padding: 10px 0;
          color: #424242;
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
  //   官方推荐样式
  .handpickContent {
    width: 1190px;
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    .handpickFirst {
      width: 50%;
      height: 430px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .handpickItem {
      width: 25%;
      .good-img {
        img {
          width: 206px;
          height: 206px;
          display: block;
        }
      }
    }
  }
}
</style>
