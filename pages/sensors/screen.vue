<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useDisplayMedia } from "@vueuse/core";

const video = ref<HTMLVideoElement>();
const { stream, enabled } = useDisplayMedia();

watchEffect(() => {
  if (video.value) video.value.srcObject = stream.value!;
});
</script>

<template>
  <div class="flex flex-col gap-4 text-center">
    <div>
      <button class="border p-3" @click="enabled = !enabled">
        {{ enabled ? "Stop" : "Start" }} Sharing
      </button>
    </div>

    <div>
      <video ref="video" muted autoplay controls class="h-screen w-full" />
    </div>
  </div>
</template>
