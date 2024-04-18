<script setup lang="ts">
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";
import BooleanDisplay from "~/components/BooleanDisplay.vue";

const el = ref(null);
const isVisible = useElementVisibility(el);
</script>

<template>
  <div class="h-screen">
    <div class="mb-2">Info on the right bottom corner</div>
    <div
      ref="el"
      class="max-w-full relative bg-green-500 dark:bg-gray-800 shadow-lg z-60"
    >
      Target Element (scroll down)
    </div>
  </div>
  <div class="fixed bottom-0 right-0 m-3 shadow-lg">
    Element
    <BooleanDisplay
      :value="isVisible"
      true="inside"
      false="outside"
      class="font-bold"
    />
    the viewport
  </div>
</template>
