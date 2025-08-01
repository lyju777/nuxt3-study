<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  // middleware: ["admin-only"],
});
</script>
