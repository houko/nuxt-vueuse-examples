<template>
  <div
    grid="~ flow-col gap-4"
    place="content-center items-center"
    h="screen"
    font="mono"
  >
    <div
      font="mono"
      bg="light-500 dark:dark-500"
      flex="~ col"
      text="center"
      p="2"
      border="rounded"
    >
      <div text="sm dark:light-900 dark:opacity-50" m="t-2">Mouse {{ x }}</div>
      <div text="sm dark:light-900 dark:opacity-50" m="t-2">Mouse {{ y }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>
