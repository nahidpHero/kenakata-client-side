import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";


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
                path:'/category/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<AllProducts></AllProducts>
            }
        ]
    }
])