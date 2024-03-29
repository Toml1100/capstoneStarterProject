// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App.js";

const root = createRoot(document.getElementById('root')); // Create a root using createRoot

root.render(
    <React.StrictMode>
        <App /> {/* Use the Home component as the root */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
