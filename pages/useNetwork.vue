<script setup lang="ts">
import { reactive } from "vue";
import { useNetwork } from "@vueuse/core";

const {
  isSupported,
  isOnline,
  saveData,
  onlineAt,
  downlink,
  effectiveType,
  rtt,
} = reactive(useNetwork());
</script>

<template>
  <div>
    <div>是否支持： {{ isSupported }}</div>
    <div>在线： {{ isOnline }}</div>
    <div>保存数据： {{ saveData }}</div>
    <div>在线时间： {{ onlineAt }}</div>
    <div>downlink： {{ downlink }}</div>
    <div>effectiveType： {{ effectiveType }}</div>
    <div>rtt： {{ rtt }}</div>
  </div>
</template>
