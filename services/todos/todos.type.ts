export type Todo = {
  _id: string;
  taskName: string;
  isCompleted: boolean;
  createdAt?: string;
};

export type Todos = Todo[];

export const TODOS_EMPTY: Todos = [];
