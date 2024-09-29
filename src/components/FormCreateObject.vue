<template >
  <v-card
    class=" d-flex flex-column pa-2"
    max-width="344"
  >
    <v-form  
    fast-fail 
    @submit.prevent
    >
      <v-text-field
        v-model="class_name"
        label="Class name"
        variant="filled"       
      ></v-text-field>
      <v-text-field
        v-model="bucket_id"
        label="Bucket id"
        variant="filled"   
      ></v-text-field>
      <v-text-field
        v-model="output_key"
        label="Output Key"
        variant="filled"   
      ></v-text-field>
      <v-text-field
        v-model="attribute"
        label="Attribute"
        variant="filled"   
      ></v-text-field>
      <v-text-field
        v-model="another_attribute"
        label="Another Attribute"
        variant="filled"   
      ></v-text-field>
      <v-btn
          :loading="loading"
          color="#11222eff"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Save
        </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const class_name = ref('')
const bucket_id = ref('')
const output_key = ref('')
const attribute = ref('')
const another_attribute = ref('')

</script>