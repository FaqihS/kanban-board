import "./App.css";
import { TaskCard } from "./components/TaskCard";
import {  tasks } from "./utils/data-task";


function App() {


  return (
    <>
      {tasks.map(t=><TaskCard task={t} />)}
   
    </>
  );
}

export default App;
