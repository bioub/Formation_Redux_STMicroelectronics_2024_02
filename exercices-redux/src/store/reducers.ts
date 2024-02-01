import { RootState } from './types';

const initialState: RootState = {
  todos: {
    newTodo: 'XYZ',
    items: [
      { id: 1, title: 'ABC', completed: true },
      { id: 2, title: 'DEF', completed: false },
      { id: 3, title: 'HIJ', completed: true },
    ],
  },
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_NEW_TODO':
      return {
        ...state,
        todos: {
          ...state.todos,
          newTodo: action.payload,
        },
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: {
          ...state.todos,
          items: [...state.todos.items, action.payload],
        },
      };
    default:
      return state;
  }
}
