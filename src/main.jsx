import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';

import BurgerMenu from './components/burger-menu/BurgerMenu.jsx';
import PurchaseCart from './components/purchase-cart/PurchaseCart.jsx';
import Login from './components/login/Login.jsx';

import './index.css';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cardapio", element: <BurgerMenu /> },
  { path: "/carrinho", element: <PurchaseCart /> },
  { path: "/login", element: <Login /> }
]);

const configApp = <StrictMode> <RouterProvider router={router} /> </StrictMode>;

createRoot(document.getElementById('root')).render(configApp);
