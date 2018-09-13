//import axios from 'axios'
import jsonp from 'jsonp'

//action 异步的操作
export default {
  
  getTopMovies({commit}){
    jsonp('https://api.douban.com/v2/movie/top250?count=10', null, (err, data) => {
      if(err) {
        console.error(err.message);
      }else{ 
        if(data && data.subjects.length > 0) {
          commit('get_top_movies',data.subjects);
          commit('setTopMoviesLoading');
        }
      }
    })
  },

  // 添加数据到挂单列表
  addToFavoriteListByIndex({commit},index){
    commit('add_to_favorite_list_by_index',index)
  },

  deleteCollectById({commit},id){ 
    commit('delete_collect_by_id',id)
  }

}
