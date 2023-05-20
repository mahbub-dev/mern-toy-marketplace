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
import { toast } from "react-toastify";
const url = import.meta.env.VITE_APP_API_SERVER_URI


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    try {
                        const res = await fetch(`${url}/home`)
                        const data = await res.json()
                        return (data)
                    } catch (error) {
                        console.log(error)
                        toast.error(error.message)
                        return {}
                    }
                }
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
                element: <AllToys />,
                loader: async () => {
                    try {
                        const res = await fetch(`${url}/all_toys`)
                        const data = await res.json()
                        return data
                    } catch (error) {
                        console.log(error)
                        toast.error(error.message)
                        return []
                    }
                }
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes> <AddToyPage /></PrivateRoutes>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoutes path={'toy/:id'}> <ToyDetailsPage /></PrivateRoutes>
                , loader: async ({ params }) => {
                    try {
                        const res = await fetch(`${url}/toy/${params.id}`)
                        const data = await res.json()
                        return data
                    } catch (error) {
                        console.log(error)
                        toast(error.message)
                        return {}
                    }
                }
            }, {
                path: '/my-toys',
                element: <PrivateRoutes> <MyToys /></PrivateRoutes>,
                loader: async () => {
                    try {
                        const res = await fetch(`${url}/mytoy`)
                        const data = await res.json()
                        return data
                    } catch (error) {
                        toast.error(error?.message)
                        return []
                    }
                }
            },
        ]
        ,
    },
]);

export default router