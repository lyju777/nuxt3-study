import { Notify } from "quasar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:error", (error) => {
    if (error instanceof Error) {
      if (process.client) {
        Notify.create({
          message: error.message,
          color: "warning",
        });
      }
    } else {
      console.log(error.message);
    }
  });

  nuxtApp.hook("vue:error", (error) => {
    if (error instanceof Error) {
      if (process.client) {
        Notify.create({
          message: error.message,
          color: "negative",
        });
      } else {
        console.log(error.message);
      }
    }
  });
});
