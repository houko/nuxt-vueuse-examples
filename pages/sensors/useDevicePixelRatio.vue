<script setup lang="ts">
import { reactive } from "vue";
import { useDevicePixelRatio } from "@vueuse/core";

const { pixelRatio } = reactive(useDevicePixelRatio());
</script>

<template>
  <div>Device Pixel Ratio:</div>
  <pre>{{ pixelRatio }}</pre>
</template>
