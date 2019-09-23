/* 
包含n个用于直接更新状态数据的方法的对象
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from "./mutation-types"

export default {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_USER] (state,{user}) {
    state.user = user
  },
  [RECEIVE_INFO] (state,{info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state,{ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS] (state,{goods}) {
    state.goods = goods
  },
}