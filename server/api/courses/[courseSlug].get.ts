import { getCourseDetails } from "~/server/model/course";

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, "courseSlug") as string;
  const courseDetails = getCourseDetails(courseSlug);

  if (!courseDetails.course) {
    throw createError({
      statusCode: 500,
      statusMessage: "Course slug is required",
    });
  }

  return courseDetails;
});
