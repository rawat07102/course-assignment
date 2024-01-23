import { Input } from "@/components/ui/input";
import {
  useGetCoursesQuery,
  useLazyGetSearchCourseQuery,
} from "../api/api.slice";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import React from "react";

export default function CourseListingsPage() {
  const { data: courses, isLoading, isError, refetch } = useGetCoursesQuery();
  const [trigger] = useLazyGetSearchCourseQuery();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery) {
      refetch();
    } else {
      trigger(searchQuery);
    }
  };

  const onSearchQueryChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Error fetching courses</div>;
  }

  return (
    <section>
      <form onSubmit={handleSearch} className="flex mb-4 w-full max-w-sm items-center space-x-2">
        <Input
          onChange={onSearchQueryChange}
          value={searchQuery}
          placeholder="Course name or Instructor"
        />
        <Button type="submit">
          Search
        </Button>
      </form>
      <ul className="flex flex-col gap-6">
        {courses?.map((course) => (
          <CourseCard course={course} key={course.id}></CourseCard>
        ))}
      </ul>
    </section>
  );
}
