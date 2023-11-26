import { useState } from "react";
import "./App.css";
import { TaskCard } from "./components/TaskCard";
import {
  tasks as initialTask,
  Status,
  statuses,
  Task,
} from "./utils/data-task";


function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTask);
  const column = statuses.map((stat) => {
    const tasksInColumn = tasks.filter((task) => task.status === stat);
    return {
      status: stat,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (task: Task) => {
    const newTasks = tasks.map((t) =>
      t.id === task.id ? { ...task } : { ...t }
    );
    setTasks(newTasks);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((t) => t.id === id);
    task && updateTask({ ...task, status });
    setCurrentHover(null)
  };

  const [currentHover, setCurrentHover] = useState<Status | null>(null);
  const handleDragEnter = (status: Status) => {
    setCurrentHover(status);
  };

  return (

    <div className="flex justify-center ">
      {column.map((c) => (
        <div
          onDrop={(e) => handleDrop(e, c.status)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => handleDragEnter(c.status)}
        >
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">
            {c.status}
          </h2>
          <div className={currentHover === c.status ? 'bg-gray-300 h-full z-0 basis-1/2' : 'basis-1/2 h-full relative'}>

          {c.tasks.map((t) => (
            
            <TaskCard task={t} updateTask={updateTask} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
