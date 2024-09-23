<template>
    <v-navigation-drawer app
        expand-on-hover
        rail
        class="bg-color-nav-drawer"
        >
        <v-divider></v-divider>
        <!--menu lateral-->   
        <v-list density="compact" nav class=" text-white">
            <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-folder" title="My Objects" value="myOjects"></v-list-item>
            <v-list-item prepend-icon="mdi-cube" title="My Virtual Enviroment" value="myEnviroment"></v-list-item>
            <v-list-item prepend-icon="mdi-grid" title="My Endpoints" value="myEndpoints"></v-list-item>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer> 
            <v-list-item prepend-icon="mdi-logout" title="Log Out" value="logout"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <!-- main -->
    <v-main class="d-flex-column justify-center align-start pa-5"
        style="min-height: 300px;"
        >
        <div class="d-flex flex-column">
            <div class=" ">
                <h1>Home</h1>                    
            </div>
            <v-divider ></v-divider>
        <!--en esta funcion se rellena el cuerpo del home con los datos del usuario-->
            <div v-for="user in users" :key="user.id">
                <h2>{{ user.id }}</h2>
                <p>{{ user.name }}</p>
            </div>
        </div>                    
        </v-main>
</template>

<script setup>
import { ref } from 'vue';
import userData from '../users.json'

const users = ref(userData);

</script>

<style scoped>
.bg-color-nav-drawer{
    background-color: #11212D;
}
</style>