import { buttonVariants } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="overflow-x-hidden flex flex-col gap-4 p-4 bg-background w-full h-full text-foreground">
      <nav className="flex">
        <ul>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            to="/"
          >
            Courses
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            to="/student/dashboard"
          >
            Dashboard
          </Link>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
