import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Blog from "../../pages/Blog/Blog";
import Allusers from "../../pages/Dhashboard/Allusers";
import Dhashboard from "../../pages/Dhashboard/Dhashboard";
import Myproducts from "../../pages/Dhashboard/Myproducts";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/category/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<PrivateRoute><AllProducts></AllProducts></PrivateRoute> 
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
           
        ]
    },
    {
        path:'/dashbord',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashbord',
                element:<Myproducts></Myproducts>
            },
            {
                path:'/dashbord/allusers',
                element:<Allusers></Allusers>
            }
        ]
    }
])