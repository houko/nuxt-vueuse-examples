<template>
  <div>
    <div>支持： {{ isSupported }}</div>
    <div>是否在充电:{{ charging }}</div>
    <div>充电时间:{{ chargingTime }}</div>
    <div>可用时间:{{ dischargingTime }}</div>
    <div>等级:{{ level }}</div>
  </div>
</template>

<script setup lang="ts">
import { useBattery } from "@vueuse/core";

const { isSupported, charging, chargingTime, dischargingTime, level } =
  useBattery();
</script>
