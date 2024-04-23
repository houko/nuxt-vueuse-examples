<script setup lang="ts">
import { ref } from "vue";
import { useClipboard, usePermission } from "@vueuse/core";

const input = ref("");

const { text, isSupported, copy } = useClipboard();
const permissionRead = usePermission("clipboard-read");
const permissionWrite = usePermission("clipboard-write");
</script>

<template>
  <div v-if="isSupported">
    <div>
      Clipboard Permission: read <b>{{ permissionRead }}</b> | write
      <b>{{ permissionWrite }}</b>
    </div>
    <p>
      Current copied:
      <code :class="text ? 'text-green-500' : 'text-gray-500'">{{
        text || "none"
      }}</code>
    </p>
    <el-input v-model="input" type="text" />
    <el-button @click="copy(input)">Copy</el-button>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>
