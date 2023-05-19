/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../Providers/authProvider"

const PrivateRoutes = ({ children }) => {
    const path = useLocation()
    const { isUser } = useAuthContext()
    if (isUser) {
        return children
    }
    return (
        <Navigate to={'login'} state={{ from: path }} replace />
    )
}

export default PrivateRoutes
