type Student = {
  id: number;
  name: string;
  progress: number;
};

type Syllabus = {
  week: number;
  topic: string;
};

type Course = {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: Syllabus[];
  students: Student[];
};
