import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      query: () => "/course-listings",
    }),
    getCourseById: builder.query<Course, string>({
      query: (courseId) => `/course/byId/${courseId}`,
    }),
    getSearchCourse: builder.query<Course[], string>({
      query: (searchQuery) => `/course/search/${searchQuery}`,
      async onQueryStarted(_searchQuery, { dispatch, queryFulfilled }) {
        const { data: courses } = await queryFulfilled;
        dispatch(
          apiSlice.util.upsertQueryData("getCourses", undefined, courses),
        );
      },
    }),
    login: builder.mutation<Course[], string>({
      query: (studentName) => ({
        url: "/student/login",
        method: "POST",
        body: {
          name: studentName
        }
      })
    })
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useLazyGetSearchCourseQuery,
  useLoginMutation,
} = apiSlice;
