<script lang="ts" setup>
import {useCart} from '../stores/cart.ts'
import ProductCart from '../Types/ProductCart'
import download from 'downloadjs'
import { storeToRefs } from 'pinia'

const storeCart = useCart()
const productsCart = storeCart.getProducts
const {total} = storeToRefs(storeCart);


const createOrder = () => {
    const order = {
        "products": productsCart,
        "total_price": total
    }
    download(JSON.stringify(order), 'order.json', 'text/plain')
}

</script>

<template>
<div class="flex flex-col gap-y-4 px-3" id="cart">
    <div class="row-product-md font-bold">
        <div>Cart</div>
        <div>Quantity</div>
        <div>Unit Price</div>
        <div>Total Price</div>
    </div>
    <div v-for="(product, index) in productsCart">
        <div class="row-product-md">
            <div>{{product.name}}</div>
            <div>{{product.quantity}}</div>
            <div>${{product.unit_price}}</div>
            <div>${{product.total_price}}</div>
        </div>
        <div class="row-product-sm">
            <div>{{product.name}} x {{product.quantity}}</div>
            <div>${{product.total_price}}</div>
        </div>
    </div>
    <div class="flex justify-evenly mt-3">
        <div>
            Total: <span class="underline"> ${{total}} </span>
        </div>
        <div>
            <a class="btn" @click="createOrder">
                CREATE ORDER
            </a>
        </div>
    </div>
</div>

</template>
<style>
.row-product-md{
    @apply md:(grid grid-cols-[200px,1fr,1fr,1fr]) <sm:(hidden);
}
.row-product-sm{
    @apply md:(hidden) <sm:(flex justify-between);
}
</style>