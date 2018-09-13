<template>
  <section class="movies-wrap">

    <h2>豆瓣电影排行版</h2>
    <ul class="movies">
      <li v-for="(article,index) in articles" :key="article.id" :index="index">
        {{index+1}}、 {{article.title}} 

        <Button type="primary" size="small" shape="circle" @click="onCollect">收藏</Button>
      </li>
    </ul>
    
  </section>
</template>

<script>

import jsonp from 'jsonp'

export default {
  name: 'DouBanMovies',
  data() {
    return {
    }
  },
  computed : {
    articles(){
      return this.$store.state.topMovies
    }
  },
  mounted() { 
    this.$store.dispatch('getTopMovies');
  },
  methods:  {
    onCollect(event){
      let index=event.currentTarget.parentNode.getAttribute("index")
   
      this.$store.dispatch('addToFavoriteListByIndex',index); 
    }
  }
}
</script>

<style scoped lang="less">
.movies-wrap{
  margin:8px;
  background-color: #fff;
  padding:10px;
  border-radius:6px;
  h2{
    font-weight: bold;
    font-size:18px;
    margin-bottom:8px;
    color:#008cff;
  }
  .movies{
    li{
      border-bottom:1px dashed #ccc;
      padding:8px 0;
      text-align: left;
      list-style:none;
      &:last-of-type{
        border-bottom:none;
      }
    }
  }
}

</style>
