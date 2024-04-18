<script setup lang="ts">
import { reactive, ref } from "vue";
import { useMouseInElement } from "@vueuse/core";
import Area from "~/components/Area.vue";

const target = ref(null);
const mouse = reactive(useMouseInElement(target));
const text = JSON.stringify(mouse);
</script>

<template>
  <div class="flex gap-4">
    <Area ref="target" class="flex-grow" />
    <pre class="language-yaml">{{ text }}</pre>
  </div>
</template>
