<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> Vue & Nuxt Mastery Class </q-toolbar-title>
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn
            stretch
            flat
            :label="$t('home')"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn
            stretch
            flat
            :label="$t('about')"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/youtube">
          <q-btn
            stretch
            flat
            :label="$t('youtube')"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn
            stretch
            flat
            :label="$t('admin')"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="selectedLanguageName">
          <q-list padding dense>
            <q-item
              v-for="{ code, name } in languages"
              :key="code"
              v-close-popup
              clickable
              :active="code === $i18n.locale"
              @click="$i18n.locale = code"
            >
              <q-item-section>
                <q-item-label>{{ name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn
            stretch
            flat
            :label="$t('login')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-btn
          v-else
          stretch
          flat
          :label="$t('logout')"
          no-caps
          @click="signOut()"
        />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">
        {{ authUser }}
      </q-banner>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
const authStore = useAuthStore();
const { signOut } = authStore;
const { user: authUser, isAuthenticated } = storeToRefs(authStore);
const pageContainerStyle = computed(() => ({
  maxWidth: "1080px",
  margin: "0 auto",
}));

interface Language {
  name: string;
  code: "en" | "ko";
}

const languages = ref<Language[]>([
  { name: "English", code: "en" },
  { name: "한국어", code: "ko" },
]);

const { locale } = useI18n();

const selectedLanguageName = computed(() => {
  return languages.value.find((language) => language.code === locale.value)
    ?.name;
});

watch(locale, (val) => (useCookie("locale").value = val));
</script>
