import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signInUser = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserInfo = (updateData) =>{
        return updateProfile(auth.currentUser , updateData )
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        loading,
        updateUserInfo
    }
    console.log(loading);
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[auth])

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider