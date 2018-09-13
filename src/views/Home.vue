<template>
  <div class="home">
    <Header></Header>
    <img src="../assets/images/logo.png">
    <h1>{{ msg }}</h1>
    <DouBanMovies></DouBanMovies>
    <DouBanMovieInfos></DouBanMovieInfos>

  </div>
</template>

<script>
import Header from '@/components/Header'
import DouBanMovies from '@/components/DouBanMovies'
import DouBanMovieInfos from '@/components/DouBanMovieInfos'

export default {
  name: 'Home',
  components: {
    Header,
    DouBanMovies,
    DouBanMovieInfos
  },
  data () {
    return {
      msg: 'Welcome to home page'
    }
  }
}
</script>


<style scoped lang="less">
.home{
  img{
    height:88px;
  }
}
</style>
