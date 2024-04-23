<script setup lang="ts">
import { useTitle } from "@vueuse/core";

const title = useTitle(null);
</script>

<template>
  <div>Title</div>
  <el-input v-model="title" type="text" />
</template>
