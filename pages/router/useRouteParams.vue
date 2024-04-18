<template>
  <div>router</div>
</template>

<script setup lang="ts">
import { useRouteParams } from "@vueuse/router";

const userId: any = useRouteParams("userId", "-1"); // or with a default value

console.log(userId.value); // route.params.userId
userId.value = "100"; // router.replace({ params: { userId: '100' } })
</script>
