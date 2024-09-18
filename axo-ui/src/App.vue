<script setup>
  import { RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md urbanist-font">
  <v-app-bar app class="bg-color text-white">
    <div class="d-flex justify-start">
      <v-img
        :width="60"
        :src="require('@/assets/logo-civestav-white.png')"
        class=" ml-5"
      ></v-img>
    </div>
    <template v-if="isHome" >
      <v-spacer></v-spacer>
      <div class="d-flex mr-5">
        <v-list-item link
          prepend-avatar= "https://randomuser.me/api/portraits/lego/1.jpg"           
          title="User name"
          subtitle="View Profile"
          ></v-list-item>   
      </div>        
    </template>

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
    return{
      username: "John Doe",
    };
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    },
  },
}
</script>

<style scoped>
.bg-color{
    background-color: #06141B;
}

.urbanist-font {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
