<template>
  <div>router</div>
</template>

<script setup lang="ts">
import { useRouteHash } from "@vueuse/router";

const search = useRouteHash();
console.log(search.value); // route.hash
search.value = "/screen"; // router.replace({ hash: 'foobar' })
</script>
