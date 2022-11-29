import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Dhashboard from "../../pages/Dhashboard/Dhashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
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
            }
           
        ]
    },
    {
        path:'/dashbord',
        element:<PrivateRoute><Dhashboard></Dhashboard></PrivateRoute>
    }
])