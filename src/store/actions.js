import axios from 'axios'
import jsonp from 'jsonp'

//action 异步的操作
export default {
  // 清空商品数组
  emptyProductList({commit}){
    commit('empty_product_list')
  },
  // 删除单个或多个指定商品
  deleteProductList({commit},product){
    commit('delete_product_list',product)
  },
  // 删除单个指定商品id的商品
  deleteProductListById({commit},productId){
    commit('delete_product_list_by_id',productId)
  }, 
  // 添加到选中商品数组
  addPrdToProductListSelect({commit},product){
    commit('add_prd_to_product_list_select',product)
  },
  // 清空选中商品数组
  emptyProductListSelect({commit}){
    commit('empty_product_list_select')
  },
  // 修改指定商品数量
  modifyProductListSalesAmount({commit},product){
    commit('modify_product_list_sales_amount',product)
  },
  // 修改指定商品折扣率
  modifyProductListDiscountRatio({commit},product){
    commit('modify_product_list_discount_ratio',product)
  },
  // 修改所有商品的折扣率未1(没有折扣)
  modifyProductListAllRatioOne({commit}){
    commit('modify_product_list_all_ratio_one')
  },
  // 添加到商品数组
  addPrdToProductList({commit},product){
    commit('add_prd_to_product_list',product)
  },
  // 添加商品到商品数组指定位置
  addPrdToProductListToIndex({commit},param){
    commit('add_prd_to_product_list_to_index',param)
  },
  // 添加数据到挂单列表
  addToEntryOrdersList({commit},product){
    commit('add_to_entry_orders_list',product)
  },
  // 从挂单列表中删除数据
  delFromEntryOrdersList({commit},product){
    commit('del_from_entry_orders_list',product)
  },
  // 计算所有商品总价和总优惠额
  countAllProductTotalPriceDiscount({commit}){
    commit('count_all_product_total_price_discount')
  },
  // 设置今日销售单数
  updateTodaySalesCount({commit}){
    axios.get(api.queryIndex)
    .then( (response) =>{ 
      let res=response.data;
      if(res.success && res.data){ 
        commit('update_today_sales_count',res.data.salesCount);
      }
    })
    .catch( (error)=> {   
    });
  },

  getTopMovies({commit}){
    jsonp('https://api.douban.com/v2/movie/top250?count=10', null, (err, data) => {
      if(err) {
        console.error(err.message);
      }else{ 
        if(data && data.subjects.length > 0) {
          commit('get_top_movies',data.subjects);
        }
      }
    })
  },
  // 添加数据到挂单列表
  addToFavoriteListByIndex({commit},index){
    commit('add_to_favorite_list_by_index',index)
  },



}
