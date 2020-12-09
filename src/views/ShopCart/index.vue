<template>
  <div class="cart">
      <div class="header"></div>
    <div class="main">
    <div class="store-content page-cart">
          <div class="gray-box">
              <div class="title">
                  <h2>购物清单</h2>
              </div>
              <div class="ui-cart">
                  <div class="cart-table-title">
                      <span class="name">商品信息</span>
                      <span class="operation">操作</span>
                      <span class="subtotal">小计</span>
                      <span class="num">数量</span>
                      <span class="price1">单价</span>
                  </div>
                  <div class="cart-table">
                      <div class="cart-group pr">
                          <div class="cart-top-items">
                              <div class="cart-items clearfix">
                                <!-- 选中按钮 -->
                                <div class="items-choose blue-checkbox-new checkbox-on">
                                   <div class="check-box">
                                     <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt="">
                                   </div>
                                </div>
                                <!-- 商品图片 -->
                                <div class="items-thumb f1">
                                    <img src="../../../static/images/dog.jpg">
                                </div>
                                <!-- 商品名字 -->
                                <div class=" name1 hide-row f1">
                                    <div class="name-table">
                                        <a href="javascript:;">Smartisan 明信片</a>
                                    </div>
                                </div>
                                <!-- 操作 X -->
                                <div class="operation">
                                    <a href="javascript:;" class="items-delete-btn">
                                    </a>
                                </div>
                                <!-- 价格 -->
                                <div class="price1">
                                    ¥ 9.9
                                </div>
                                <!-- 数量 -->
                                <div class="amount-box">
                                    <div class="select-box">
                                        <span class="down">-</span>
                                        <span class="num">5</span>
                                        <span class="up">+</span>
                                    </div>
                                </div>
                                <!-- 小计 -->
                                <div class="subtotal">
                                    ¥ 49.5
                                </div>
                              </div>
                          </div>
                          <div class="cart-top-items">
                             <div class="cart-items clearfix">
                                <div class="items-choose blue-checkbox-new checkbox-on">
                                   <div class="check-box">
                                     <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt="">
                                   </div>
                                </div>
                                <div class="items-thumb f1">
                                    <img src="../../../static/images/dog.jpg">
                                </div>
                                <div class=" name1 hide-row f1">
                                    <div class="name-table">
                                        <a href="javascript:;">Smartisan 明信片</a>
                                    </div>
                                </div>
                                <div class="operation">
                                    <a href="javascript:;" class="items-delete-btn">
                                    </a>
                                </div>
                                <div class="price1">
                                    ¥ 9.9
                                </div>
                                <div class="amount-box">
                                    <div class="select-box">
                                        <span class="down">-</span>
                                        <span class="num">5</span>
                                        <span class="up">+</span>
                                    </div>
                                </div>
                                <div class="subtotal">
                                    ¥ 49.5
                                </div>
                             </div>
                          </div>
                          <div class="cart-top-items">
                             <div class="cart-items clearfix">
                                <div class="items-choose blue-checkbox-new checkbox-on">
                                   <div class="check-box">
                                     <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt="">
                                   </div>
                                </div>
                                <div class="items-thumb f1">
                                    <img src="../../../static/images/dog.jpg">
                                </div>
                                <div class=" name1 hide-row f1">
                                    <div class="name-table">
                                        <a href="javascript:;">Smartisan 明信片</a>
                                    </div>
                                </div>
                                <div class="operation">
                                    <a href="javascript:;" class="items-delete-btn">
                                    </a>
                                </div>
                                <div class="price1">
                                    ¥ 9.9
                                </div>
                                <div class="amount-box">
                                    <div class="select-box">
                                        <span class="down">-</span>
                                        <span class="num">5</span>
                                        <span class="up">+</span>
                                    </div>
                                </div>
                                <div class="subtotal">
                                    ¥ 49.5
                                </div>
                             </div>
                          </div>
                      </div>
                  </div>
                  <div class="cart-bottom-bg fix-bottom">
                      <div class="fix-bottom-inner">
                          <div class="cart-bar-operation">
                              <div class="choose-all">
                                  <!-- <span class="blue-checkbox-new"></span> -->
                                   <!-- <div class="items-choose blue-checkbox-new checkbox-on"> -->
                                   <div class="check-box blue-checkbox-new">
                                     <img src="../../../static/images/checkbox-new_631a56a4f6.png" alt="">
                                  </div>
                                <!-- </div> -->
                                  <span class="choose-all">全选</span>
                                   
                              </div>
                              <div class="delete-choose-goods">删除选中的商品</div>
                          </div>
                          <div class="shipping">
                              <div class="shipping-box">
                                  <div class="shipping-total shipping-num">
                                      <h4 class="highlight">
                                        已选择<i>6</i>件商品
                                      </h4>
                                      <h5>共计<i>6</i>件商品</h5>
                                  </div>
                                  <div class="shipping-total shipping-num">
                                      <h4 class="highlight">
                                          应付总额:
                                          <span>￥</span>
                                          <i>128.5</i>
                                      </h4>
                                      <h5>应付总额不含运费</h5>
                                  </div>
                              </div>
                              <input type="button" value="现在结算" readonly="readonly" class="big-main-btn main-btn"
                              style="margin: 0px; width: 130px; height: 50px; line-height: 50px; font-size: 16px;"
                              >
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
   data() {
    return {
      input: '',
    }
   }
}
</script>
<style lang='less' scoped>
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    body {
    font-family: PingFang SC,Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,\\5FAE\8F6F\96C5\9ED1,STHeiti,\\534E\6587\7EC6\9ED1,sans-serif;
    color: #666;
    font-size: 14px;
    }
    .header{
        width: 100%;
        // height: 100px;
    }
   .store-content{
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
    }
    .page-cart{
       padding-top:40px;
      
    }
    .main{
         background-color: #ededed;
         width: 100%;
    }
    // background-color: aquamarine;
    .store-content .gray-box {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background-color:#fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    }
    .store-content .gray-box .title{
    padding-left: 30px;
    position: relative;
    z-index: 10;
    height: 60px;
    padding: 0 10px 0 24px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    background: #f3f3f3;
    line-height: 60px;
    font-size: 18px;
    color: #333;
    }
    h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400;
    }
    .store-content .ui-cart .cart-table-title{
    position: relative;
    z-index: 1;
    line-height: 38px;
    height: 38px;
    padding: 0 0 0 30px;
    font-size: 12px;
    background: #eee;
    border-bottom: 1px solid #dbdbdb;
    border-bottom-color: rgba(0,0,0,.08);
    }  
    .store-content .ui-cart .cart-table-title .name{
    float: left;
    text-align: left;
    } 
    .store-content .ui-cart .cart-table-title span{
    width: 137px;
    float: right;
    text-align: center;
    color: #838383;
    }
