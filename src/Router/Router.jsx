import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
        {
           index : true,
           element:  <Home></Home>
        },
        {
          path: '/menu',
          element : <Menu></Menu>
        },
        {
          path:'order/:category',
          element: <Order></Order>
        }
    ]
  },
]);
