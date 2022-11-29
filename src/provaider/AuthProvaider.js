
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'


const auth=getAuth(app);
const provaider=new GoogleAuthProvider()

export const AuthContext=createContext()

const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null)

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const googleSignIn=()=>{
        return signInWithPopup(auth,provaider)
    }

    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
        })

        return()=>{
            return unSubscribe()
        }
    },[])


    const authinfo={login,googleSignIn,createAccount,user}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;