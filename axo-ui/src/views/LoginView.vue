<script setup>  
    import { ref } from 'vue';
    const username = ref('')
    const password = ref('')
</script>

<template>
    <v-main class="d-flex align-center justify-center"
    style="min-height: 300px;"
    >
        <v-sheet width="450" class="d-flex flex-column align-center justify-center pa-5 rounded-lg sheet-color">
            <v-img
                :width="180"
                aspect-ratio="1/1"
                cover
                :src="require('@/assets/logo-cinvestav.png')"
                >
            </v-img>
            <v-text class="text-h5 font-weight-black">AXO</v-text>
            <v-text class="text-disabled">Enter your username to acces</v-text>
            <v-form fast-fail @submit.prevent class="w-100 mt-5">
                <v-text-field
                    v-model="username"
                    class="font-weight-bold"
                    density="compact"
                    placeholder="Username"
                    variant="outlined"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    class="font-weight-bold" 
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    placeholder="Password"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
                ></v-text-field>
                <div class="d-flex flex-column rounded w-100 justify-center align-center">
                    <v-btn class="btn-color w-100 text-white mb-5" type="submit" >Sign In</v-btn>
                    <div>
                        <v-text class="text-disabled"> Don't have an account?</v-text>
                        <router-link to="/register" class="text-decoration-none">
                        Sign Up
                        </router-link>
                    </div>
                </div>
            </v-form>           
        </v-sheet>
    </v-main>
</template>


<script>
  export default {
    data: () => ({
      visible: false,
    }),
  }
</script>

<style scoped>
.btn-color{
    background-color: #0f0c24ff;
}

.sheet-color{
    background-color: rgb(240, 240, 240);
}
</style>

