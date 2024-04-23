<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

const key = ref("");

const cleanup = useEventListener(document, "keydown", (e) => {
  console.log(e.key);
  key.value = e.key;
});

// 这将注销监听器。
// This will unregister the listener.
// cleanup();
</script>

<template>
  <div ref="element">{{ `you pressed ${key}` }}</div>
</template>
