<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />
      <div class="column">
        <RouterLink to="/">Router Link Home</RouterLink>
        <RouterLink to="https://www.naver.com">Router Link Naver</RouterLink>
        <br />
        <NuxtLink to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://www.naver.com">NuxtLink Naver</NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
