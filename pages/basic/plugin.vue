<template>
  <div>
    <h1>Plugin</h1>
    <p>Plugin page</p>
    <p>{{ $hello("xiaomo") }}</p>
  </div>
</template>

<script setup lang="ts">
const { $hello } = useNuxtApp();
$hello("xiaomo");
</script>
