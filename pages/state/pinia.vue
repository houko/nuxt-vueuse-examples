<script setup lang="ts">
import { useCounterStore } from "~/stores";
const store = useCounterStore();
const { options, totalClicks } = storeToRefs(store);
</script>

<template>
  <h2>Total Click: {{ totalClicks }}</h2>

  <div class="card">
    <el-button @click="store.increment('a')">
      A {{ options["a"] }} times
    </el-button>

    <el-button @click="store.delayedIncrement('b')">
      delay B {{ options["b"] }} times
    </el-button>

    <el-button @click="store.increment('c')">
      C {{ options["c"] }} times
    </el-button>
  </div>
</template>
