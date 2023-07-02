import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./src/components/layout/Header";
import Home from './src/components/Home/Home';
import Error from './src/utils/Error';
import About from './src/components/Home/AboutUs';
import Restaurant from './src/components/Home/Restaurant';

const AppLayout = () => {
  return (
    <div className="app">
        <Header />
        <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element:<Home/>
    },
      {
        path: '/about',
        element:<About/>

      }, {
        path: '/restaurant/:resId',
        element:<Restaurant/>
      }
    ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);