<template>
  <v-app>
    <v-layout class="rounded rounded-md urbanist-font">
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

<style scoped>
.urbanist-font {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
