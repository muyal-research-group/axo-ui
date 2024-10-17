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
          <!-- Popover Menu -->
          <div class="d-flex">
            <popoverMenu />
          </div>        
      </v-app-bar>
</template>

<script setup>
import PopoverMenu from "./PopoverMenu.vue";

</script>

<style scoped>
.bg-color{
    background-color: #06141B;
}
</style>