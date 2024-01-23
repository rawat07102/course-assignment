import {
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  const { id, name, description, thumbnail, instructor } = course;
  return (
    <Link to={`course/${id}`} className="bg-primary-foreground shadow flex gap-2 hover:shadow-lg transition-all rounded overflow-hidden duration-200 ease-in">
      <div className="w-[178px] h-[122px]">
        <img className="object-cover" src={thumbnail}></img>
      </div>
      <CardContent className="p-2 flex flex-col">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="text-sm text-card-foreground mt-auto">
          <span className="text-primary text-lg mr-1">Instructors: </span>
          {instructor}
        </div>
      </CardContent>
    </Link>
  );
}
