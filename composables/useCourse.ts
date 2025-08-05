import type { CourseReturn } from "~/types/course";

export const useCourse = (courseSlug: string) =>
  useFehchWithCache<CourseReturn>(`/api/courses/${courseSlug}`);
