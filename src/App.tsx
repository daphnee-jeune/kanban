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
      return t.id === task.id ? { ...t, points } : t;
    });
    setTasks(updatedTasks);
  };
  const updateTaskTitle = (task: Task, title: string) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, title } : t;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="flex">
      {columns.map((column, i) => (
        <div key={i} className="">
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
            <TaskCard
              key={task.id}
              task={task}
              updateTaskPoints={updateTaskPoints}
              updateTaskTitle={updateTaskTitle}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
