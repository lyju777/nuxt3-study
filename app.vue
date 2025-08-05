<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref("Nuxt 3!");
const description = ref("Nuxt 3 강의 입니다.");

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogImage: "/img/og-image.png",
});
</script>
