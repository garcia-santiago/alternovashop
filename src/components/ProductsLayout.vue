<script lang="ts" setup>
import CardImg from './CardImg.vue'

import productsJSON from '../json/products.json'
const products = productsJSON.products

</script>

<template>
<div class="flex flex-wrap gap-x-3" id="products">
    <div v-for="(product, index) in products" class="mb-12">
        <CardImg 
            :name="product.name" 
            :unit_price="product.unit_price" 
            :stock="product.stock" 
            :img_url="product.img_url" 
        />
    </div>
</div>

</template>