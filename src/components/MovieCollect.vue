<template>
  <div class="movies-wrap">

    <h2>收藏电影</h2>
    <ul class="movies">
      <li v-for="(article,index) in articles" :key="article.id" :id="article.id">
        <span>{{index+1}}、 {{article.title}} </span>
        <Button type="warning" size="small" shape="circle" @click="onCollectDelete">删除</Button>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'MovieCollect',
  data() {
    return {
    }
  },
  computed : {
    articles(){
      return this.$store.state.movieCollect
    }
  },
  methods :{
    onCollectDelete(event){
      let id=event.currentTarget.parentNode.getAttribute("id")
      this.$store.dispatch('deleteCollectById',id); 
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
    font-size:20px;
    margin-bottom:8px;
    color:#008cff;
    text-align: left;
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
