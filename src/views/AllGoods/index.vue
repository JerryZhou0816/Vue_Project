<template>
  <div class="Container">
    <!-- 版心 -->
    <div class="AllGoodsContainer">
      <!-- 头部搜索及面包屑结构 -->
      <div class="header">
        <div class="leftList">
          <li :class="{ active: sortType === 1 }" @click="reset()">综合排序</li>
          <li :class="{ active: sortType === 2 }" @click="sortPrice(1)">
            价格从低到高
          </li>
          <li :class="{ active: sortType === 3 }" @click="sortPrice(-1)">
            价格从高到低
          </li>
        </div>
        <div class="input">
          <input type="text" placeholder="价格" v-model="params.priceGt" />
          <span class="span">-</span>
          <input type="text" placeholder="价格" v-model="params.priceLte" />
          <el-button type="primary" size="mini" @click="reset">确定</el-button>
        </div>
      </div>
      <!-- 全部商品分类样式 -->
      <div class="goods clearfix">
        <div
          class="goodsItem"
          @mouseenter="currentIndex = index"
          @mouseleave="leaveDiv"
          v-for="(goods, index) in allGoodsList"
          :key="goods.productId"
        >
          <img
            :src="goods.productImageBig"
            :alt="goods.productName"
            @click="toDetail(goods.productId)"
          />

          <h5>{{ goods.productName }}</h5>
          <h6>{{ goods.subTitle }}</h6>
          <div v-if="currentIndex === index">
            <el-button
              size="mini"
              class="btnDetail"
              @click="toDetail(goods.productId)"
              >查看详情</el-button
            >
            <el-button
              type="primary"
              size="mini"
              @click="addCart(goods.productId)"
              >加入购物车</el-button
            >
          </div>
          <h3 v-else>￥{{ goods.salePrice }}</h3>
        </div>
      </div>
    </div>
    <!-- 分页器 -->

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.page"
      :page-sizes="[8, 12, 16, 20]"
      :page-size="params.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      isShow: false, //控制按钮和价格的隐藏与显示
      allGoodsList: [], //存储全部商品分类的列表
      total: 0, //总条数
      // page: 1, //当前页
      // size: 10, //每页显示条数
      currentIndex: "", //
      // sort: "",
      // priceGt: "",
      // priceLte: "",
      sortType: 1,
      productNum: 1,
      productId: "",
      params: {
        page: 1,
        size: 8,
        sort: "",
        priceGt: "",
        priceLte: "",
      },
    };
  },
  mounted() {
    this.getAllGoodsList(this.params);
  },

  methods: {
    // 移出使按钮隐藏 价格显示
    leaveDiv() {
      this.isShow = !this.isShow;
      this.currentIndex = "";
    },
    // 发送请求获取全部商品分类数据
    async getAllGoodsList(params) {
      if (this.params.priceGt !== "") {
        this.params.priceGt = Math.floor(this.params.priceGt);
      }
      if (this.params.priceLte !== "") {
        this.params.priceLte = Math.floor(this.params.priceLte);
      }
      try {
        const result = await this.$API.reqAllGoodsList(params);
        if (result.code === 200) {
          this.allGoodsList = result.result.data;
          this.total = result.result.total;
        }
      } catch (error) {
        this.$message.error("请求获取全部商品分类列表失败");
      }
    },
    // 页码切换
    handleCurrentChange(page) {
      this.params.page = page;

      this.getAllGoodsList(this.params);
    },
    //每页显示条数切换
    handleSizeChange(size) {
      this.params.size = size;
      this.getAllGoodsList(this.params);
    },
    // 综合排序
    reset() {
      (this.sortType = 1), (this.params.page = 1);
      this.getAllGoodsList(this.params);
    },
    // 根据价格排序
    sortPrice(v) {
      v === 1 ? (this.sortType = 2) : (this.sortType = 3);
      this.params.sort = v;
      this.params.page = 1;
      this.getAllGoodsList(this.params);
    },
    //请求添加购物车
    async addCart(productId) {
      this.productId = productId;
      let productNum = this.productNum;
      let userId = 62;
      const productInfo = {
        productId,
        productNum,
        userId,
      };
      try {
        const result = await this.$API.reqAddShopCart(productInfo);
        if (result.code === 200) {
          this.$message.success("添加购物车成功");
          this.$router.push("/shopcart");
        } else {
          this.$message.error("添加购物车失败");
        }
      } catch (error) {
        this.$message.error("请求添加购物车失败");
      }
    },
    toDetail(productId) {
      this.$router.push({ path: "/detail", query: { productId } });
    },
  },
};
</script>
<style lang="less">
// 头部及面包屑样式
.Container {
  width: 100%;
  height: 20px;
  background-color: #ededed;
  height: 100%;
}
.AllGoodsContainer {
  width: 1220px;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 60px;
}
.leftList {
  height: 60px;
  float: left;
}
.leftList li {
  float: left;
  line-height: 60px;
  margin: 0 15px;
  &.active {
    color: #5683ea;
  }
  &:hover {
    color: #5683ea;
    cursor: pointer;
  }
}
.header .input {
  float: left;
}
.header input {
  height: 28px;
  width: 80px;
  border-radius: 5px;
  margin: 16px 10px;
  display: block;
  float: left;
  text-align: center;
  background-color: #ededed;
  // color: #ccc;
  border: 1px solid #ccc;
  outline: none;
}

.header .span {
  float: left;
  line-height: 60px;
}
.header button {
  height: 30px;
  width: 80px;
  margin: 16px 10px;
}
// 全部商品分类的样式
.goods {
  width: 100%;
  clear: both;
}
.goodsItem {
  height: 430px;
  width: 305px;
  background-color: #fff;
  border-bottom: 2px solid #ddd;
  border-right: 2px solid #ddd;
  display: block;
  float: left;
  box-sizing: border-box;
  position: relative;
  top: 0;
  transition: top 300ms linear;
}
.goodsItem img {
  width: 206px;
  height: 206px;
  margin: 50px auto 10px;
  display: block;
}
.goodsItem h5 {
  text-align: center;
  display: block;
  font-size: 18px;
  font-weight: 400;
}
.goodsItem h6 {
  text-align: center;
  display: block;
  color: #ccc;
  margin: 8px;
  font-weight: 400;
}
.goodsItem h3 {
  text-align: center;
  color: #d44d44;
  display: block;
  margin: 20px;
  font-size: 18px;
}
.goodsItem .btnDetail {
  margin: 10px 15px 0 50px;
}
.goodsItem:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  top: -4px;
  cursor: pointer;
  z-index: 99;
  // right: -1px;
  // border: none;
  // transition: all 500ms ;
}

// 分页器的样式
.el-pagination {
  text-align: right;
  margin-top: 50px;
  margin-right: 180px;
  padding-bottom: 100px;
}
</style>
