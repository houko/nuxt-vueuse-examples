<template>
  <div>
    <input ref="inputRef" placeholder="Start typing..." />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onStartTyping } from "@vueuse/core";

const inputRef = ref<HTMLInputElement | null>(null);

onStartTyping(() => {
  console.log("User has started typing!");
  inputRef.value?.focus();
});
</script>
