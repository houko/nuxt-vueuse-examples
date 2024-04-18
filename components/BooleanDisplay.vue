<template>
  <div>{{ value ? "True" : "False" }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  value: Boolean,
});
</script>
