export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthUser();
  if (isAuthenticated.value) {
    if (process.server) return navigateTo("/");
    return abortNavigation();
  }
});
