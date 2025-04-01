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