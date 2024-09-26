<template>
    <div class="card">
        <div class="img"></div>
        <div class="textBox">
            <div class="textContent">
                <div class="w-75">
                    <p class="h1">{{ props.title  }}</p>
                    <div class="w-70">
                    <p class="p">{{ props.description }}</p>
                </div>
            </div>
            <div class="d-flex">
                <span class="span">
                    <v-icon small>mdi-account</v-icon>
                    {{ props.autor }}
                </span>
                <v-btn
                    class="text-none
                    pa-1 ml-5 "
                    color="#1B3345"
                    size="extra-small"
                    variant="flat"
                >
                Add
                </v-btn>
            </div>         
        </div>
    </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

.card {
  width: 100%;
  max-width: 700px;
  height: 90px;
  background: #d9d8d8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  /* backdrop-filter: blur(10px); */
  transition: 0.4s ease-in-out;
  margin-bottom: 15px;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.img {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  background: linear-gradient(#d7cfcf, #11212D);
}

/* .card:hover > .img {
  transition: 0.5s ease-in-out;
  background: linear-gradient(#9198e5, #712020);
} */

.textBox {
  width: calc(100% - 90px);
  margin-left: 10px;
  color: rgb(0, 0, 0);
  font-family: 'Poppins' sans-serif;
}

.textContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.span {
  font-size: 10px;
  color: #4a4a4a;
}

.h1 {
  font-size: 16px;
  font-weight: bold;
}

.p {
  font-size: 12px;
  
  font-weight: normal;
}
</style>