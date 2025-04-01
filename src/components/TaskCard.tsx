import { Task } from "../utils/data-tasks";

const lowPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 9l7 7 7-7"
    />
  </svg>
);
const mediumPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10h14"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 14h14"
    />
  </svg>
);

const highPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const TaskCard = ({
  task: { title, id, points, status, priority },
}: {
  task: Task;
}) => {
  const prioritySymbol =
    priority === "High" ? (
      highPriorityIcon
    ) : priority === "Low" ? (
      lowPriorityIcon
    ) : (
      mediumPriorityIcon
    );
  return (
    <div className="text-xl rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-base py-2">{title}</div>
      <div className="flex py-2 gap-4 justify-between text-gray-700 text-sm">
        <div className="flex gap-2">
          <div>{id}</div>
          <div>{priority}</div>
          {prioritySymbol}
        </div>
        <div>{points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
