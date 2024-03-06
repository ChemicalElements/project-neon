<template>
  <input
    class="w-full rounded-md border border-[#f6f8f9] bg-[#f6f8f9] px-3 py-2 text-[#4e5e6] focus:outline-none focus:ring-1 focus:ring-blue-500"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  value: string;
  placeholder: string;
  type: string;
}>();
</script>

<style scoped></style>
