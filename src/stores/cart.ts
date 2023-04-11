import { defineStore } from 'pinia'
import {useStorage} from '@vueuse/core'
import ProductCart from '../Types/ProductCart'

export const useCart = defineStore({
  id: 'cart',
  state: () => ({
    cartArray: useStorage('cart', [] as ProductCart[])
  }),
  getters: {
    getProducts(state){
        return state.cartArray
    },
    getTotal(state){
      let sum = 0;
      state.cartArray.forEach(prod => {
            sum += prod.total_price;
        })
      return sum
    }
  },
  actions: {
    addToCart(product: ProductCart){
      this.cartArray.push(product)
    }
  },
})