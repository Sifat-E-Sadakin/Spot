import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Components/Firebase/firebase.config';



export let userAuth = createContext(null)

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState([])
    let [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    let googlePopUp = ()=>{
        return signInWithPopup(auth, provider)
    }

    
    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, userInfo=>{
            
                setUser(userInfo);
                setLoading(false)
                 console.log("onAuth change", userInfo);
                
            

        })

        return ()=>{
            unsubscribe();
        } 
    },[])

    let logOut = ()=>{
        return signOut(auth)
    }
    let userInfo = {
        user,
        googlePopUp,
        logOut

    }
    return (
        <userAuth.Provider value={userInfo}>
            {children}
        </userAuth.Provider>
    );
};

export default AuthProvider;