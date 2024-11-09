// src/auth/AuthWrapper.tsx
import React, { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext"; // Import AuthContext from the new file
import { RenderHeader } from "../components/structure/Header";
import { RenderRoutes } from "../components/structure";
import { RenderFooter } from "../components/structure/Footer";

interface User {
    name: string;
    isAuthenticated: boolean;
}

interface AuthWrapperProps {
    children?: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const [user, setUser] = useState<User>({ name: "", isAuthenticated: false });

    const login = (userName: string, password: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (password) {
                setUser({ name: userName, isAuthenticated: true });
                resolve("success");
            } else {
                reject("Incorrect password");
            }
        });
    };

    const logout = () => {
        setUser((prevUser) => ({ ...prevUser, isAuthenticated: false }));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
                <RenderHeader />
                <RenderRoutes />
                <div className="flex-auto">
                    {children}
                </div>
                <RenderFooter />
            </>
        </AuthContext.Provider>
    );
};

export default AuthWrapper;
