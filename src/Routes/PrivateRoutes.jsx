/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../Providers/authProvider"


const PrivateRoutes = ({ children }) => {
    const { isUser } = useAuthContext()
    if (isUser) {
        return children
    }
    return (
        <Navigate to={'login'} />
    )
}

export default PrivateRoutes