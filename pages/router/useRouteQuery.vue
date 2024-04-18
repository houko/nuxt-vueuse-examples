<template>
  <div>router</div>
</template>

<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";

const search: Ref<null | string | string[]> = useRouteQuery("search", "foo");

console.log(search.value); // route.query.search
search.value = "foobar"; // router.replace({ query: { search: 'foobar' } })
</script>
