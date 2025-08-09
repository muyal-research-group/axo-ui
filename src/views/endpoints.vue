<template>
  <v-main class="d-flex-column justify-center align-center pa-5" style="min-height: 300px">
    <v-container>
      <div class="d-flex flex-column">
        <div class="d-flex">
          <h1>Endpoints</h1>
          <v-spacer></v-spacer>
          <SearchBar @update:search="handleSearch" />
        </div>
        <v-divider></v-divider>
        <div class="mt-5 pa-5">
          <CardVariant
            v-for="(ep, index) in endpointsStore.endpoints"
            :key="index"
            :title="`Endpoint: ${ep.name}`"
            :description="`CPU: ${ep.resources.cpu} / RAM: ${ep.resources.ram}`"
            :autor="ep.created_at"
          >
            <template #button>
              <button
                @click="handleAdd(ep)"
                :class="ep.added ? 'btn-added' : 'btn-add'"
                :disabled="ep.added"
              >
                {{ ep.added ? "Added" : "Add" }}
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
import { useEndpointsStore } from "@/store/endpoints"
import { ref, onMounted } from "vue"

const endpointsStore = useEndpointsStore()

onMounted(async () => {
  await endpointsStore.get_endpoints()
})

const currentSearch = ref("")
const handleSearch = (search) => {
  currentSearch.value = search
}

const handleAdd = (endpoint) => {
  endpoint.added = true
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
