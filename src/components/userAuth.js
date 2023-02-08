import {createContext, useEffect, useState,useContext} from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged
} from 'firebase/auth';
import {auth} from './firebase'


const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState("");
    const [loading,setLoading] = useState("");
    
     function signUp(email,password,role){
        console.log(email,password)
          return createUserWithEmailAndPassword(auth,email,password,role);
    }
    function logIn(email,password){
        console.log("Email:",email);
        return signInWithEmailAndPassword(auth,email,password);
  }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser)
           setLoading(false);
      });
      return()=>{
          unsubscribe();
      }
    },[]);
    return <userAuthContext.Provider value={{user,signUp,logIn}}>{!loading&&children}</userAuthContext.Provider>
}
export function useUserAuth(){

    return useContext(userAuthContext);
}