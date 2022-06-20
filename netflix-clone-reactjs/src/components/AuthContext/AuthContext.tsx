import {createContext, useContext, useEffect, useState} from 'react';
// @ts-ignore
import {auth, db} from '../../config/Firebase.ts';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {doc, setDoc} from 'firebase/firestore'
interface IContext {
    signUp:object,
    user:object,
    logIn:object,
    logOut:object
}

export const AuthContext = createContext<IContext>({signUp:{}, 
    user:{}, logIn:{}, logOut:{}});

export function AuthContextProvider({children}){

    const [user, setUser] = useState({});

    function signUp(email:string,password:string){
         createUserWithEmailAndPassword(auth, email, password);
         setDoc(doc(db, 'users', email),{
            savedShows:[]
         })
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

function defaultValue<T>(defaultValue: any, IContext: any) {
    throw new Error('Function not implemented.');
}
