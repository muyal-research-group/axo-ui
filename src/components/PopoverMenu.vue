<template>
    <div>
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            location="bottom"
        >
        <template v-slot:activator="{ props }">
            <v-list-item   
            v-bind="props"
            prepend-avatar= "https://static.vecteezy.com/system/resources/previews/047/733/682/non_2x/grey-avatar-icon-user-avatar-photo-icon-social-media-user-icon-vector.jpg" 
            prepend-icon="mdi-chevron-down"
            >  
            </v-list-item>
        </template>

        <v-card min-width="300">
            <v-list>
                <v-list-item
                prepend-avatar= "https://static.vecteezy.com/system/resources/previews/047/733/682/non_2x/grey-avatar-icon-user-avatar-photo-icon-social-media-user-icon-vector.jpg" 
                :subtitle="userStore.user.username"
                :title="userStore.user.fullname"
                >
                </v-list-item>
            </v-list>
            <v-divider></v-divider>

            <v-list
                :lines="false"
                density="compact"
                nav
                >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="primary"
                    @click="goTo(item.route)"
                >
                    <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
        </v-menu>
    </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore(); 
const menu = ref(false);

const items= [
        { text: 'Notifications', icon: 'mdi-bell', route: '#' },
        { text: 'Settings', icon: 'mdi-cogs', route: '#' },
        { text: 'Logout', icon: 'mdi-logout', route: '/' },
    ]

const goTo = (route) => {
    router.push(route);
};

</script>

