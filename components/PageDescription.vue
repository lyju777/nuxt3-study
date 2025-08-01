<template>
  <div>
    <p class="q-mt-sm text-grey-8">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  description: string;
}>();
</script>

<style scoped></style>
