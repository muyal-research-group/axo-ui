<template>
  <v-main class="d-flex-column justify-center align-center pa-5" style="min-height: 300px">
    <v-container>
      <div class="d-flex flex-column">
        <div class="d-flex">
          <h1>Functions</h1>
          <v-spacer></v-spacer>
          <SearchBar @update:search="handleSearch" />
        </div>
        <v-divider></v-divider>
        <div class="mt-5 pa-5">
          <CardVariant
            v-for="(func, index) in filteredFunctions"
            :key="index"
            :title="`Function: ${func.function_id || func.name || 'N/A'}`"
            :description="`Microservice: ${func.microservice_id || 'N/A'} | Deployment: ${func.deployment_status || 'N/A'}`"
            :autor="func.created_at || 'N/A'"
          >
            <template #button>
              <button
                @click="handleAdd(func)"
                :class="func.added ? 'btn-added' : 'btn-add'"
                :disabled="func.added"
              >
                {{ func.added ? "Added" : "Add" }}
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
import { useFunctionsStore } from "@/store/functions";
import { ref, onMounted, computed } from "vue";

const functionsStore = useFunctionsStore();
const currentSearch = ref("");

onMounted(async () => {
  await functionsStore.get_functions();
});

const handleSearch = (search) => {
  currentSearch.value = search;
};

const handleAdd = (func) => {
  func.added = true;
};

const filteredFunctions = computed(() => {
  if (!currentSearch.value) return functionsStore.functions;
  return functionsStore.functions.filter((func) =>
    (func.function_id || func.name || "")
      .toLowerCase()
      .includes(currentSearch.value.toLowerCase())
  );
});
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
  cursor: not-allowed;
  margin-left: 15px;
}
</style>
