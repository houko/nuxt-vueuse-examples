<script setup lang="ts">
import { useAxios } from "@vueuse/integrations";

const { data, isLoading, isFinished, execute, abort, isAborted } = useAxios(
  "https://jsonplaceholder.typicode.com/todos/1",
);
const text = JSON.stringify(data);
</script>

<template>
  <el-button @click="execute()"> Execute </el-button>
  <el-button @click="abort()"> Abort </el-button>
  <div>Loading: {{ isLoading.toString() }}</div>
  <div>Finished: {{ isFinished.toString() }}</div>
  <div>Aborted: {{ isAborted.toString() }}</div>
  <pre lang="yaml">{{ text }}</pre>
</template>
