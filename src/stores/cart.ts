import { defineStore } from 'pinia'
import {useStorage} from '@vueuse/core'
import ProductCart from '../Types/ProductCart'

export const useCart = defineStore({
  id: 'cart',
  state: () => ({
    cartArray: useStorage('cart', [] as ProductCart[]),
    total: useStorage('total', 0)
  }),
  getters: {
    getProducts(state){
        return state.cartArray
    },
    getTotal(state){
      return state.total
    }
  },
  actions: {
    addToCart(product: ProductCart){
      this.cartArray.push(product)
      this.setTotal();
    },
    setTotal(){
      console.log("a");
      let sum = 0;
      this.cartArray.forEach(prod => {
            sum += prod.total_price;
        })
      this.total = sum;
    }
  },
})