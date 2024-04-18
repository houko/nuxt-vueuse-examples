<template>
  <div>
    <div>{{ acceleration }}</div>
    <div>{{ accelerationIncludingGravity }}</div>
    <div>{{ rotationRate }}</div>
    <div>{{ interval }}</div>
  </div>
</template>

<script setup lang="ts">
import { useDeviceMotion } from "@vueuse/core";

const { acceleration, accelerationIncludingGravity, rotationRate, interval } =
  useDeviceMotion();
</script>
