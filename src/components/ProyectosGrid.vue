<script lang="ts" setup>
import SlideProyecto from './SlideProyecto.vue'

import { useProyectos } from '../stores/proyectos'

const proyectosStore = useProyectos();
const proyectos = proyectosStore.getProyectos;
        
</script>
<template>
<div class="container" id="projects">
    <div v-for="(proyecto, index) in proyectos" class="mb-12">
        <SlideProyecto 
            :nombre="proyecto.nombre" 
            :descripcion="proyecto.descripcion"
            :enlace="proyecto.enlace"
            :tecnologias="proyecto.tecnologias"
            :tipo="proyecto.tipo"
            :imagen="proyecto.imagen"
        />
    </div>
</div>

</template>