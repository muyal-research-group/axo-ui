import { defineStore } from "pinia";
import { ref } from "vue";

const CRYPTOMESH_URL = `http://localhost:19000`
const CRYPTOMESH_API_VERSION = `v1`

export const useServicesStore = defineStore('services', ()=>{
    const services = ref([])

    async function get_services(){
        try {
            const response = await fetch(`${CRYPTOMESH_URL}/api/${CRYPTOMESH_API_VERSION}/services/`)
            // console.log("GET.SERVICES.RESPONSE", response)
            const data_json = await response.json()
            // console.log("DATA",data_json)
            services.value = data_json
            return {color:"success"}
        } catch (error) {
            console.error('Error', error);
            const message = error?.message ?? "Uknown error, please contact us on support@axo.mx"

            return {color:"error", message}
        }
    }

    return {get_services ,services}
})