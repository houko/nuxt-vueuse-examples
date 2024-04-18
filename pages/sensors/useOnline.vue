<script setup lang="ts">
import { computed } from "vue";
import { useOnline } from "@vueuse/core";

const online = useOnline();

const clazz = computed(() =>
  online.value ? "text-green-500" : "text-red-500",
);
const text = computed(() => (online.value ? "Online" : "Offline"));
</script>

<template>
  <span class="mb-2"> Disconnect your network to see changes </span>
  <div>
    Status: <b :class="clazz">{{ text }}</b>
  </div>
</template>
