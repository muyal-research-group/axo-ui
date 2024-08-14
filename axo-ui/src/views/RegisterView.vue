<script setup>
    import { ref } from 'vue';
    const name = ref('')
    const username = ref('')
    const password = ref('')
    const passwordConfirmation = ref('')

</script>

<template>
    <v-main class="d-flex align-center justify-center"
    style="min-height: 300px;"
    >
        <v-sheet width="450" class="d-flex flex-column align-center justify-center sheet-color pa-5 rounded-lg ">
            <v-img
                :width="180"
                aspect-ratio="1/1"
                cover
                :src="require('@/assets/logo-cinvestav.png')"
                >
            </v-img>
            <v-text class="text-h5 font-weight-black">AXO</v-text>
            <v-form fast-fail @submit.prevent class="w-100 mt-5">                       
                <v-text-field
                    v-model="name"
                    class="font-weight-bold"
                    density="compact"
                    placeholder="Name"
                    variant="outlined"
                ></v-text-field>
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
                <v-text-field
                    v-model="passwordConfirmation"
                    class="font-weight-bold" 
                    :append-inner-icon="visibleConfirmation ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visibleConfirmation ? 'text' : 'password'"
                    density="compact"
                    placeholder="Confirm Password"
                    variant="outlined"
                    @click:append-inner="visibleConfirmation = !visibleConfirmation"
                ></v-text-field>

                <div class="d-flex flex-column rounded w-100 justify-center align-center">
                    <v-btn class="btn-color w-100 text-white mb-5" type="submit" >Sign Up</v-btn>
                    <div>
                        <v-text class="text-disabled"> Already have an account?</v-text>
                        <router-link to="/" class="text-decoration-none">
                        Sign In
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
        visibleConfirmation: false
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

