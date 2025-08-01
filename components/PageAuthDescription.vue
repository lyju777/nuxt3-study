<template>
  <div>
    <p class="text-subtitle1 q-mb-xl">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  description: string;
}>();
</script>

<style scoped></style>
