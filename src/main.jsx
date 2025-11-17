import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import AuthContextProvider from './components/context/AuthContextProvider.jsx';
import Signup from './components/Users/Signup.jsx';
import Signin from './components/Users/Signin.jsx';

const router = createBrowserRouter([
  { path: "/", 
    Component: MainLayout,
    children:[
      {
        index: true,
        loader:()=>fetch("http://localhost:3000/coffees"),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'updateCoffee/:id',
        loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'coffee/:id',
        loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: ViewCoffee
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path:'signin',
        Component: Signin
      }
    ] },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
          <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
);
