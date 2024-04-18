<template>
  <div>
    <h1>from</h1>
    <p>Count: {{ count }}</p>
    <button ref="button">Stop</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { from, fromEvent, toObserver, useSubscription } from "@vueuse/rxjs";
import { interval } from "rxjs";
import { map, takeUntil, withLatestFrom } from "rxjs/operators";

const count = ref(0);
const button = ref<HTMLButtonElement | null>(null);

useSubscription(
  interval(1000)
    .pipe(
      map(() => 1),
      takeUntil(fromEvent(button.value!, "click")),
      withLatestFrom(
        from(count, {
          immediate: true,
          deep: false,
        }),
      ),
      map(([curr, total]) => curr + total),
    )
    .subscribe(toObserver(count)), // same as ).subscribe(val => (count.value = val))
);
</script>
