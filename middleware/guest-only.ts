export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = storeToRefs(useAuthStore());
  if (isAuthenticated.value) {
    if (process.server) return navigateTo("/");
    return abortNavigation();
  }
});
