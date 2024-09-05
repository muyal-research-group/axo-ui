<script setup>


  import { RouterView } from "vue-router";


</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md urbanist-font">
  <!-- barra -->
  <v-app-bar app class="bg-color text-white">
    <div class="d-flex justify-start">
      <v-img
        :width="60"
        :src="require('@/assets/logo-civestav-white.png')"
        class=" ml-5"
      ></v-img>
    </div>

    </v-app-bar>

    <!-- contenido -->
    <v-main class= "bg-color-main">
      <RouterView />
    </v-main>

    <!-- footer -->

    <v-footer app>

    </v-footer>


    </v-layout>
  </v-app>
</template>


<script>
export default {
  name: 'App',
  data() {
    
    } 
}
</script>

<style scoped>
.bg-color{
    background-color: #06141B;
}
.bg-color-main{
  background-color: #EEEAEA;
}
.urbanist-font {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
