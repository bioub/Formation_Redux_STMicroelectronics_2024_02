import './index.css';

import { createRoot } from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './store/slices/todos-slice';
// import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <StrictMode>
    <Provider store={configureStore({ reducer: { todos: todosReducer } })}>
      <App />
    </Provider>
  // </StrictMode>
);
