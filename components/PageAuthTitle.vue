<template>
  <div>
    <div class="text-h2 q-mt-xl q-mb-md">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
