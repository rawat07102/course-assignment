import { http, HttpResponse } from "msw";
import Fuse from "fuse.js";
import { courses } from "./data";

export const handlers = [
  http.get("/fakeApi/course-listings", () => {
    return HttpResponse.json(courses);
  }),
  http.get("/fakeApi/course/byId/:courseId", ({ params }) => {
    const courseId = parseInt(params.courseId as string);
    const course = courses.find((course) => course.id === courseId);
    return HttpResponse.json(course);
  }),
  http.get("/fakeApi/course/search/:searchQuery", ({ params }) => {
    const searchQuery = params.searchQuery as string;
    const fuse = new Fuse(courses, {
      keys: ["name", "instructor"],
    });
    return HttpResponse.json(fuse.search(searchQuery).map((fr) => fr.item));
  }),
  http.post<any, { name?: string }>(
    "/fakeApi/student/login",
    async ({ request }) => {
      const { name = "" } = await request.json();
      if (!name) {
        return HttpResponse.json(null, {
          status: 401,
        });
      }
      const searchResult = courses.filter((co) =>
        co.students.some((s) => s.name === name),
      );
      if (searchResult.length === 0) {
        return HttpResponse.json(null, {
          status: 401,
        });
      }
      
      const result = searchResult
        // .map((r) => r.item)
        .map((co) => ({
          ...co,
          students: [co.students.find((s) => s.name === name)],
        }));

      return HttpResponse.json(result);
    },
  ),
];
