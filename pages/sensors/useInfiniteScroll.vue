<script setup lang="ts">
import { ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";

const el = ref<HTMLElement | null>(null);
const data = ref([1]);

useInfiniteScroll(
  el,
  () => {
    const length = data.value.length + 1;
    data.value.push(...Array.from({ length: 5 }, (_, i) => length + i));
  },
  { distance: 10 },
);
</script>

<template>
  <div
    ref="el"
    class="flex flex-col gap-2 p-4 w-48 h-96 m-auto overflow-y-scroll bg-gray-500 rounded"
  >
    <div v-for="item in data" :key="item" class="h-12 bg-gray-500 rounded p-3">
      {{ item }}
    </div>
  </div>
</template>
