import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword,
    signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

function AuthContextProvider({children}) 
{
    const userApi = "http://localhost:3000/users"
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        }
    const gAuthProvider = new GoogleAuthProvider()
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,gAuthProvider)
    }
    return (
    <div>
        <AuthContext.Provider value={{createUser, signInWithGoogle,userApi}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
export default AuthContextProvider;