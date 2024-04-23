<script setup lang="ts">
import { useStyleTag } from "@vueuse/core";

const customCSS = `
.demo { background: #ad4c2e50; }
.demo textarea { background: lightyellow; }
`.trim();

const { id, css, load, unload, isLoaded } = useStyleTag(customCSS);
</script>

<template>
  <div>
    Edit CSS:
    <textarea v-model="css" type="text" rows="2" class="w-full" />
  </div>
  <el-button :disabled="isLoaded" @click="load">Load</el-button>
  <el-button class="orange" :disabled="!isLoaded" @click="unload"
    >Unload</el-button
  >
  <div class="demo">
    <p>
      ID: <code>{{ id }}</code>
    </p>
    <p>
      Loaded: <code>{{ isLoaded }}</code>
    </p>
  </div>
</template>
