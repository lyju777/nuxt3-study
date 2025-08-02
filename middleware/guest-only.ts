export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useAuthenticated();
  if (isAuthenticated.value) {
    if (process.server) return navigateTo("/");
    return abortNavigation();
  }
});
