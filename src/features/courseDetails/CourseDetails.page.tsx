import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../api/api.slice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function CourseDetailsPage() {
  const { courseId } = useParams();
  const {
    data: course,
    isLoading,
    isError,
  } = useGetCourseByIdQuery(courseId as string);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!course) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 p-1">
      <div className="shadow bg-primary-foreground p-8 rounded">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {course.name}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {course.description}
        </p>
      </div>
      <div className="flex gap-4">
        <Accordion className="w-1/2" type="multiple">
          <AccordionItem value="prerequisites">
            <AccordionTrigger className="font-bold text-2xl">
              Pre-Requisites
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {course.prerequisites.map((s) => (
                  <li className="flex gap-1 text-lg" key={s}>{s}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="syllabus">
            <AccordionTrigger className="font-bold text-2xl">
              Syllabus
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {course.syllabus.map((s) => (
                  <li key={s.topic}>
                    <h2 className="flex gap-1 text-lg">
                      <span>Week {s.week} - </span>
                      <span>{s.topic}</span>
                    </h2>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col self-start ml-8 gap-1 bg-primary-foreground shadow p-2">
          <div className="font-bold">Taught by: {course.instructor}</div>
          <div
            className={cn(
              course.enrollmentStatus === "Open"
                ? "text-green-500"
                : "text-red-500",
            )}
          >
            {course.enrollmentStatus}
          </div>
          <div>{course.duration}</div>
          <div>{course.schedule}</div>
        </div>
      </div>
    </section>
  );
}
