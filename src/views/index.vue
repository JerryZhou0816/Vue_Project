<template>
  <div class="cart">
      <div class="hearderbox">
          <header class="w">
              <div class="w-box">
                  <div class="nav-logo">
                      <h1>
                          <a href="javascript:;" class="router-link-active" title="XMall商城官网">XMall商城</a>
                      </h1>
                  </div>
                  <div class="right-box">
                      <div class="nav-list">
                          <div class="el-complete">
                             <div class="el-input">
                                 <i class="el-input-search"></i>
                                 <el-input v-model="input" placeholder="请输入内容"></el-input>
                             </div>
                             <a href="javascript:;">
                                 <a>全部商品</a>
                             </a>
                              <a href="javascript:;">
                                 <a>捐赠</a>
                             </a>
                          </div>
                      </div>
                      <div class="nav-aside">
                          <div class="user">
                             <a href="javascript:;"></a>
                          </div>
                          <div class="shop">
                             <a href="javascript:;"></a>
                          </div>

                      </div> 
                  </div>
              </div>
          </header>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
   data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang='less' scoped>
    // .hearderbox{
    //     background: #1a1a1a;
    //     width: 1200px;
    //     height:100px;
    //     z-index: 30;
    // }
</style>
