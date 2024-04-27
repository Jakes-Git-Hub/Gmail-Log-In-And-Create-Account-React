import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createRoot: (container) => {
      if (original.createRoot) {
        return original.createRoot(container);
      } else {
        return {
          render: (component) => {
            original.render(component, container);
          },
        };
      }
    },
  };
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  ReactDOM.createRoot(div).render(<App />);
});