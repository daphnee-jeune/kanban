type TaskCardProps = {
 title: string;
 id: number;
 points?: string;
}

const TaskCard = ({ title, id, points }: TaskCardProps) => {
  return (
    <div className="text-xl border rounded-lg px-2 m-2 bg-gray-50">
      <div className="text-base font-semibold py-2">{title}</div>
      <div className="flex py-2 gap-4 justify-between">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
