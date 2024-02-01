export function updateNewTodo(payload: string) {
  return {
    type: 'UPDATE_NEW_TODO',
    payload,
  };
}

export function addTodo(title: string) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  };
}
