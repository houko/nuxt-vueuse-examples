<template>
  <div>{{ formatNumber(1234) }}</div>
  <div>{{ random([1, 2, 3, 4, 5]) }}</div>
</template>

<script setup lang="ts">
import random from "~/utils/random";
import { formatNumber } from "~/utils/format";
</script>
