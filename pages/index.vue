<template>
  <div>i18n: {{ t("home.welcome") }}</div>
  <div v-html="t('home.welcome1')"></div>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n();
console.log(locale.value);
</script>
