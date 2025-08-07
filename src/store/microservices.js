// src/stores/microservices.js
import { defineStore } from "pinia";
import { ref } from "vue";

const CRYPTOMESH_URL = `http://localhost:19000`;
const CRYPTOMESH_API_VERSION = `v1`;

export const useMicroservicesStore = defineStore('microservices', () => {
  const microservices = ref([]);

  async function get_microservices() {
    try {
      const response = await fetch(`${CRYPTOMESH_URL}/api/${CRYPTOMESH_API_VERSION}/microservices/`);
      const data_json = await response.json();
      microservices.value = data_json;
      return { color: "success" };
    } catch (error) {
      console.error('Error', error);
      const message = error?.message ?? "Unknown error, please contact us on support@axo.mx";
      return { color: "error", message };
    }
  }

  return { get_microservices, microservices };
});
