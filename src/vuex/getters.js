export default {

  //商品总数量
  totalCount (state) {
    return state.cartFoods.reduce((pre,food) => pre + food.count, 0)
  },
  //商品总价格
  totalPrice(state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
  },

  //商家 总评论数量
  totalRatingsCount (state) {
    return state.ratings.length
  },
  //商家总 推荐评论数量
  positiveRatingsCount (state) {
    return state.ratings.reduce((pre,rating) => pre + (rating.rateType === 0 ? 1 : 0), 0 )
  }

}