import { Task } from "../utils/data-tasks";

const TaskCard = ({ task: { title, id, points } }: {task: Task}) => {
  return (
    <div className="text-xl rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-base py-2">{title}</div>
      <div className="flex py-2 gap-4 justify-between text-gray-700 text-sm">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
