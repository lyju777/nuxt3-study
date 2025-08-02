export const useDefaultLocale = (fallback = "en") => {
  const locale = ref(fallback);

  // 서버 사이드에서 실행될 때
  if (process.server) {
    const reqLocale = useRequestHeaders()
      ["accept-language"]?.split(";")[0]
      ?.split(",")[1];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  }
  // 클라이언트 사이드에서 실행될 때만 navigator 사용
  else if (process.client) {
    locale.value = navigator.language.split("-")[0] || fallback;
  }

  return locale;
};
