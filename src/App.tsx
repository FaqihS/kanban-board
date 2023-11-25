import "./App.css";
import { TaskCard } from "./components/TaskCard";
import { Task } from "./utils/data-task";


function App() {

  const task : Task = {
    id: "BUS-15",
    title: "Doing Some Researc",
    point: "5"
  }

  return (
    <>
      <TaskCard  {...task} />
      <TaskCard id="BUS-16"  title="Just Do SOme Shit bro" />
    </>
  );
}

export default App;
