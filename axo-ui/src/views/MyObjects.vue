<template>
    <!-- barra navegacion -->
    <AppBar />
    <!-- sidebar -->
    <NavDrawer />
    <!-- main -->
        <v-main 
        class="d-flex-column justify-center align-center pa-5"
        style="min-height: 300px;"
        >
            <div class="d-flex flex-column">
                <div class="d-flex">
                    <h1>My Objects</h1>
                    <v-spacer></v-spacer>
                    <!-- barra busqueda -->
                    <SearchBar @update:search="handleSearch"  />             
                </div>
                <v-divider ></v-divider>
                <div class="mt-5 pa-5">
                    <!--en esta funcion se rellena el cuerpo del home con los datos del usuario-->
                    <CardVariant 
                    v-for="(object, id) in objects"
                    :key="id"
                    :title="object.title"
                    :description="object.description"
                    :autor="object.autor"
                    >
                    <template #button>
                        <button class="btn-add">
                            Editar
                        </button>
                    </template>
                    </CardVariant>
                </div>
            
            </div>                    
        </v-main>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import SearchBar from '@/components/SearchBar.vue';
import CardVariant from '@/components/CardVariant.vue';
import { ref } from 'vue';

const currentSearch = ref('');
const handleSearch = (search) => {
  currentSearch.value = search; 
};

const objects = ref([
    {
        id: 1,
        title: 'Object 1',
        description: 'Description',
        autor: 'User',
        added: false
    },
    {
        id: 2,
        title: 'Object 2',
        description: 'Description',
        autor: 'User',
        added: false
    },
]);



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
  background-color: #A9A9A9;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
}

.btn-added:hover {
  background-color: #808080;
}

</style>

