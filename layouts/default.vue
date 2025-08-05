<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> {{ appConfig.title }} </q-toolbar-title>
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn
            stretch
            flat
            :label="$t('home')"
            :key="locale"
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
            :key="locale"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/youtube">
          <q-btn
            stretch
            flat
            :label="$t('youtube')"
            :key="locale"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn
            stretch
            flat
            :label="$t('admin')"
            :key="locale"
            no-caps
            @click="() => navigate()"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps label="English">
          <q-list padding dense>
            <q-item v-close-popup clickable @click="localePath('/', 'en')">
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable @click="switchLocalePath('ko')">
              <q-item-section>
                <q-item-label>한국어</q-item-label>
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
            :key="locale"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-btn
          v-else
          stretch
          flat
          :label="$t('logout')"
          :key="locale"
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

const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const appConfig = useAppConfig();
console.log(appConfig);
</script>
