/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import app from "../../firebase.config"
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState('')
    const isUser = localStorage.getItem('email')
    const auth = getAuth(app)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedUser(user)
           
        })
        return unsubscribe()
    }, [auth])

    
    // provide data 
    const data = { loggedUser, isUser,setLoggedUser }
    return (
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}
const useAuthContext = () => useContext(AuthContext)
export { useAuthContext }
export default AuthProvider