.store-content .ui-cart .name{
    width: 380px;
    margin-left: 20px;
    color: #323232;
    display: table;
    }
    .clearfix:after {
    content: "";
    display: block;
    clear: both;
    line-height: 0;
    visibility: hidden;
    }
    .pr{
    position: relative;
    }
    .store-content .ui-cart .cart-group .cart-items{
    border-top: none;
    }
    .store-content .ui-cart .cart-items {
    position: relative;
    height: 140px; 
    margin-left: 74px;
    // text-align: center;
    }
    .store-content .items-choose{
    position: absolute;
    left: -74px;
    top: -30px;
    width: 74px;
    height: 20px;
    padding: 60px 0 0 31px;
    font-size: 12px;
    color: #999;
    }
    .store-content  .items-thumb{
    position: relative;
    margin-top: 30px;
    overflow: hidden;
    width: 80px;
    height: 80px;
    }
    .items-thumb img{
        width: 80px;
        height: 80px;
    }
    .fl {
    float: left;
    }
    .store-content .ui-cart .name{
    width: 380px;
    margin-left: 20px;
    color: #323232;
    display: table;
    }
    .check-box{
        width:20px;
        height:20px;
        position: relative;
        overflow: hidden;
    }
    .blue-checkbox-new {
    background: no-repeat 0 -20px;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    // -moz-user-select: none;
    // -webkit-user-select: none;
    // -ms-user-select: none;
    // user-select: none;
    vertical-align: middle;
    }
    .store-content .items-thumb{
    position: relative;
    margin-top: 30px;
    overflow: hidden;
    width: 80px;
    height: 80px;
    background-color: red;
    }
    .store-content .ui-cart .name-table{
    display: table-cell;
    vertical-align: middle;
    height: 140px;
    }
    .store-content .ui-cart .name1{
    width: 380px;
    margin-left: 100px;
    color: #323232;
    display: table;
    position: absolute;
    top:-30px;
    left:0;
    }
    .store-content .ui-cart .name-table{
    display: table-cell;
    vertical-align: middle;
    height: 140px;
    }
    .store-content  .name1 a{
    color: #333;
    font-size: 16px;
    }
    a {
    font-style: normal;
    text-decoration: none;
    color: #5079d9;
    cursor: pointer;
    transition: all .15s ease-out;
    }
    .operation{
      width: 17px;
      height: 17px;
      border-radius: 50%;
    }
 .store-content  .cart-items .items-delete-btn{
    display: inline-block;
    width: 17px;
    height: 17px;
    margin: 0 auto;
    color: #c2c2c2;
    background-image: url('../../../static/images/delete-btn-icon_a35bf2437e@2x.jpg');
    background-size: 100% auto;
    transition: none;
    position: absolute;
    top: 28px;
    right: 60px;
    }
    .operation .items-delete-btn:hover{
    background-position: 0 17px;
    overflow: hidden;
    }
    .store-content .ui-cart .cart-items .price1,
     .store-content .ui-cart .cart-items .subtotal{
    overflow: hidden;
    float: right;
    width: 137px;
    text-align: center;
    color: #666;
    line-height: 140px;
    font-size: 14px;
    }
    .cart-items .price1{
    position: absolute;    
    top: -30px;
    right: 411px;
    }
     .cart-items .subtotal{
    position: absolute;
    top: -29px;
    right: 137px;
     }
    .amount-box{
      width: 137px;
      height: 140px;
      position: absolute;
      top: 24px;
      right: 257px;
      font-size:14px;
    }
    .select-box{
        height: 140px;  
    } 
    .select-box .down,.select-box .up{
    background: url(../../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;
    overflow: hidden;
    float: left;
    width: 34px;
    height: 37px;
    background-size: 100% auto;
    line-height: 40px;
    text-indent: -9999em;
    cursor: pointer;
    background-position: 0 -60px;
    }
    .select-box .up{
        background-position: 0 0px; 
    }
    .select-box .num{
    position: relative;
    overflow: hidden;
    float: left;
    width: 36px;
    height: 18px;
    margin: 7px 0 0;
    border: none;
    border-radius: 3px;
    line-height: 18px;
    text-align: center;
    font-size: 14px;
    }
   
   .fix-bottom{
    height: 90px;
    width: 100%;
    // position: absolute;
    bottom: 0;
    z-index: 1;
    background-position: 50%;
    background: #fdfdfd;
    background: linear-gradient(#fdfdfd,#f9f9f9);
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 -3px 8px rgba(0,0,0,.04);
    }
    .cart-bar-operation {
    float: left;
    padding: 35px 26px;
    font-size: 12px;
    }
    .shipping {
    float: right;
    padding: 20px 30px;
    }
 .shipping-box {
    display: inline-block;
    padding-top: 1px;
    margin-right: 10px;
    }
     .choose-all,  .delete-choose-goods, .page-cart .selected-count{
    float: left;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    position: relative;
    }
    .blue-checkbox-new{
    float: left;
    margin-right: 9px;
    }
     .delete-choose-goods {
    position: relative;
    margin-left: 21px;
    color: #bbb;
    }
    .shipping-box {
    display: inline-block;
    padding-top: 1px;
    margin-right: 10px;
    }
     .shipping-total:first-child {
    border: none;
    }
    .shipping-total.shipping-num {
    text-align: right;
    }
    .shipping-total{
    display: inline-block;
    border-left: 1px solid #e1e1e1;
    padding: 0 20px;
    }
    .shipping-total h4{
    color: #323232;
    }

    h4 {
    display: block;
    // margin-block-start: 1.33em;
    // margin-block-end: 1.33em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    font-weight: bold;
    font-size: 14px;
    font-family: PingFang SC,Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,
    \\5FAE\8F6F\96C5\9ED1,STHeiti,\\534E\6587\7EC6\9ED1,sans-serif;
    }
     h4{
    font-weight: 400;
    }
    .page-cart .shipping-total.shipping-num i{
    width: 28px;
    display: inline-block;
    text-align: center;
    }
    h4 i,  .shipping-total h4 span {
    color: #d44d44;
    }
    .shipping-total h4>i {
    font-size: 18px;
    font-weight: 700;
    }
    i {
    font-style: normal;
    }
    .shipping-total h5{
    color: #959595;
    font-size: 14px;
    font-weight: bold;
    font-weight: 400;
    }
    .shipping-total.shipping-num i{
    width: 28px;
    display: inline-block;
    text-align: center;
    }
    .shipping-total h5>i {
    font-size: 16px;
    font-weight: 700;
    }
    i{
    font-style: normal;
    }
     .big-main-btn {
    float: right;
    height: 48px;
    }
    .main-btn{
    border: 1px solid #5c81e3;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #678ee7;
    background-image: linear-gradient(180deg,#678ee7,#5078df);
    }





   
  


    

    



    
    
</style>
