<script setup>  
    import { ref } from 'vue';
    const username = ref('')
    const password = ref('')
</script>

<template>
    <v-main class="d-flex align-center justify-center bg-color-main h-100"
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
        <!--formulario -->
            <v-form fast-fail @submit.prevent class="w-100 mt-8 pa-8">
                <v-text-field clearable
                    label="Username" 
                    v-model="username"
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
                    <v-btn class="btn-color w-100 text-white mb-5" type="submit" >Login</v-btn>
                    <div>
                        <v-text class="text-disabled"> Don't have an account?</v-text>
                        <router-link to="/register" class="text-decoration-none font-weight-bold"
                        style="color: #06141B"
                        >
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
    background-color: #06141B;
}
.bg-color-main{
  background-color: #EEEAEA;
}
</style>

