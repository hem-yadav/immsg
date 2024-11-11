import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface User {
    name: string;
    isAuthenticated: boolean;
}

interface AuthContextType {
    user: User;
    login: (userName: string, password: string) => Promise<string>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: { name: "", isAuthenticated: false },
    login: async () => {
        return Promise.reject("login function must be overridden in AuthWrapper");
    },
    logout: () => {
        throw new Error("logout function must be overridden in AuthWrapper");
    }
});

const useAuthData = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthData must be used within an AuthWrapper");
    }
    return context;
};

interface AppContextType {
    selectedMenu: string,
    setSelectedMenu: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<AppContextType>({
    selectedMenu: "/",
    setSelectedMenu: () => {
        throw new Error("logout function must be overridden in AuthWrapper");
    }
});

const useAppData = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppData must be used within an AppWrapper");
    }
    return context;
};

export { AuthContext, useAuthData, AppContext, useAppData };
