<script lang="ts" setup>
import CardImg from './CardImg.vue'

import productsJSON from '../json/products.json'
const products = productsJSON.products

const imgs = [ "https://images.ctfassets.net/lcr8qbvxj7mh/2YFBOkIl3scPnFZGw8gLXz/e97cd77969e6ddd699aed3afb1ecb454/CUT-CO_RBED_250_Single-Unit_close_ambien.png", "https://grupodiana.co/wp-content/uploads/2019/12/arroz-valor01.png", "https://copservir.vtexassets.com/arquivos/ids/771951/PAPA-MARGARITA-LIMON_F.png?v=637951129187230000", "https://lecarnegourmet.com/wp-content/uploads/2022/07/costilla-le-carne.jpg"]

</script>

<template>
<div class="flex flex-wrap gap-x-3" id="products">
    <div v-for="(product, index) in products" class="mb-12">
        <CardImg 
            :name="product.name" 
            :unit_price="product.unit_price" 
            :stock="product.stock" 
            :img_url="imgs[index]" 
        />
    </div>
</div>

</template>