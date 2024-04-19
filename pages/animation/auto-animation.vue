<script setup lang="ts">
import { ref } from "vue";
const items = ref(["😏", "😐", "😑", "😒", "😕"]);
function removeItem(toRemove: string) {
  items.value = items.value.filter((item) => item !== toRemove);
}

function reset() {
  items.value = ["😏", "😐", "😑", "😒", "😕"];
}

function undo() {
  items.value = [...items.value, "😏"];
}
</script>

<template>
  <h5>Click emojis to remove them.</h5>
  <ul v-auto-animate>
    <li v-for="item in items" :key="item" @click="removeItem(item)">
      {{ item }}
    </li>
  </ul>
  <el-button @click="undo">撤销</el-button>
  <el-button @click="reset">reset</el-button>
</template>
