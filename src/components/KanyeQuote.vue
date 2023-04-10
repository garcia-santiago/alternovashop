<script setup lang="ts">
import axios from 'axios'

let quote = ref("")

const getQuote = () => {
    axios.get<any>('https://api.kanye.rest/')
    .then(response => {
        quote.value = response.data.quote;
    })
}

onMounted(() => {
    getQuote()
})
</script>
<template>
    <div>
        <h3 class="text-lg">"<span class="font-bold italic">{{quote}}</span>" <br> - Kanye</h3>
    </div>
</template>
