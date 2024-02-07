import { ChangeEvent, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector, newTodoSelector } from '../store/selectors';
import { addTodo, removeTodo, updateNewTodo } from '../store/slices/todos-slice';

export default function Todos() {
  const newTodo = useSelector(newTodoSelector);
  const items = useSelector(itemsSelector);
  const dispatch = useDispatch();

  function handleNewTodoChange(value: string) {
    dispatch(updateNewTodo(value))
  }

  function handleNewTodoAdd() {
    dispatch(addTodo(newTodo));
  }

  function handleDeleteTodo(todo: Todo) {
    dispatch(removeTodo(todo));
  }

  return (
    <div className="Todos">
      <TodoForm newTodoInput={newTodo} onNewTodoChange={handleNewTodoChange} onNewTodoAdd={handleNewTodoAdd} />
      <TodoList items={items} onDeleteItem={handleDeleteTodo}  />
    </div>
  );
}
