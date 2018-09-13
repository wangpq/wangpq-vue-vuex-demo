<template>
  <header class="header">

  
      <router-link to="/" slot="left">首页</router-link>

      <router-link to="/favorites" slot="left">收藏</router-link>

 

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
  background-color: #fff;
  overflow:hidden;
  padding: 0 12px;
  a{
    font-size:16px;
    color:#666;
    padding:10px 14px;
    display: block;
    float:left;
    font-weight: bold;
  }
  & .router-link-exact-active{
    color:#41B883;
    background-color: #D8FCED;
  }
} 
</style>
