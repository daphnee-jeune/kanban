import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks as initialTasks, statuses, Task } from "./utils/data-tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });
  const updateTaskPoints = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          points,
        };
      } else {
        return t;
      }
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="flex">
      {columns.map((column, i) => (
        <div key={i} className="">
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">
            {column.status}
          </h2>
          {column.tasks.reduce((total, task) => total + (task?.points ?? 0), 0)}
          {column.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              updateTaskPoints={updateTaskPoints}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
