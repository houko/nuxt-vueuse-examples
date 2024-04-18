<template>
  <div class="container" tabindex="0" @keyup.esc="stop()">
    <div ref="box" class="box" @click="animate">Click me</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSpring, useMotionProperties } from "@vueuse/motion";

const box = ref(null);

const { motionProperties } = useMotionProperties(box, {
  x: 0,
  y: 0,
});

const { set, stop } = useSpring(motionProperties, {
  duration: 1000,
  bounce: 0.0,
});

function animate() {
  set({
    x: Math.random() * 400,
    y: Math.random() * 400,
  });
}
</script>

<style scoped>
.container {
  width: 500px;
  height: 500px;
  outline: 2px solid #41b883;
}
.box {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #41b883;
  color: white;
}
</style>
