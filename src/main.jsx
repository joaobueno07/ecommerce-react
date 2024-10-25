import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cardapio", element: <div><h1>Hello World, Cardápio</h1></div> },
  { path: "/carrinho", element: <div><h1>Hello World, Carrinho</h1></div> },
  { path: "/login", element: <div><h1>Hello World,Login</h1></div> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
