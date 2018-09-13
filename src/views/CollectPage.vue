<template>
  <div>
    <Header></Header>
    <movie-collect></movie-collect>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MovieCollect from '@/components/MovieCollect'

export default {
  name: 'CollectPage',
  components: {
    Header,
    MovieCollect
  }
}
</script>


