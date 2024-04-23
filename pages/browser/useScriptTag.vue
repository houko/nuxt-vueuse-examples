<template>
  <div>useScriptTag</div>
</template>

<script setup lang="ts">
import { useScriptTag } from "@vueuse/core";

useScriptTag(
  "https://code.jquery.com/jquery-3.7.1.js",
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
    console.log(el);
  },
);
</script>
