<template>
  <v-main class="d-flex-column justify-center align-center pa-5" style="min-height: 300px">
    <v-container>
      <div class="d-flex flex-column">
        <div class="d-flex">
          <h1>Microservices</h1>
          <v-spacer></v-spacer>
          <SearchBar @update:search="handleSearch" />
        </div>
        <v-divider></v-divider>
        <div class="mt-5 pa-5">
          <CardVariant
            v-for="(ms, index) in microservicesStore.microservices"
            :key="index"
            :title="`Microservice: ${ms.microservice_id}`"
             :description="`CPU: ${ms.resources.cpu} / RAM: ${ms.resources.ram}`"
            :autor="ms.created_at"
          >
            <template #button>
              <button
                @click="handleAdd(ms)"
                :class="ms.added ? 'btn-added' : 'btn-add'"
                :disabled="ms.added"
              >
                {{ ms.added ? "Added" : "Add" }}
              </button>
            </template>
          </CardVariant>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script setup>
import SearchBar from "@/components/SearchBar.vue"
import CardVariant from "@/components/CardVariant.vue"
import { useMicroservicesStore } from "@/store/microservices"
import { ref, onMounted } from "vue"

const microservicesStore = useMicroservicesStore()

onMounted(async () => {
  await microservicesStore.get_microservices()
})

const currentSearch = ref("")
const handleSearch = (search) => {
  currentSearch.value = search
}

const handleAdd = (microservice) => {
  microservice.added = true
}
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
