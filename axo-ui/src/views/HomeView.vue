<template>
    <AppBar />
    <NavDrawer />
    <!-- main -->
        <v-main class="d-flex-column justify-center align-center pa-5"
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
import AppBar from '@/components/AppBar.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import { ref } from 'vue';
import userData from '../users.json'

const users = ref(userData);

</script>

