<template>
  <v-app>
    <v-main class="d-flex-column justify-center align-center pa-5" style="min-height: 300px;">
      <v-container>
        <div class="d-flex flex-column">
          <div class="d-flex">
            <h1>Edit Profile</h1>
          </div>
          <v-divider></v-divider>

          <div class="mt-8">
            <p>Anyone who can view your profile can see the information you add here.</p>
            <v-form class="pa-5">
              <div class="pa-5">
                <p>Photo</p>
                <v-avatar
                  image="https://static.vecteezy.com/system/resources/previews/047/733/682/non_2x/grey-avatar-icon-user-avatar-photo-icon-social-media-user-icon-vector.jpg"
                  size="80"
                ></v-avatar>

                <!-- file input -->
                <v-btn class="ml-5 bg-grey-lighten-2">
                  Update
                  <v-overlay activator="parent" scroll-strategy="block" class="d-flex align-center justify-center">
                    <v-sheet class="pa-5" :width="500" rounded>
                      <h2>Change your image</h2>
                      <v-file-input clearable label="Select Photo" variant="outlined" class="mt-5"></v-file-input>
                    </v-sheet>
                  </v-overlay>
                </v-btn>
              </div>

              <!-- Text Fields -->
              <div class="w-50">
                <v-row>
                  <v-col cols="12" sm="6">
                    <p>First Name</p>
                    <v-text-field 
                    placeholder="First Name" 
                    variant="outlined" 
                    density="compact"
                    :model-value= "userStore.user.first_name" 
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <p>Last Name</p>
                    <v-text-field 
                    placeholder="Last Name" 
                    variant="outlined" 
                    density="compact"
                    :model-value= "userStore.user.last_name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12">
                    <p>About</p>
                    <v-textarea
                      placeholder="About"
                      row-height="25"
                      rows="3"
                      variant="outlined"
                      auto-grow
                      shaped
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <p>Username</p>
                    <v-text-field 
                    placeholder="Username" 
                    variant="outlined" 
                    density="compact"
                    :model-value= "userStore.user.username"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <div class="d-flex align-end justify-end w-100 mt-5">
                  <v-btn color="grey-lighten-2" class=" mr-3">Discard</v-btn>
                  <v-btn color="#06151cff" class="px-8">save</v-btn>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useUserStore } from "@/store/user";

const userStore = useUserStore(); 
</script>

<style scoped>
.btn-add {
  background-color: #11212D;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
}

.btn-add:hover {
  background-color: #000000;
}

.btn-added {
  background-color: #57778F;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
}
</style>
