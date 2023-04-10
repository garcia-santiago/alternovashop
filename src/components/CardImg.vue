<script setup lang="ts">
const router = useRouter()

const props = defineProps({
  title: String,
  desc: String,
  thumbnail: String,
  author: String,
  category: String,
  slug: String,

});
const { title, thumbnail, desc } = toRefs(props);

function clickArticulo(slug){
    router.push('/articulo/'+slug)
}

</script>
<template>

    <div class="rounded overflow-hidden shadow-lg tarjeta" 
        @click="clickArticulo(slug)"
    >
        <img class="w-full h-50" :src="thumbnail" alt="Imagen Miniatura">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{title}}</div>
            <div class="text-lg mb-2 underline">{{author}}</div>
            <p class="">
                {{desc}}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{category}}</span>
        </div>
    </div>

</template>
<style scoped>
.tarjeta{
    @apply inline-block cursor-pointer select-none
    opacity-100 transition-transform duration-200 ease-in-out
    transform hover:-translate-y-2;
}
</style>