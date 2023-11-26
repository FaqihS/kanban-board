import { useState } from "react";
import { Task } from "../utils/data-task";

const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
  console.log("X: ", e.clientX, "Y: ", e.clientY);
};

export function TaskCard({
  task,
  updateTask,
}: {
  task: Task;
  updateTask: (task: Task) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="sticky top-5 bg-gray-50 border rounded-lg px-2 m-2 drop-shadow-sm hover:-translate-y-4 hover:drop-shadow-md duration-300 shadow-black  "
      draggable
      onDrag={(e) => handleDrag(e)}
      onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
    >
      <div className="text-base font-base py-2"></div>
      {isEditing ? (
        <input
          type="text"
          className="w-full"
          onBlur={() => setIsEditing(false)}
          value={task.title}
          onChange={(e) => updateTask({ ...task, title: e.target.value })}
        />
      ) : (
        <div className="" onClick={() => setIsEditing(true)}>
          {task.title}
        </div>
      )}
      <div className="flex gap-4 justify-between text-gray-500 text-sm py-2">
        <div>{task.id}</div>
        <div>{task.point}</div>
      </div>
    </div>
  );
}
