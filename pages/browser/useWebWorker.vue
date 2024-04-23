<script setup lang="ts">
import { ref } from "vue";
import { useWebWorker } from "@vueuse/core";

// Assuming you have a worker.js file at public/worker.js
const worker = useWebWorker("/worker.js");

const input = ref(0);
const sendToWorker = () => {
  worker.worker.value?.postMessage(input.value);
};
</script>

<template>
  <div>
    <input v-model.number="input" type="number" placeholder="Enter a number" />
    <button @click="sendToWorker">Calculate square</button>
  </div>
</template>
