import { Notify } from "quasar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (error) => {
    // console.log("error", error);
    if (error instanceof Error) {
      Notify.create({
        message: error.message,
        color: "negative",
      });
    }
  });
});
