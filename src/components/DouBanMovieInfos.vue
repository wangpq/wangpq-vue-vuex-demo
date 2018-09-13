<template>
  <section class="movies-info">
    共{{topMoviesLength}} 部电影
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DouBanMovieInfos',
  data() {
    return {
    }
  },
  computed : {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'topMoviesLength'
    ])
  }
}
</script>

<style scoped lang="less">
.movies-info{
  margin:10px;
  border-radius:6px;
  padding:8px;
  background-color: #fff;
}
</style>
