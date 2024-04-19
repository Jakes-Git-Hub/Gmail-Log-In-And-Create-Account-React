import React from 'react';
import App from './App';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createRoot: (container) => {
      return {
        render: (component) => {
          original.render(component, container);
        },
      };
    },
  };
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  require('./index.js');
});