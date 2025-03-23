import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../public/firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    // console.log(user, loading)
    const googleLogin = new GoogleAuthProvider()
    const gitHublogin = new GithubAuthProvider()
    const creatNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInwWitheGoole = () => {
        return signInWithPopup(auth, googleLogin)
    }
    const gitHubSingIn = () => {
        return signInWithPopup(auth, gitHublogin)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const upsateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const authInfo = {
        creatNewUser,
        user,
        setUser,
        logOut,
        userLogin,
        loading,
        upsateUserProfile,
        singInwWitheGoole,
        gitHubSingIn ,
    }
    useEffect(() => {
        const unSubscib = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscib();
        }
    }, [])

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;