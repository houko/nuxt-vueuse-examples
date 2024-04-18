<script setup lang="ts">
import { reactive, ref } from "vue";
import { useElementBounding } from "@vueuse/core";

const el = ref(null);
const rect = reactive(useElementBounding(el));
const text = JSON.stringify(rect);
</script>

<template>
  <div class="min-w-32 w-32">
    <div class="mb-2">Resize the box to see changes</div>
    <textarea ref="el" readonly class="resizer" :value="text" />
  </div>
</template>
