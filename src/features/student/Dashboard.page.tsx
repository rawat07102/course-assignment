import React from "react";
import { useLoginMutation } from "../api/api.slice";
import LoginForm from "./LoginForm.component";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

export default function Dashboard() {
  const [trigger, { data: courses, isLoading, isError }] = useLoginMutation();
  const [name, setName] = React.useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Enter name to login");
    } else {
      trigger(name);
    }
  };

  const onNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return (
      <section>
        <LoginForm
          value={name}
          onNameChange={onNameChange}
          handleSearch={handleSearch}
        />
        <div>
          <h1>Not-Authorized</h1>
        </div>
      </section>
    );
  }

  return (
    <section>
      <LoginForm
        value={name}
        onNameChange={onNameChange}
        handleSearch={handleSearch}
      />
      <ul className="flex flex-col gap-6">
        {courses?.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded shadow flex w-full gap-2 bg-primary-foreground"
          >
            <div className="w-[178px] h-[122px]">
              <img className="object-cover" src={course.thumbnail}></img>
            </div>
            <div className="flex flex-col w-full p-2">
              <Progress
                className="h-1 *:bg-green-700 bg-neutral-300"
                value={course.students[0].progress}
              />
              <h1 className="text-lg font-bold">{course.name}</h1>
              <div className="flex items-center space-x-2">
                <Switch className="data-[state=checked]:bg-green-700" id="completion-toggle" />
                <label htmlFor="completion-toggle">Completed</label>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
