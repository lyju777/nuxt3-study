export default defineEventHandler(async (event) => {
  const userJsonString = getCookie(event, "_user");

  console.log("userJsonString", userJsonString);

  if (!userJsonString) {
    return {
      user: null,
    };
  }

  const user = JSON.parse(userJsonString);

  return { user };
});
