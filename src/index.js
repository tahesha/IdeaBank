import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
