export default {
  
  setTopMoviesLoading(state){ 
    state.topMoviesLoading=false;
  },

  get_top_movies(state,movies){ 
    state.topMovies = movies;
  },

  add_to_favorite_list_by_index(state,index){ 
    let movie=state.topMovies[index];
    let has=false;
    state.movieCollect.forEach(item=>{
      if(item.id==movie.id ){
        has=true;
        return false;
      }
    })
    if(!has){
      state.movieCollect.push( movie);
    }
  },

  delete_collect_by_id(state,id){ 
    state.movieCollect.forEach((item,index)=>{
      if(item.id==id ){
        state.movieCollect.splice(index,1); 
      }
    })
  }

}
   