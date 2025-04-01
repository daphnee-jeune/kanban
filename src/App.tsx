import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks } from "./utils/data-tasks";

function App() {
  return (
    <>
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </>
  );
}

export default App;
