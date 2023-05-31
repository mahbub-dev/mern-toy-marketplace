/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth'
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

    const logOut = () => {
        signOut(auth)
        localStorage.clear()
    }
    // provide data 
    const data = { loggedUser, isUser, setLoggedUser,logOut }
    return (
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}
const useAuthContext = () => useContext(AuthContext)
export { useAuthContext }
export default AuthProvider