<template>
  <div>
    <div class="text-h4">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
