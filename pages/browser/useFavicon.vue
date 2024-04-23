<script setup lang="ts">
import { computed, ref } from "vue";
import { useFavicon } from "@vueuse/core";

const type = ref("vueuse");

const favicon = computed(() =>
  type.value === "vue" ? "~/vue.png" : "~/nap.png",
);

useFavicon(favicon, {
  baseUrl: "/",
  rel: "icon",
});
</script>

<template>
  <div>Change favicon to</div>
  <el-button @click="type = 'vue'">Vue</el-button>
  <el-button @click="type = 'vueuse'">VueUse</el-button>
</template>
