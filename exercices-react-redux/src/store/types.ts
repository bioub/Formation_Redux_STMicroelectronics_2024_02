import { Todo } from "../todos/types";
import { User } from "../users/types";

export type UsersSlice = {
  items: User[];
  loading: boolean;
  errorMessage?: string;
};

export type TodosSlice = {
  newTodo: string;
  items: Todo[];
};

export type RootState = {
  todos: TodosSlice;
};
