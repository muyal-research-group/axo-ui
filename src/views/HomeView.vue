<template>
  <!-- main -->
  <v-main
    class="d-flex-column justify-center align-center pa-5"
    style="min-height: 300px"
  >
    <v-container>
      <div class="d-flex flex-column">
        <div class="d-flex">
          <h1>Home</h1>
          <v-spacer></v-spacer>
          <!-- barra busqueda -->
          <SearchBar @update:search="handleSearch" />
        </div>
        <v-divider></v-divider>
        <div class="mt-5 pa-5">
          <CardVariant
            v-for="(service, id) in services_store.services"
            :key="id"
            :title="`Service ${service.service_id}`"
            :description="`${service.resources.cpu} core ${service.resources.cpu>1 ? 's':''} /${service.resources.ram}`"
            :autor="service.created_at"
          >
            <!-- boton agregar -->
            <template #button>
              <button
                @click="handleAdd(service)"
                :class="service.added ? 'btn-added' : 'btn-add'"
                :disabled="service.added"
              >
                {{ service.added ? "Added" : "Add" }}
              </button>
            </template>
          </CardVariant>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script setup>
import SearchBar from "@/components/SearchBar.vue";
import CardVariant from "@/components/CardVariant.vue";
import {useServicesStore} from "@/store/services"
import { ref, onMounted} from "vue";

const services_store = useServicesStore()
// const services = ref([])


onMounted(async ()=>{
  const result = await services_store.get_services()
  // services.value = result.services.value


})

const currentSearch = ref("");
const handleSearch = (search) => {
  currentSearch.value = search;
};



</script>






<style scoped>
.btn-add {
  background-color: #11212d;
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
  background-color: #57778f;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
}
</style>
