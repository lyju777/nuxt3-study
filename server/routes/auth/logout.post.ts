export default defineEventHandler(async (event) => {
  deleteCookie(event, "_user");

  return {
    user: null,
  };
});
