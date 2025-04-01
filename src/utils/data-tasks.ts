export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};
export type Status = "Todo" | "In progress" | "Done"
export const statuses: Status[] = ["Todo", "In progress", "Done"];
export const tasks: Task[] = [
  {
    title: "UI Engineer L5",
    id: "Job offer letter",
    status: "Done",
    points: 3,
  },
  {
    title: "Daytrader",
    id: "Futures commodities",
    status: "In progress",
    points: 5,
  },
  {
    title: "Friend",
    id: "Safe space",
    status: "Done",
    points: 5,
  },
  {
    title: "2025 Afrotech Speaker",
    id: "System design for frontend engineers",
    status: "In progress",
    points: 3,
  },
  {
    title: "Build portfolio",
    id: "Frontend engineer skills",
    status: "Todo",
    points: 5,
  },
  {
   title: "Go to the gym",
   id: "Leg day",
   status: "Todo",
   points: 2,
 },
 {
  title: "Meal prep",
  id: "Season everything",
  status: "Todo",
  points: 2,
},
];
