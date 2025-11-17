<script setup>
import { useField } from "vee-validate";

const props = defineProps([
  "label",
  "inputBg",
  "id",
  "name",
  "modelValue",
  "placeholder",
  "type"
]);
const { value, errorMessage } = useField(() => props.name, undefined, {
  syncVModel: true
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-xs text-gray-200 md:text-base">{{ label }}</label>
    <input
      :type="type"
      class="pb-2 text-sm font-medium border-b md:text-2xl border-white/20 outline-0"
      :class="[inputBg ? inputBg : 'bg-black']"
      :id="id"
      :placeholder="placeholder"
      v-model="value"
    />
    <span class="text-xs text-right text-red-500">{{ errorMessage }}</span>
  </div>
</template>