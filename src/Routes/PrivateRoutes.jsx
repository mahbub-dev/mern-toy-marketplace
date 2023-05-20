/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../Providers/authProvider"
const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { isUser } = useAuthContext()
    if (isUser) {
        return children
    }
    return (
        <Navigate to={'/login'} state={{ from: location }} replace />
    )
}

export default PrivateRoutes
