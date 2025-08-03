export default defineEventHandler(async (event) => {
  const user = event.context.user;
  console.log("user", user);

  if (!user) {
    return { user: null };
  }

  return { user };
});
