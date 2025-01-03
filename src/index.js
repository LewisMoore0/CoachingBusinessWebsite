import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { About } from './Pages/About.js';
import { NavBar } from './Components/NavBar.js';
import { Services } from './Pages/Services.js';
import { Homepage } from './Pages/Homepage.js';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
