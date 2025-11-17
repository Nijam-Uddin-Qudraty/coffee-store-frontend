import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword,
    signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

function AuthContextProvider({children}) 
{
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        }
    const gAuthProvider = new GoogleAuthProvider()
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,gAuthProvider)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const type = {
        createUser,
        signInWithGoogle,
        signIn
    }
    return (
    <div>
        <AuthContext.Provider value={type}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
export default AuthContextProvider;