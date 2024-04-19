<template>
  <div>
    <strong>locale</strong>: {{ cookies.get("locale") }}
    <hr />
    <pre>{{ cookies.getAll() }}</pre>
    <el-button @click="cookies.set('locale', 'ru-RU')">Russian</el-button>
    <el-button @click="cookies.set('locale', 'en-US')">English</el-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";

export default defineComponent({
  setup() {
    const cookies = useCookies(["locale"]);
    return {
      cookies,
    };
  },
});
</script>
