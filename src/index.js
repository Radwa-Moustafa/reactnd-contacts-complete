import React from 'react';
import ReactDOM from "react-dom/client";
import App from "../src/Components/App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateContact from '../src/Components/CreateContact';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<BrowserRouter>
    <App />
  </BrowserRouter>
);
