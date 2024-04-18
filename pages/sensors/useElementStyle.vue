<template>
  <div ref="target">hello</div>
  <el-button @click="hide()">Hide</el-button>
  <el-button @click="show()">Show</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useElementStyle, useElementTransform } from "@vueuse/motion";
const target = ref<HTMLElement>();

const { style } = useElementStyle(target);
const { transform } = useElementTransform(target);

const show = () => {
  style.opacity = 1;
  style.backgroundColor = "green";
  style.color = "white";
  transform.translateX = "50px";
  console.log("showing...");
};
const hide = () => {
  style.opacity = 0;
  transform.translateX = "-50px";
  console.log("hiding...");
};
</script>
