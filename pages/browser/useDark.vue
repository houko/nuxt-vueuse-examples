<script setup lang="ts">
import { ref } from "vue";
import { useToggle } from "@vueuse/core";

const isDark = ref(false);
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    :class="[
      isDark.value ? 'carbon-moon' : 'carbon-sun',
      'inline-block',
      'align-middle',
    ]"
  >
    <el-button @click="toggleDark" class="flex items-center">
      <i
        :class="[
          isDark.value ? 'carbon-moon' : 'carbon-sun',
          'inline-block',
          'align-middle',
        ]"
      />
      <span class="ml-2">{{ isDark.value ? "Dark" : "Light" }}</span>
    </el-button>
  </div>
</template>
