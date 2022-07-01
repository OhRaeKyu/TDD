import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Reset } from 'styled-reset';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
