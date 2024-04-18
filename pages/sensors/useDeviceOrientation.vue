<template>
  <div>
    <div>是否支持：{{ isSupported }}</div>
    <div>是否绝对：{{ isAbsolute }}</div>
    <div>透明度：{{ alpha }}</div>
    <div>beta: {{ beta }}</div>
    <div>gamma: {{ gamma }}</div>
  </div>
</template>

<script setup lang="ts">
import { useDeviceOrientation } from "@vueuse/core";

const { isSupported, isAbsolute, alpha, beta, gamma } = useDeviceOrientation();
</script>
