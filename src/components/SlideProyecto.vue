<script setup lang="ts">
const router = useRouter()

const props = defineProps({
  nombre: String,
  descripcion: String,
  enlace: String,
  tecnologias: String,
  tipo: String,
  imagen: String,
});
const { nombre, descripcion, enlace, tecnologias, tipo, imagen} = toRefs(props);

</script>
<template>

    <div class="contWrap <lg:hidden">

        <img :src="imagen" alt="Imagen del proyecto" class="myimg"> 

        <div class="infoWrapper">
            <h4 class="text-left mb-3 font-bold text-3xl">{{nombre}}</h4>
            <div class="descProj">{{descripcion}}</div>
            <div class="text-lg">
                <carbon-logo-python 
                    width="50" 
                    height="50" 
                    v-show="tecnologias.includes('Python')"
                />
                <mdi-vuejs
                    width="50" 
                    height="50" 
                    v-show="tecnologias.includes('Vue')"
                />
                <mdi-nodejs
                    width="50" 
                    height="50" 
                    v-show="tecnologias.includes('Node')"
                />
                <mdi-language-php
                    width="50" 
                    height="50" 
                    v-show="tecnologias.includes('PHP')"
                />
            </div>

        </div>

    </div>

    <!-- mobile -->
    <div class="sm:block lg:hidden">

        <img :src="imagen" alt="Imagen del proyecto" class="myimg"> 

        <div>
            <div class="">{{descripcion}}</div>
            <!-- <h4 class="text my-2">{{proyecto.tecnologias}}</h4> -->
        </div>

    </div>
 
</template>
<style scoped>
svg{
    float: left;
}
.contWrap{
    position: relative;
    left: 38.5%;
    width: 100vh;
}
.infoWrapper{
    position: absolute;
    width: 450px;
    left: -34.7%;
    top: 29%;
}
.descProj{
    @apply rounded py-2 px-3 text-light-50 my-5;
    background-color: transparent;
    background-color:  #3e3e3e;
    background-color: rgba(62, 62, 62, 0.95);
    /* background-color: rgba(16, 185, 129, 0.95); */
    text-align: justify;
}
.myimg{
    /* width: 700px;
    height: 450px; */
}

</style>