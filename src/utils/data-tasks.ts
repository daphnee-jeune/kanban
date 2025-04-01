export type Task = {
  title: string;
  id: string;
  status: Status;
  priority: Priority;
  points?: number;
};
export type Status = "Todo" | "In progress" | "Done";
export type Priority = "Low" | "Medium" | "High";
export const statuses: Status[] = ["Todo", "In progress", "Done"];
export const priorities: Priority[] = ["Low", "Medium", "High"];

export const tasks: Task[] = [
  {
    title: "UI Engineer L5",
    id: "Job offer letter",
    status: "Done",
    priority: 'High',
    points: 3,
  },
  {
    title: "Daytrader",
    id: "Futures commodities",
    status: "In progress",
    priority: 'High',
    points: 5,
  },
  {
    title: "Friend",
    id: "Safe space",
    status: "Done",
    priority: 'High',
    points: 5,
  },
  {
    title: "2025 Afrotech Speaker",
    id: "System design for frontend engineers",
    status: "In progress",
    priority: 'High',
    points: 3,
  },
  {
    title: "Build portfolio",
    id: "Frontend engineer skills",
    status: "Todo",
    priority: 'Medium',
    points: 5,
  },
  {
   title: "Go to the gym",
   id: "Leg day",
   status: "Todo",
   priority: 'Medium',
   points: 2,
 },
 {
  title: "Meal prep",
  id: "Season everything",
  status: "Todo",
  priority: 'Low',
  points: 2,
},
];
