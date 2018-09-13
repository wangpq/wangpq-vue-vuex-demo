<template>
  <div>
    <Header></Header>
    <MovieCollect></MovieCollect>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import MovieCollect from '@/components/MovieCollect'

export default {
  name: 'HelloWorld',
  components: {
    Header,
    MovieCollect
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">


</style>

