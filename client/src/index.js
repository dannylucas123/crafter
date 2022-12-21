import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './another.scss';

const container = document.getElementById("react-root");

const root = ReactDOM.createRoot(container);
root.render(<App />);
