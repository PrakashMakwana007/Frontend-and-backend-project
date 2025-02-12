import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store/store.js'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Loging from './pages/Loging.jsx'
import Contect from './pages/Contect.jsx'; 
import Singup from './pages/Singup.jsx';  
import Order   from './pages/Order'; 
import Cartto from './pages/Cartto.jsx'
 
import CheckoutPage from './componets/Checkout.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/order',
        element: <Order/>
      },
      {
        path: '/login',
        element: <Loging />,
      },
      {
        path: '/signup',
        element: <Singup />,
      },
      {
        path: '/contact',
        element: <Contect />,
      },
      {
        path : '/cart',
        element : <Cartto/>
      }
      ,
      {
        path :'/checkout',
        element :<CheckoutPage/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
