export type Task = {
  title: string;
  id: string;
  points?: number;
};

export const tasks: Task[] = [
 {
   title: 'UI Engineer L5',
   id: 'Job offer letter',
   points: 3
 },
 {
   title: 'Daytrader',
   id: 'Futures commodities',
   points: 5
 },
 {
   title: 'Friend',
   id: 'Safe space',
   points: 5
 },
 {
   title: '2025 Afrotech Speaker',
   id: 'System design for frontend engineers',
   points: 3
 }
]