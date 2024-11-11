// src/auth/AuthWrapper.tsx
import React, { useState, ReactNode } from "react";
import { AppContext } from "../context"; // Import AuthContext from the new file
import { RenderHeader } from "../components/structure/Header";
import { RenderRoutes } from "../components/structure";
import { RenderFooter } from "../components/structure/Footer";

interface User {
    name: string;
    isAuthenticated: boolean;
}

interface AppWrapperProps {
    children?: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    const [ selectedMenu, setSelectedMenu ] = useState("/");
    
    return (
        <AppContext.Provider value={{ selectedMenu, setSelectedMenu }}>
            {children}
        </AppContext.Provider>
    );
};



