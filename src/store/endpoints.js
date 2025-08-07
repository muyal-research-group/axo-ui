import { defineStore } from "pinia";
import { ref } from "vue";

const CRYPTOMESH_URL = `http://localhost:19000`
const CRYPTOMESH_API_VERSION = `v1`

export const useEndpointsStore = defineStore('endpoints', ()=>{
    const endpoints = ref([])

    async function get_endpoints(){
        try {
            const response = await fetch(`${CRYPTOMESH_URL}/api/${CRYPTOMESH_API_VERSION}/endpoints/`)
            // console.log("GET.ENDPOINTS.RESPONSE", response)
            const data_json = await response.json()
            // console.log("DATA",data_json)
            endpoints.value = data_json
            return {color:"success"}
        } catch (error) {
            console.error('Error', error);
            const message = error?.message ?? "Unknown error, please contact us on support@axo.mx"

            return {color:"error", message}
        }

    }

    return {get_endpoints, endpoints}
})