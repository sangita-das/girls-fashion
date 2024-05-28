import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import DashboardLayouts from '../Layouts/DashboardLayouts';
import PrivateRoute from './PrivateRoute';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import AllProduct from '../Pages/Dashboard/AllProduct';
import AddProduct from '../Pages/Dashboard/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
         {
            path: 'about',
            element: <About/>
        },
        {
            path: 'contact',
            element: <Contact/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'register',
            element: <Register/>
        }
    ]
  },

  {
    path: '/dashboard',
    element: (
        <PrivateRoute>
            <DashboardLayouts/>
        </PrivateRoute>
    ),
    children:[
        {
            index: true,
            element: <DashboardHome/>
        },
        {
            path: "/dashboard/all-product",
            element: <AllProduct/>
        },
        {
            path: "/dashboard/add-product",
            element: <AddProduct/>
        }
    ]
  },

  

 
]);

export default router;