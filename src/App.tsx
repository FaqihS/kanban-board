import "./App.css";
import { TaskCard } from "./components/TaskCard";
import { tasks, statuses } from "./utils/data-task";

function App() {
  const column = statuses.map((stat) => {
    const tasksInColumn = tasks.filter((task) => task.status === stat);
    console.log(tasksInColumn)
    return {
      title: stat,
      tasks: tasksInColumn,
    };
  });

  return (
    <div className="flex divide-x">
      {column.map((c) => (
        <div>
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">{c.title}</h2>
          {c.tasks.map((t) => (
            <TaskCard task={t} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
