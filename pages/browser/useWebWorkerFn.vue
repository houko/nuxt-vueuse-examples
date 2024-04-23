<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { useDateFormat, useTimestamp, useWebWorkerFn } from "@vueuse/core";

function heavyTask() {
  const randomNumber = () => Math.trunc(Math.random() * 5_000_00);
  const numbers: number[] = Array(5_000_000).fill(undefined).map(randomNumber);
  numbers.sort();
  return numbers.slice(0, 500);
}

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(heavyTask);
const time = useTimestamp();
const computedTime = useDateFormat(time, "YYYY-MM-DD HH:mm:ss SSS");
const running = computed(() => workerStatus.value === "RUNNING");

const data = ref<number[] | null>(null);
const runner = ref("");

async function baseSort() {
  data.value = null;
  await nextTick();
  data.value = heavyTask();
  runner.value = "Main";
}

async function workerSort() {
  data.value = null;
  await nextTick();
  data.value = await workerFn();
  runner.value = "Worker";
}
</script>

<template>
  <div>
    <p>
      Current Time: <b>{{ computedTime }}</b>
    </p>
    <div class="mb-2">
      This is a demo showing sort for large array (5 million numbers) with or
      w/o WebWorker.<br />Clock stops when UI blocking happens.
    </div>
    <el-button @click="baseSort">Sort in Main Thread</el-button>
    <el-button v-if="!running" @click="workerSort">Sort in Worker</el-button>
    <el-button
      v-else
      class="text-orange-500"
      @click="workerTerminate('PENDING')"
    >
      Terminate Worker
    </el-button>
    <p v-if="data">
      Thread: <strong>{{ runner }}</strong
      ><br />
      Result: <strong>{{ data }}</strong>
    </p>
  </div>
</template>
