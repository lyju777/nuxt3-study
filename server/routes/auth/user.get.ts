export default defineEventHandler(async (event) => {
  const userJsonString = getCookie(event, "_user");

  if (!userJsonString) {
    return {
      user: null,
    };
  }

  const user = JSON.parse(userJsonString);

  return { user };
});
