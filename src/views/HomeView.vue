<template>
    <!-- barra navegacion -->
    <AppBar />
    <!-- main -->
        <v-main 
        class="d-flex-column justify-center align-center pa-5"
        style="min-height: 300px;"
        >
            <div class="d-flex flex-column">
                <div class="d-flex">
                    <h1>Home</h1>
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
                    <!-- boton agregar -->
                    <template #button>
                        <button 
                        @click="handleAdd(object)"
                        :class="  object.added ? 'btn-added' : 'btn-add' "
                        :disabled="object.added"
                        >
                        {{ object.added ? 'Added' : 'Add' }}    
                        </button>
                    </template>
                    </CardVariant>
                </div>           
            </div>                    
        </v-main>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
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

//funcion boton para agregar
const handleAdd = (object) => {
    object.added = !object.added
}

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

