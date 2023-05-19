import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import NotFoundPage from "../Pages/NotFound";
import App from "../App";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Blogs from "../Pages/Blogs";
import AllToys from "../Pages/AllToys";
import ToyDetailsPage from "../Pages/ToyDeatails";
import AddToyPage from "../Pages/AddToyPage";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../Pages/MyToys";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
            , {
                path: '/register',
                element: <Registration />
            }, {
                path: '/login',
                element: <Login />
            }
            , {
                path: '/blogs',
                element: <Blogs />
            }, {
                path: '/all-toys',
                element: <AllToys />
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes> <AddToyPage /></PrivateRoutes>
            },
            {
                path: '/toys-details/:id',
                element: <PrivateRoutes> <ToyDetailsPage /></PrivateRoutes>
                , loader: async ({ params }) => {
                    return
                }
            }, {
                path: '/my-toys',
                element: <PrivateRoutes> <MyToys /></PrivateRoutes>
            },
        ]
        ,
    },
]);

export default router