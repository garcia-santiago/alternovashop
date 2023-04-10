<script setup lang="ts">
let showMenu = ref(false);
</script>
<template>
      <nav class=" px-6 py-3 mx-auto md:flex md:justify-between md:items-center shadow-lg">
        <div class="flex items-center justify-between">
          <router-link to="/" class=" text-xl font-bold md:text-2xl">
            <!-- Santiago G. Avilán -->
              <img src="https://i.ibb.co/FxHjyzh/Tech.png" alt="Tech" width="50"/> 
          </router-link>

          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-gray-800">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
            <li>
                <a href="/articulos" class="link">
                    Artículos
                </a>
            </li>
            <li>
                <a href="/proyectos" class="link">
                    Proyectos
                </a>
            </li>
            <li>
                <a href="/about" class="link">
                    Acerca de
                    </a>
            </li>
            <li>
                <a href="/contacto" class="link">
                    Contacto
                    </a>
            </li>
        <div class="flex-col space-x-4 text-lg">

            <a class="link mx-2" rel="noreferrer" href="https://github.com/garcia-santiago/" target="_blank" title="GitHub">
                <carbon-logo-github />
            </a>
            <a class="link mx-2" rel="noreferrer" href="https://www.linkedin.com/in/santiago-ga/" target="_blank" title="Linkedin">
                <carbon-logo-linkedin />
            </a>
        </div>

        </ul>
   
      </nav>
</template>