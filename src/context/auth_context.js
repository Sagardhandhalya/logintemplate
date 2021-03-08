import { createContext, useContext, useState , useEffect  } from 'react'
import {auth} from '../firebase'

const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState( null)



    // useEffect(() => {
        
        auth.onAuthStateChanged(setUser)
    
    // })

    return <authContext.Provider value={{ user }}>
        {children}
    </authContext.Provider>
}


const useAuth = () => useContext(authContext)

export { useAuth, AuthProvider }