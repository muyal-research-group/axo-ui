<template>
  <!-- App Bar -->
  <v-app-bar app class="bg-color text-white">
    <div class="d-flex justify-start">
      <v-img
      :width="60"
      :src="require('@/assets/logo-civestav-white.png')"
      class=" ml-5" 
      ></v-img>   
    </div>
    <template v-if="$vuetify.display.smAndDown">
      <v-app-bar-nav-icon 
      variant="text" 
      @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
    </template>
    <v-spacer></v-spacer>
    <!-- Popover Menu -->
    <div class="d-flex">
      <popoverMenu />
    </div>        
  </v-app-bar>
  <!-- SideBar -->
  <v-navigation-drawer 
  app
  :expand-on-hover="!$vuetify.display.smAndDown"
  v-model="drawer"
  :rail="!$vuetify.display.smAndDown"
  class="bg-color-nav-drawer" 
  :location="$vuetify.display.mobile ? 'left' : undefined"
  >
    <v-divider></v-divider>
    <v-list 
    density="compact" 
    nav 
    class=" text-white">
      <v-list-item 
      link 
      prepend-icon="mdi-home" 
      title="Home" 
      value="home"  
      @click="navigateTo('/home')"></v-list-item>
      <v-list-item 
      link prepend-icon="mdi-folder" 
      title="My Objects" 
      value="myOjects"  
      @click="navigateTo('/my-objects')"></v-list-item>
      <v-list-item 
      link 
      prepend-icon="mdi-cube" 
      title="My Virtual Enviroment" 
      value="myEnviroment"  
      @click="navigateTo('/my-objects')"></v-list-item>
      <v-list-item 
      link 
      prepend-icon="mdi-grid" 
      title="My Endpoints" 
      value="myEndpoints"  
      @click="navigateTo('/my-objects')"></v-list-item>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer> 
      <v-list-item prepend-icon="mdi-logout" title="Log Out" value="logout"  @click="navigateTo('/')"></v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import PopoverMenu from "./PopoverMenu.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const drawer = ref(true)

/* navegacion de rutas */
const router = useRouter();
const navigateTo = (path) => {
  router.push({ path });
};


</script>

<style scoped>
.bg-color{
    background-color: #06141B;
}

.bg-color-nav-drawer{
    background-color: #11212D;
}
</style>