<script setup lang="ts">
import {useCart} from '../stores/cart.ts'
import ProductCart from '../Types/ProductCart'
import Product from '../Types/Product'

const storeCart = useCart()

const props = defineProps({
    name: String,
    unit_price: Number,
    stock: Number,
    img_url: String,
});

const self_product = <Product> {
    name: props.name,
    unit_price: props.unit_price,
    stock: props.stock,
    img_url: props.img_url
}

const quantity = ref(1)

function addToCart(){
    let sum = 0; 
    storeCart.getProducts.forEach(prod => {
        if(prod.name === self_product.name){
            sum += prod.quantity;
        }
    })

    if(quantity.value+sum>self_product.stock){
        mostrarMensaje('red', `No se puede agregar, no hay suficiente stock (${self_product.stock-sum} unidades disponibles)`);
    }
    else{
        const newProduct = <ProductCart> {
            name: self_product.name,
            unit_price: self_product.unit_price,
            quantity: quantity.value,
            total_price: self_product.unit_price * quantity.value
        }
        storeCart.addToCart(newProduct);
    }
}
const tgglMensaje = ref(false);
const mensaje = ref("");
const tipo = ref("");

const mostrarMensaje = (type, msg) => {
    tipo.value = type
    mensaje.value = msg
    tgglMensaje.value = true

    setTimeout(()=> { 
        tgglMensaje.value = false 
    }, 3000);
}

</script>
<template>

    <div class="rounded overflow-hidden shadow-lg tarjeta">
        <img class="w-full h-75" :src="img_url" alt="Imagen Miniatura">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{name}} - ${{unit_price}}</div>
        </div>
        <div class="px-6 pt-4 pb-2 flex gap-x-1">
            <input min="1" type="number" name="" id="" class="w-1/5 rounded" v-model="quantity">
            <button class="btn w-4/5" @click="addToCart">Add to cart</button>
        </div>
        <transition name="fade">
            <div class="text-white py-2 w-75 mx-auto rounded my-2 text-center" v-show="tgglMensaje" 
                :class="tipo=='green'?'bg-green-500' :tipo=='red' ? 'bg-red-500' : ''">
                    {{mensaje}}
            </div>
        </transition>
    </div>

</template>
<style scoped>
.tarjeta{
    @apply inline-block select-none
    opacity-100;
}
</style>