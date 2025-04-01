import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks, statuses } from "./utils/data-tasks";

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });
  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <h1>{column.status}</h1>
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
