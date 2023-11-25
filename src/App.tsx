import { useState } from "react";
import "./App.css";
import { TaskCard } from "./components/TaskCard";
import { tasks as initialTask, statuses, Task } from "./utils/data-task";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTask);
  const column = statuses.map((stat) => {
    const tasksInColumn = tasks.filter((task) => task.status === stat);
    return {
      title: stat,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (task: Task) => {
    const newTasks = tasks.map((t) =>
      t.id === task.id ? { ...task } : { ...t }
    );
    setTasks(newTasks);
  };

  return (
    <div className="flex divide-x">
      {column.map((c) => (
        <div>
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">
            {c.title}
          </h2>
          {c.tasks.map((t) => (
            <TaskCard task={t} updateTask={updateTask} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
