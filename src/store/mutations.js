export default {
  /**
   * 清空商品数组
   * @param {Object} state 
   * @param {Object or Array} product 要清空的商品数组
   */
  empty_product_list(state){ 
    state.productList = [];
  },
  /**
   * 删除单个或多个指定商品
   * @param {Object} state 
   * @param {Object or Array} product 要删除的商品
   */
  delete_product_list(state,product){ 
    if(product.constructor==Array){
      product.forEach((item,index)=>{ 
        state.productList.forEach((n,i)=>{ 
          if(n.productNo == item.productNo){
            state.productList.splice(i,1)
          }   
        })
      })
    }else{
      state.productList.forEach((n,i)=>{
        if(n.productNo== product.productNo){
          state.productList.splice(i,1)
        }
      })
    }
  },
  /**
   * 删除单个指定prdId的商品
   * @param {Object} state 
   * @param {String} productId 要删除的商品Id
   */
  delete_product_list_by_id(state,productId){ 
    state.productList.forEach((item,index)=>{
      if(item.id== productId){
        state.productList.splice(index,1)
      }
    })
  },
  /**
   * 修改指定商品数量
   * @param {Object} state 
   * @param {Object} product 商品要修改的购买数量
   */ 
  modify_product_list_sales_amount(state,product){  
    let index=state.productList.findIndex(x => x.productNo == product.productNo);
    let currentPrdItem=state.productList[index];
    currentPrdItem.saleNumber=product.saleNumber;
    currentPrdItem.payPrice=((currentPrdItem.salePrice-currentPrdItem.discountPrice )*product.saleNumber).toFixed(1);
    currentPrdItem.totalDiscount=(currentPrdItem.discountPrice*product.saleNumber).toFixed(1);
  },

  get_top_movies(state,movies){ 
    state.topMovies = movies;
  },


  add_to_favorite_list_by_index(state,index){ 
    let movie=state.topMovies[index];
    let has=false;
    state.movieCollect.forEach((item,index)=>{
      if(item.id==movie.id ){
        has=true;
        return false;
      }
    })
    if(!has){
      state.movieCollect.push( movie);
    }
  },



}
   



