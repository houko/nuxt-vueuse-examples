<template>
  <div ref="target">hello</div>
  <el-button @click="moveLeft()">moveLeft</el-button>
  <el-button @click="moveRight()">moveRight</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useElementTransform } from "@vueuse/motion";
const target = ref<HTMLElement>();

const { transform } = useElementTransform(target);

const moveRight = () => {
  transform.translateX = "50px";
  console.log("moveRight...");
};
const moveLeft = () => {
  transform.translateX = "0px";
  console.log("moveLeft...");
};
</script>
