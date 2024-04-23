<script setup lang="ts">
import { createGlobalState, useStorage } from "@vueuse/core";

const useState = createGlobalState(() =>
  useStorage("vue-use-locale-storage", {
    name: "Banana",
    color: "Yellow",
    size: "Medium",
  }),
);

const state = useState();
const text = JSON.stringify(state);
</script>

<template>
  <div>
    <el-input v-model="state.name" type="text" />
    <el-input v-model="state.color" type="text" />
    <el-input v-model="state.size" type="text" />

    <pre lang="yaml">{{ text }}</pre>
  </div>
</template>
