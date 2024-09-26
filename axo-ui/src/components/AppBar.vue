<template>
    <v-app-bar app class="bg-color text-white">
        <div class="d-flex justify-start">
          <v-img
            :width="60"
            :src="require('@/assets/logo-civestav-white.png')"
            class=" ml-5"
          ></v-img>
        </div>
          <v-spacer></v-spacer>
          <div class="d-flex mr-5">
            <v-list-item link
              prepend-avatar= "https://randomuser.me/api/portraits/lego/1.jpg"           
              :title="username"
              subtitle="View Profile"
              ></v-list-item>   
          </div>        
      </v-app-bar>
</template>

<script setup>

  import { ref, } from "vue";
  var username = ref("User");
  
</script>

<style scoped>
.bg-color{
    background-color: #06141B;
}
</style>