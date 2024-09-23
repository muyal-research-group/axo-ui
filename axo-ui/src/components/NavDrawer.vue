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
</template>

<script setup>



</script>

<style scoped>
.bg-color-nav-drawer{
    background-color: #11212D;
}
</style>