<script setup lang="ts">
import { useGeolocation } from "@vueuse/core";

const { coords, locatedAt, error, resume, pause } = useGeolocation();
</script>

<template>
  <div>
    <pre lang="json">{{
      JSON.stringify(
        {
          coords: {
            accuracy: coords.accuracy,
            latitude: coords.latitude,
            longitude: coords.longitude,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy,
            heading: coords.heading,
            speed: coords.speed,
          },
          locatedAt,
          error: error ? error.message : error,
        },
        null,
        2,
      )
    }}</pre>
    <el-button @click="pause">Pause watch</el-button>
    <el-button @click="resume">Start watch</el-button>
  </div>
</template>
