export interface ITask {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
