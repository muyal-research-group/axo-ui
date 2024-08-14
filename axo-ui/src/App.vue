<script setup>


  import { RouterView } from "vue-router";


</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md urbanist-font">
  <!-- barra -->
    <v-app-bar app class="bg-color text-center text-white">
   <!--  <v-toolbar-title> {{ currentOptions.title }} </v-toolbar-title> -->
    <v-spacer></v-spacer>
    <v-btn :to="currentOptions.route" v-if="currentOptions.button" right>{{ currentOptions.button }}</v-btn>
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
  data() {
    return {
      navOptions: {
        '/': { title: 'Inicio', button: 'Sign Up', route: '/register'},
        '/register': { title: 'Register', button: 'Sign In', route:'/login'}
      }
    };   
  },
  computed: {
      currentOptions() {
        return this.navOptions[this.$route.path] || {};
      }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #0f0c24ff;
}
.urbanist-font {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
