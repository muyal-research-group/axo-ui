<script setup>


  import { RouterView } from "vue-router";


</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">



  <!-- barra -->
  <v-app-bar title=""
      class="bg-black text-center"
    >
    </v-app-bar>


    <!-- contenido -->
    <v-main>
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

  data: () => ({
    //
  }),
}
</script>
