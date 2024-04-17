<script setup lang="ts">
import { computed } from "vue";
import { useIdle, useTimestamp } from "@vueuse/core";

const { idle, lastActive } = useIdle(5000);

const now = useTimestamp({ interval: 1000 });

const idledFor = computed(() =>
  Math.floor((now.value - lastActive.value) / 1000),
);
</script>

<template>
  <note class="mb-2">
    For demonstration purpose, the idle timeout is set to <b>5s</b> in this demo
    (default 1min).
  </note>
  <div>
    Idle:
    <span :class="idle ? 'text-red-500' : 'text-yellow-500'">{{ idle }}</span>
  </div>
  <div>
    不活跃: <b class="text-green-400">{{ idledFor }}s</b>
  </div>
</template>
