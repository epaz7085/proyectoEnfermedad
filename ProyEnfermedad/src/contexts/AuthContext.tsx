import { createContext, useState, ReactNode, useContext } from "react";
// LIBRERIAS
/**npm i npm i i18n@0.15.3 i18n-js@^4.5.1
 * npm install
 * npm i @react-native-async-storage/async-storage@2.2.0
 */

// Tipado de usuario para el contexto de autenticación
type User = {
    name: string;
    phone: string;
    email: string;
    password: string;
} | null;

type AuthContextType = {
    user: User | null;
    login: (email: string) => boolean;
    logout: () => void;
    register: (name: string, phone: string, email: string, password: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};

type Props = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string) : boolean => {
        const allowed = email.endsWith(".edu");
        if (allowed) {
            setUser({
                name: "",
                phone: "",
                email,
                password: "",
            });
        }
        return allowed;
    }

    const logout = () => {
        setUser(null);
    }

    const register = (name: string, phone: string, email: string, password: string) => {
        setUser({
            name,
            phone,
            email,
            password,
        });
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
} 
