import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user , setUser] = useState(null)

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signInUser = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubcribe()
        }
    },[auth])

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider