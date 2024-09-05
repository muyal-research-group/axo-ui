<script setup>
    import { ref } from 'vue';
    const firstName = ref('')
    const lastName = ref('')
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const passwordConfirmation = ref('')

</script>

<template>
    <v-main class="d-flex align-center justify-center"
    style="min-height: 300px;"
    >
        <v-sheet 
        width="450" 
        class="d-flex flex-column align-center justify-center pa-5 rounded-lg" style="position: relative;">
            <v-sheet
                width="100"
                height="100"
                class="d-flex align-center justify-center"
                color="#06141B"
                style="border-radius: 50%; position: absolute; top: -50px; z-index: 10;"
            >
            <v-icon 
                icon="mdi-account"
                size="x-large"
                />
            </v-sheet>
            <v-form fast-fail @submit.prevent class="w-100 mt-8 pa-3">
                <v-text-field clearable
                    label="First Name" 
                    v-model="firstName"
                    variant="filled"
                    class="font-weight-bold"
                    density="compact"            
                >
                </v-text-field>
                <v-text-field clearable
                    label="Last Name" 
                    v-model="lastName"
                    variant="filled"
                    class="font-weight-bold"
                    density="compact"            
                >
                </v-text-field>
                <v-text-field clearable
                    label="Username" 
                    v-model="username"
                    variant="filled"
                    class="font-weight-bold"
                    density="compact"             
                >
                </v-text-field>
                <v-text-field clearable
                    label="Email" 
                    v-model="email"
                    variant="filled"
                    class="font-weight-bold"
                    density="compact"             
                >
                </v-text-field>
                <v-text-field
                    label="Password"
                    v-model="password"
                    variant="filled"           
                    class="font-weight-bold" 
                    density="compact"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"                    
                    @click:append-inner="visible = !visible"
                >
                </v-text-field>
                <v-text-field
                    label="Confirm password"
                    v-model="passwordConfirmation"
                    variant="filled"           
                    class="font-weight-bold" 
                    density="compact"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"                    
                    @click:append-inner="visible = !visible"
                >
                </v-text-field>
                <div class="d-flex justify-space-between">
                    <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                        <label for="rememberMe" class="text-disabled ">   Remember me</label>
                    </div>
                    <router-link to="" class="text-decoration-none text-blue-accent-1 ">
                        Forgot password?
                    </router-link>
                </div>               
                <div class="d-flex flex-column mt-4 w-100 justify-center align-center">
                    <v-btn class="btn-color w-100 text-white mb-5" type="submit" >Sign Up</v-btn>
                    <div>
                        <v-text class="text-disabled">Already on Axo?</v-text>
                        <router-link to="/" class="text-decoration-none font-weight-bold"
                        style="color: #06141B"
                        >
                        Login
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
    background-color: #06141B;
}


</style>

