import { RootState } from "./types";

export function itemsSelector(state: RootState) {
  return state.todos.items;
}

export function newTodoSelector(state: RootState) {
  return state.todos.newTodo;
}

export function todosCompletedSelector(state: RootState) {
  const items = itemsSelector(state);
  return items.filter((it) => it.completed);
}