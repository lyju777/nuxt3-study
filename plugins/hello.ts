export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => {
        console.log(msg + " from hello.ts");
      },
    },
  };
});
