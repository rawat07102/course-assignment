import { createBrowserRouter } from "react-router-dom";
import CourseListings from "@/features/courseListings/CourseListings.page";
import Layout from "@/features/Layout";
import CourseDetailsPage from "@/features/courseDetails/CourseDetails.page";
import Dashboard from "@/features/student/Dashboard.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CourseListings />,
      },
      {
        path: "/course/:courseId",
        element: <CourseDetailsPage />,
      },
      {
        path: "/student/dashboard",
        element: <Dashboard />
      },
    ],
  },
]);
