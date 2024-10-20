<template>
  <v-app class="urbanist-font">
    <!-- App Bar -->
    <template v-if="!isAuthRoute">
      <v-app-bar app fixed class="bg-color text-white">
      <div class="d-flex justify-start">
        <v-img
          :width="60"
          :src="require('@/assets/logo.png')"
          class="ml-5"
        ></v-img>
      </div>
      <!-- nav icon in small screens -->
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
      v-model="drawer"
      app
      :expand-on-hover="!$vuetify.display.smAndDown"
      :rail="!$vuetify.display.smAndDown"
      class="bg-color-nav-drawer"
      :location="$vuetify.display.mobile ? 'left' : undefined"
    >
      <v-divider></v-divider>
      <v-list density="compact" nav class="text-white">
        <v-list-item
          link
          prepend-icon="mdi-home"
          title="Home"
          value="home"
          @click="navigateTo('/home')"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-folder"
          title="My Objects"
          value="myObjects"
          @click="navigateTo('/my-objects')"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-cube"
          title="My Virtual Environment"
          value="myEnvironment"
          @click="navigateTo('/my-objects')"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-grid"
          title="My Endpoints"
          value="myEndpoints"
          @click="navigateTo('/my-objects')"
        ></v-list-item>
        <v-spacer></v-spacer>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Log Out"
          value="logout"
          @click="navigateTo('/')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    </template>

    <!-- Main Content -->
    <v-main>
      <RouterView />
    </v-main>

    <!-- Footer -->
    <v-footer app v-if="!isAuthRoute">
      <span class="text-grey"> </span>
    </v-footer>
  </v-app>
</template>

<script setup>
import PopoverMenu from './components/PopoverMenu.vue';
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const drawer = ref(true);

/* Navegación de rutas */
const router = useRouter();
const navigateTo = (path) => {
  router.push({ path });
};

const route = useRoute();

const isAuthRoute = computed(() => {
  return route.path === '/' || route.path === '/register';
});

</script>

<style scoped>
.urbanist-font {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.bg-color {
  background-color: #06141B;
}

.bg-color-nav-drawer {
  background-color: #11212D;
}
</style>
