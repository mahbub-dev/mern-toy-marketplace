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
            }
        ]
        ,
    },
]);

export default router