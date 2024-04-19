<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <NuxtImg
      src="https://image.xiaomo.info/logo/logo.png"
      :placeholder="[30, 20]"
      width="100"
      height="80"
      class="rounded"
    />
    <NuxtPicture
      format="avif,webp"
      width="375"
      height="250"
      sizes="xs:200px md:500px lg:1024"
      src="https://image.xiaomo.info/logo/logo.png"
    />
    <el-select v-model="$colorMode.preference">
      <el-option value="system">System</el-option>
      <el-option value="light">Light</el-option>
      <el-option value="dark">Dark</el-option>
      <el-option value="sepia">Sepia</el-option>
    </el-select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
