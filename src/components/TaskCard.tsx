import { Task } from "../utils/data-task";

export function TaskCard({task}:{
  task: Task
}) {
  return (
    <div className="bg-gray-50 border rounded-lg px-2 m-2">
      <div className="text-base font-semibold py-2">{task.title}</div>
      <div className="flex gap-4 justify-between text-gray-700 py-2">
        <div>{task.id}</div>
        <div>{task.point}</div>
      </div>
    </div>
  );
}
