<script setup>
import { OnClickOutside } from "@vueuse/components";

const value = ref(3.1415);
const result = usePrecision(value, 2); // 3.14

const ceilResult = usePrecision(value, 2, {
  math: "ceil",
}); // 3.15

const floorResult = usePrecision(value, 3, {
  math: "floor",
}); // 3.141
console.log(result.value, ceilResult.value, floorResult.value);

function close() {
  console.log("clicked outside");
}
</script>

<template>
  <OnClickOutside @trigger="close">
    <div class="w-96 h-96 bg-pink-200 text-center align-middle">
      Click Outside of Me
    </div>
  </OnClickOutside>
</template>
