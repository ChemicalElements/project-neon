<template>
  <button
    :type="type"
    :class="
      twMerge(
        'w-full rounded-md bg-primary py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        variants[variant ?? 'primary'],
      )
    "
    :style="color ? `background-color: ${color}` : ''"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, defineProps } from "vue";

defineProps<{
  text: string;
  type?: ButtonHTMLAttributes["type"];
  variant?: keyof typeof variants; // default is 'primary'
  color?: string;
}>();

const variants = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};
</script>

<style scoped></style>
