/* 
包含n个用于直接更新状态数据的方法的对象
*/

import Vue from "vue"

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART
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
  [ADD_FOOD_COUNT] (state,{food}) {
    if (!food.count) { //第一次添加这个属性
      Vue.set(food, 'count', 1)
      //将food添加到cartFoods
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [REDUCE_FOOD_COUNT] (state,{food}) {
    if (food.count) {
      food.count--
      if (food.count===0) {
        //将food从cartFoods移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    //清空购物车中所有food的count属性
    state.cartFoods.forEach(food => {
      food.count = 0
    })
    //清除购物车数组中的foods
    state.cartFoods = []
  },
}