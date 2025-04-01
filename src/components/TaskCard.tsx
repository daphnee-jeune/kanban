import { Task } from "../utils/data-tasks";
import {
  lowPriorityIcon,
  mediumPriorityIcon,
  highPriorityIcon,
} from "../utils/icons";

const TaskCard = ({
  task,
  updateTaskPoints,
}: {
  task: Task;
  updateTaskPoints: (task: Task, points: number) => void;
}) => {
  const { title, id, points, priority } = task;
  const taskPoints = points ?? 0;

  const prioritySymbol =
    priority === "High"
      ? highPriorityIcon
      : priority === "Low"
      ? lowPriorityIcon
      : mediumPriorityIcon;

  return (
    <div className="text-xl rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-base py-2">{title}</div>
      <div className="flex py-2 gap-4 justify-between text-gray-700 text-sm">
        <div className="flex gap-2">
          <div>{id}</div>
          <div>{priority}</div>
          {prioritySymbol}
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => updateTaskPoints(task, taskPoints - 1)}>
            -
          </button>
          <div>{taskPoints}</div>
          <button onClick={() => updateTaskPoints(task, taskPoints + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
