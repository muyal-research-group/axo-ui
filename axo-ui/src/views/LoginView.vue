<template>
    <v-main class="d-flex align-center justify-center"
    style="min-height: 300px;"
    >
        <v-sheet width="400" class="d-flex flex-column align-center justify-center bg-grey-lighten-3 pa-5 rounded-lg ">
            <v-img
                :width="180"
                aspect-ratio="1/1"
                cover
                :src="require('@/assets/logo-cinvestav.png')"
                class="mb-5"
                >
            </v-img>

            <v-card-title class="text-h6 text-md-h5 text-lg-h4">AXO</v-card-title>

            <v-form fast-fail @submit.prevent class="w-100">
                <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="User"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                ></v-text-field>

                <div class="d-flex rounded w-100 justify-center align-center">

                    <v-btn class=" w-50 bg-black text-white mr-8" type="submit" >Login</v-btn>

                    <router-link to="/register" class="text-decoration-none w-50">
                    Sign Up
                    </router-link>

                </div>

            </v-form>           
        </v-sheet>
    </v-main>
</template>

