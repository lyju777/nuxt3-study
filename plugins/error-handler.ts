import { Notify } from "quasar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:error", (error) => {
    if (error instanceof Error) {
      Notify.create({
        message: error.message,
        color: "warning",
      });
    }
  });

  nuxtApp.hook("vue:error", (error) => {
    if (error instanceof Error) {
      Notify.create({
        message: error.message,
        color: "negative",
      });
    }
  });
});
