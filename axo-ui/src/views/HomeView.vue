<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        >
        <v-list>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                subtitle="sandra_a88@gmailcom"
                title="Sandra Adams"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
        </v-navigation-drawer>

    <v-main class="d-flex-column align-center justify-center"
        style="min-height: 300px;"
        >
        <div class="d-flex justify-center">
            <v-sheet class=" w-50">
            <h1>Posts</h1>
                <div v-for="post in posts" :key="post.id">
                    <h2>{{ post.id }} {{ post.title }}</h2>
                    <p>{{ post.body }}</p>
                </div>
        </v-sheet>
        <v-sheet class=" w-50">
            <h1>Users</h1>
                <div v-for="user in users" :key="user.id">
                <p>{{ user.id }} {{ user.name }}</p>
        </div>  
        </v-sheet>   
        </div>
                    
        </v-main>

</template>

<script>
import axios from 'axios';
import userData from '../users.json'

export default {
    data(){
        return {
            users: userData,
            posts: []
        }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.posts = response.data)
    }
    
}
</script>