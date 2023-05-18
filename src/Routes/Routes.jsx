import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import NotFoundPage from "../Pages/NotFound";
import App from "../App";
import Registration from "../Pages/Registration";

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
            }
        ]
        ,
    },
]);

export default router