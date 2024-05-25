import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import Secret from "../Pages/SharedPages/Secret";
import PrivateRouter from "./PrivateRouter";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUsers/AllUser";
import AddItems from "../Pages/Dashboard/AddItems.jsx/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/MangeItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRouter>
            <Secret></Secret>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashBoard></DashBoard>
      </PrivateRouter>
    ),
    children: [
      // Normal User Route
      {
        path: "carts",
        element: <Cart></Cart>,
      },
      // Admin User Route
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manageItems',
        element : (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        )
      },
      {
        path: 'updateItem/:id',
        element : 
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ,
        loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ],
  },
]);
