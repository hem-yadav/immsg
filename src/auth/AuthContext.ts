import { createContext, useContext } from "react";

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

export const useAuthData = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthData must be used within an AuthWrapper");
    }
    return context;
};

export { AuthContext };
