import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/layout/Header";
import Home from './components/Home/Home';
import Error from './utils/Error';
import About from './components/Home/AboutUs';
import Restaurant from './components/Home/Restaurant';
import Footer from './components/layout/Footer';
import LoginSignup from './components/User/LoginSIgnup';

const AppLayout = () => {
  return (
    <div className="app">
        <Header />
        <Outlet />
        <Footer />
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
      },
    ],
    errorElement:<Error/>
  }, 
  {
    path: '/signin',
    element: <LoginSignup />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);