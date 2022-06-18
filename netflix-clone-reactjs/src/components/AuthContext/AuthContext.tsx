import {createContext, useContext, useEffect, useState} from 'react';
// @ts-ignore
import {auth} from '../../config/Firebase.ts';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

interface IContext {
    // signUp:object,
    // user:object
}

export const AuthContext = createContext<IContext>({});

export function AuthContextProvider({children}){

    const [user, setUser] = useState({});

    function signUp(email:string,password:string){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email:string, password:string){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser!);
        })
        return(()=>{
            unsubscribe();
        })
    }, [])
    

   return <AuthContext.Provider value={{signUp, logIn, logOut, user}}>{children}</AuthContext.Provider>
}

export function User() {
      
    return useContext(AuthContext);
  }