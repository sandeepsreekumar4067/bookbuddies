import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("logged in");
        setIsLoggedIn(loggedInStatus === "true");
    }, []);

    const login = () => {
        localStorage.setItem("logged in", "true");
        setIsLoggedIn(true);
    };

    const logout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout ???")
        if(confirmLogout){
            localStorage.removeItem("logged in");
            setIsLoggedIn(false);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
