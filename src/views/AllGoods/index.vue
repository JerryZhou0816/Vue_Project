<template>
  <div class="Container">
    <!-- 版心 -->
    <div class="AllGoodsContainer">
      <!-- 头部搜索及面包屑结构 -->
      <div class="header">
        <div class="leftList">
          <li class="active">综合排序</li>
          <li>价格从低到高</li>
          <li>价格从高到低</li>
        </div>
        <div class="input">
          <input type="text" placeholder="价格" />
          <span>-</span>
          <input type="text" placeholder="价格" />
          <el-button type="primary" size="mini">确定</el-button>
        </div>
      </div>
      <!-- 全部商品分类样式 -->
      <div class="goods clearfix">
        <div
          class="goodsItem"
          @mouseenter="enterDiv"
          @mouseleave="leaveDiv"
          translate=""
        >
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini">加入购物车</el-button>
          </div>
        </div>

        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
        <div class="goodsItem">
          <a href="javascript:;">
            <img
              src="../../../static/images/1.jpg"
              alt="Smartisan 牛津纺衬衫"
            />
          </a>
          <h5>Smartisan 牛津纺衬衫</h5>
          <h6>一件无拘无束的衬衫</h6>
          <h3 v-if="!isShow">￥199.00</h3>
          <div v-else>
            <el-button size="mini" class="btnDetail">查看详情</el-button>
            <el-button type="primary" size="mini" class="btnCart"
              >加入购物车</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <!--  @size-change="handleSizeChange"
        @current-change="handleCurrentChange" -->
    <el-pagination
      :current-page="1"
      :page-sizes="[10, 20, 50]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="15"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    enterDiv() {
      this.isShow = !this.isShow;
    },
    leaveDiv() {
      this.isShow = !this.isShow;
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

.header span {
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
}
</style>
