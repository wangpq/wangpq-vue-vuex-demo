<template>
  <header class="header">
    <div class="wrap">
      <router-link to="/" slot="left">首页</router-link>
      <router-link to="/collect" slot="left">收藏</router-link>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Header'
}
</script>

<style scoped lang="less">
header{
  overflow:hidden;
  height:44px;
  .wrap{
    position: fixed;
    left:0;
    right:0;
    top:0;
    padding: 0 12px;
    background-color: #fff;
    a{
      font-size:16px;
      color:#666;
      padding:10px 18px;
      display: block;
      float:left;
      font-weight: bold;
    }
    & .router-link-exact-active{
      color:#fff;
      background-color: #2b85e4;
    }
  }
} 
</style>
