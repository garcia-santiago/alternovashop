<script lang="ts" setup>
import KanyeQuote from '../components/KanyeQuote.vue'
import Divider from '../components/Divider.vue'
import ProyectosGrid from '../components/ProyectosGrid.vue'

const router = useRouter()
const irContact = () => {
    router.push(`/contacto`)
}
const irProjects = () => {
    router.push(`/proyectos`)
}

</script>

<template>

<section class="pb-4">
  <div class="flex justify-center">
    <img src="https://i.ibb.co/HCJHMmJ/headshot.png" alt="">
  </div>

  <div>
    <span class="text-5xl block mb-4 cursiva">Santiago García Avilán</span>
    <span class="block mb-7">Hola! Soy Santiago, Desarollador Fullstack y estudiante de Ingeniería de Sistemas.</span>
    <button @click="irContact" class="btn">CONTACTO</button>
  </div>


</section>

<div class="lg:my-20">
  <Divider />
</div>

  <section>
    <ProyectosGrid />
    <button @click="irProjects" class="btn mb-5">MAS PROJECTOS</button>   
  </section>

<div class="lg:my-30">
  <KanyeQuote />
</div>

<section>
  <h3 class="text-4xl font-bold mb-4">
    Tecnologías
  </h3>
  <div class="container lg:mx-16">
    <div class="grid gap-y-4">
      <div class="row">
        <div class="mb-1 text-2xl text-left">Vue</div>
        <div class="h-6 bg-gray-200 rounded-full">
          <div class="h-6 bg-green-500 rounded-full" style="width: 85%"></div>
        </div>
      </div>
      <div class="row">
        <div class="mb-1 text-2xl text-left">Node</div>
        <div class="h-6 bg-gray-200 rounded-full">
          <div class="h-6 bg-green-500 rounded-full" style="width: 75%"></div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="mb-1 text-2xl text-left">GIT</div>
        <div class="h-6 bg-gray-200 rounded-full">
          <div class="h-6 bg-green-500 rounded-full" style="width: 50%"></div>
        </div>
      </div> -->
      <div class="row">
        <div class="mb-1 text-2xl text-left">Python</div>
        <div class="h-6 bg-gray-200 rounded-full">
          <div class="h-6 bg-green-500 rounded-full" style="width: 40%"></div>
        </div>
      </div>
      <div class="row">
        <div class="mb-1 text-2xl text-left">PHP</div>
        <div class="h-6 bg-gray-200 rounded-full">
          <div class="h-6 bg-green-500 rounded-full" style="width: 40%"></div>
        </div>
      </div>
    </div>
  </div>

</section>

</template>
<style>

</style>

