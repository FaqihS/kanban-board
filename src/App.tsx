import "./App.css";
import { TaskCard } from "./TaskCard";

function App() {
  const title = "Do Search";
  const id = "BUS-15";
  const point = "1";

  return (
    <>
      <TaskCard id={id} point={point} title={title} />
      <TaskCard id="BUS-16" point="5" title="Just Do SOme Shit bro" />
    </>
  );
}

export default App;
