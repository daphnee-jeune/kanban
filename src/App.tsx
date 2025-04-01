import "./App.css";
import TaskCard from "./components/TaskCard";
import { Task } from "./utils/data-tasks";

function App() {
  const task: Task = {
    title: 'UI Engineer L5',
    id: 'Job offer letter',
    points: 3
  }
  return (
    <>
      <TaskCard task={task} />
    </>
  );
}

export default App;
