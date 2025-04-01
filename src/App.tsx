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
    <div className="flex">
      {columns.map((column, i) => (
        <div key={i} className="">
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">
            {column.status}
          </h2>
          {column.tasks.reduce((total, task) => total + (task?.points ?? 0), 0)}
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
