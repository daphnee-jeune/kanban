import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import {
  tasks as initialTasks,
  statuses,
  Task,
  Status,
} from "./utils/data-tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(updatedTasks);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };
  return (
    <div className="flex">
      {columns.map((column, i) => (
        <div
          key={i}
          onDrop={(e) => handleDrop(e, column.status)}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
            <h2 className="capitaliz">{column.status}</h2>
            <div>
              {column.tasks.reduce(
                (total, task) => total + (task?.points ?? 0),
                0
              )}
            </div>
          </div>
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} updateTask={updateTask} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
