<template>
  <div class="home">
    <Header></Header>
    <img src="../assets/images/logo.png">
    <DouBanMovies></DouBanMovies>
    <DouBanMovieInfos></DouBanMovieInfos>
    <movie-collect></movie-collect>
  </div>
</template>

<script>
import Header from '@/components/Header'
import DouBanMovies from '@/components/DouBanMovies'
import DouBanMovieInfos from '@/components/DouBanMovieInfos'
import MovieCollect from '@/components/MovieCollect'

export default {
  name: 'Home',
  components: {
    Header,
    DouBanMovies,
    DouBanMovieInfos,
    MovieCollect
  }
}
</script>

<style scoped lang="less">
.home{
  img{
    height:108px;
    margin:18px auto 10px;
  }
}
</style>
