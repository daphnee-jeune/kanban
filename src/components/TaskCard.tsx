import { useState } from "react";
import { Task } from "../utils/data-tasks";
import {
  lowPriorityIcon,
  mediumPriorityIcon,
  highPriorityIcon,
} from "../utils/icons";

const TaskCard = ({
  task,
  updateTask,
}: {
  task: Task;
  updateTask: (task: Task) => void;
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const { title, id, points, priority } = task;
  const taskPoints = points ?? 0;

  const prioritySymbol =
    priority === "High"
      ? highPriorityIcon
      : priority === "Low"
      ? lowPriorityIcon
      : mediumPriorityIcon;

  const updatePoints = (direction: "up" | "down") => {
    const fibonacci = [0, 1, 2, 3, 5, 8, 13];
    const index = fibonacci.indexOf(taskPoints);
    const nextIndex = direction === "up" ? index + 1 : index - 1;
    const newPoints = fibonacci[nextIndex];
    if (newPoints) {
      updateTask({ ...task, points: newPoints });
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("id", id)}
      className="text-xl rounded-lg px-2 m-2 bg-gray-50 w-60"
    >
      <div className="text-base font-base py-2">
        {isEditingTitle ? (
          <input
            autoFocus
            type="text"
            className="w-full"
            value={title}
            onBlur={() => setIsEditingTitle(false)}
            onChange={(e) => updateTask({ ...task, title: e.target.value })}
          />
        ) : (
          <div onClick={() => setIsEditingTitle(true)}>{title}</div>
        )}
      </div>
      <div className="flex py-2 gap-4 justify-between text-gray-700 text-sm">
        <div className="flex gap-2">
          <div>{id}</div>
          <div>{priority}</div>
          {prioritySymbol}
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => updatePoints("down")}>-</button>
          <div>{taskPoints}</div>
          <button onClick={() => updatePoints("up")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
