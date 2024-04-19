<script setup lang="ts">
import { reactive } from "vue";
import type { Rules } from "async-validator";
import { useAsyncValidator } from "@vueuse/integrations/useAsyncValidator";

const form = reactive({ email: "", name: "", age: "" });
const rules: Rules = {
  name: {
    type: "string",
    min: 5,
    max: 20,
    required: true,
  },
  age: {
    type: "number",
    required: true,
  },
  email: [
    {
      type: "email",
      required: true,
    },
  ],
};

const { pass, isFinished, errorFields } = useAsyncValidator(form, rules);
</script>

<template>
  <div>
    <code>pass:</code>
    <BooleanDisplay :value="pass" />
  </div>
  <div>
    <code>isFinished:</code>
    <BooleanDisplay :value="isFinished" />
  </div>

  <hr />

  <div class="flex gap-2">
    <div>
      Email
      <el-input
        v-model="form.email"
        :class="{ '!border-red': errorFields?.email?.length }"
        type="text"
        placeholder="Email"
      />
      <div v-if="errorFields?.email?.length" class="text-red-500">
        {{ errorFields.email[0].message }}
      </div>
    </div>
    <div>
      Name
      <el-input
        v-model="form.name"
        :class="{ '!border-red': errorFields?.name?.length }"
        type="text"
        placeholder="Name"
      />
      <div v-if="errorFields?.name?.length" class="text-red-500">
        {{ errorFields.name[0].message }}
      </div>
    </div>
    <div>
      Age
      <el-input
        v-model.number="form.age"
        :class="{ '!border-red': errorFields?.age?.length }"
        type="number"
        placeholder="Age"
      />
      <div v-if="errorFields?.age?.length" class="text-red-500">
        {{ errorFields.age[0].message }}
      </div>
    </div>
    <div>
      <el-button :disabled="!pass">Submit</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.border-red {
  border-color: red;
}
</style>
