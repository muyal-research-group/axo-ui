<template>
    <v-navigation-drawer app
        expand-on-hover
        rail
        class="bg-color-nav-drawer"
        >
        <v-divider></v-divider>
        <!--menu lateral-->   
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
import { useRouter } from 'vue-router';
/* navegacion de rutas */
const router = useRouter();
const navigateTo = (path) => {
  router.push({ path });
};
</script>

<style scoped>
.bg-color-nav-drawer{
    background-color: #11212D;
}
</style>