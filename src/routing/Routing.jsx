import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sidebar from '../component/layouts/Sidebar';
import Topbar from '../component/layouts/Topbar';
import Login from '../component/login/Login';
import SignUp from '../component/signip/SignUp';
import Dashboard from '../component/view/Dashboard';
import ErrorScreen from './ErrorScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Topbar/>,
    errorElement:<ErrorScreen/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path: "/sign-in",
        element: <Login/>,
        errorElement:<ErrorScreen/>
      },
      {
        path: "/sign-up",
        element: <SignUp/>,
        errorElement:<ErrorScreen/>
      },
    ]
  },
  
]);


function Routing() {
  return (
    <RouterProvider router={router} />
  )
}

export default Routing