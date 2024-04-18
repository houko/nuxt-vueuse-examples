<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll({ behavior: "smooth" });
</script>

<template>
  <div>
    <div>See scroll values in the lower right corner of the screen.</div>
    <div class="scroller" />
    <div class="fixed bottom-0 right-0 bg-green-300">
      <div class="m-5">Scroll value</div>
      x: {{ x }}<br />
      y: {{ y }}
    </div>
  </div>
  <el-button @click="x += 200">scroll X</el-button>
  <el-button @click="y += 200">scroll Y</el-button>
</template>

<style scoped>
.scroller {
  position: absolute;
  top: 100%;
  left: 100%;
  width: 10000px;
  height: 10000px;
}
</style>
